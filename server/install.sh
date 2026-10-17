#!/usr/bin/env bash
set -euo pipefail
[[ $EUID == 0 ]] || { echo 'Run with sudo on the prepared server.' >&2; exit 1; }
cd "$(dirname "$0")/.."
for command in docker curl git python3 flock timeout sync systemctl; do command -v "$command" >/dev/null; done
docker compose version >/dev/null
docker network inspect xsolutions-proxy >/dev/null
[[ $(uname -m) == aarch64 ]] || { echo 'This installation expects ARM64.' >&2; exit 1; }
for path in /opt/fuentes-cafe /var/lib/fuentes-cafe-deploy /usr/local/share/fuentes-cafe; do
  [[ ! -L "$path" ]] || { echo 'Installation directories must not be symlinks.' >&2; exit 1; }
done
was_active=false
if systemctl is-active --quiet fuentes-cafe-update.timer; then was_active=true; fi
if systemctl cat fuentes-cafe-update.timer >/dev/null 2>&1; then systemctl stop fuentes-cafe-update.timer; fi
if systemctl cat fuentes-cafe-update.service >/dev/null 2>&1; then systemctl stop fuentes-cafe-update.service; fi
install -d -o root -g root -m 755 /opt/fuentes-cafe /usr/local/share/fuentes-cafe
install -d -o root -g root -m 700 /var/lib/fuentes-cafe-deploy
# Serialize administrator installation with any directly invoked updater too.
exec 9>/var/lib/fuentes-cafe-deploy/update.lock
flock -w 120 9
install -o root -g root -m 644 compose.production.yaml /usr/local/share/fuentes-cafe/compose.yaml
install -o root -g root -m 755 server/update-release.sh /usr/local/sbin/fuentes-cafe-update
install -o root -g root -m 644 server/fuentes-cafe-update.service /etc/systemd/system/fuentes-cafe-update.service
install -o root -g root -m 644 server/fuentes-cafe-update.timer /etc/systemd/system/fuentes-cafe-update.timer
# The retention observer and timer use this application's updater lock.
# Release our installation lock before installing the observer and shared timer.
flock -u 9
exec 9>&-
python3 server/retention/install_retention.py --config server/retention/app.json --service fuentes-cafe-update.service
systemctl daemon-reload
if [[ "$was_active" == true ]]; then systemctl start fuentes-cafe-update.timer; fi
echo 'Installed fuentes-cafe runtime and automatic image retention; existing app timer state preserved. For first setup, prepare HTTPS route then enable --now fuentes-cafe-update.timer.'
