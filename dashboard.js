document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderFeed();
  setupNavigation();
});
// ... mock data functions unchanged ...

function setupNavigation() {
  const navLinks = document.querySelectorAll('.sidebar-nav .nav-item, .mobile-nav .mobile-nav-item');
  const views = {
    dashboard: document.getElementById('view-dashboard'),
    analytics: document.getElementById('view-analytics'),
    reports: document.getElementById('view-reports'),
    settings: document.getElementById('view-settings'),
  };

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Remove active from all nav links
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Show corresponding view
      const viewId = link.dataset.view;
      Object.values(views).forEach(v => v.classList.add('hidden'));
      if (views[viewId]) views[viewId].classList.remove('hidden');
    });
  });
}