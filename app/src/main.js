import './styles.css';

document.documentElement.classList.add('js');
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

// Header: hairline once the page scrolls.
const header = document.querySelector('[data-header]');
const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// Phone navigation: toggle, Escape, outside click and link selection all close it.
const toggle = document.querySelector('[data-nav-toggle]');
const nav = document.querySelector('[data-nav]');
const setNav = (open, { restoreFocus = false } = {}) => {
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('is-open', open);
  if (!open && restoreFocus) toggle.focus();
};
toggle.addEventListener('click', () => setNav(toggle.getAttribute('aria-expanded') !== 'true'));
nav.addEventListener('click', event => { if (event.target.closest('a')) setNav(false); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('is-open')) setNav(false, { restoreFocus: true });
});
document.addEventListener('click', event => {
  if (nav.classList.contains('is-open') && !header.contains(event.target)) setNav(false);
});
window.matchMedia('(min-width: 760px)').addEventListener('change', event => { if (event.matches) setNav(false); });

// Menu category filter.
const filterButtons = [...document.querySelectorAll('[data-filter]')];
const menu = document.querySelector('[data-menu]');
const groups = [...menu.querySelectorAll('[data-category]')];
const status = document.querySelector('[data-filter-status]');
const applyFilter = (value, announce = true) => {
  filterButtons.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.filter === value)));
  groups.forEach(group => { group.hidden = value !== 'all' && group.dataset.category !== value; });
  menu.classList.toggle('is-single', value !== 'all');
  if (!reduceMotion.matches) {
    menu.classList.remove('is-animating');
    void menu.offsetWidth;
    menu.classList.add('is-animating');
  }
  if (announce) {
    const label = filterButtons.find(button => button.dataset.filter === value).textContent.trim();
    status.textContent = value === 'all' ? 'Showing all menu categories' : `Showing ${label}`;
  }
};
filterButtons.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter)));

// Gentle entrances that replay when sections come back into view.
const reveals = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => entry.target.classList.toggle('is-in', entry.isIntersecting));
  }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
  reveals.forEach(element => observer.observe(element));
} else {
  reveals.forEach(element => element.classList.add('is-in'));
}

// Phone quick actions appear once the hero's own call/directions buttons scroll away.
const quickbar = document.querySelector('[data-quickbar]');
const heroActions = document.querySelector('.hero .actions');
if (quickbar && heroActions && 'IntersectionObserver' in window) {
  new IntersectionObserver(([entry]) => {
    quickbar.classList.toggle('is-shown', !entry.isIntersecting && entry.boundingClientRect.top < 0);
  }).observe(heroActions);
} else if (quickbar) {
  quickbar.classList.add('is-shown');
}

const year = document.querySelector('[data-year]');
if (year) year.textContent = String(new Date().getFullYear());
