document.addEventListener('DOMContentLoaded', () => {
  renderStats();
  renderFeed();
  setupNavigation();
});

const mockStats = [
  { label: 'Total Users', value: '14,287', change: '+12.5%', positive: true },
  { label: 'Revenue', value: '$48,350', change: '+8.2%', positive: true },
  { label: 'Conversion', value: '3.24%', change: '-0.4%', positive: false },
  { label: 'Bounce Rate', value: '42.1%', change: '+2.1%', positive: false },
];

const mockActivity = [
  { icon: '👤', desc: 'New user registered', sub: 'jane.doe@example.com', time: '2 min ago' },
  { icon: '💳', desc: 'Payment processed', sub: 'Invoice #1892 — $299', time: '18 min ago' },
  { icon: '📊', desc: 'Monthly report generated', sub: 'Sep 2023 report ready', time: '1 hour ago' },
  { icon: '⚙️', desc: 'Settings updated', sub: 'Email notifications enabled', time: '3 hours ago' },
  { icon: '🔔', desc: 'Alert triggered', sub: 'CPU usage exceeded 90%', time: '5 hours ago' },
  { icon: '👤', desc: 'User deleted account', sub: 'johndoe@example.com', time: 'Yesterday' },
];

function renderStats() {
  const grid = document.getElementById('statsGrid');
  grid.innerHTML = mockStats.map(stat => `
    <div class="stat-card">
      <span class="label">${stat.label}</span>
      <span class="value">${stat.value}</span>
      <span class="change ${stat.positive ? 'positive' : 'negative'}">
        ${stat.change} ${stat.positive ? '↑' : '↓'}
      </span>
    </div>
  `).join('');
}

function renderFeed() {
  const feedList = document.querySelector('.feed-list');
  feedList.innerHTML = mockActivity.map(item => `
    <div class="feed-item">
      <div class="icon">${item.icon}</div>
      <div class="details">
        <p>${item.desc}</p>
        <span>${item.sub}</span>
      </div>
      <span class="timestamp">${item.time}</span>
    </div>
  `).join('');
}

function setupNavigation() {
  const navItems = document.querySelectorAll('.nav-item');
  const views = {
    dashboard: document.getElementById('view-dashboard'),
    analytics: document.getElementById('view-analytics'),
    reports: document.getElementById('view-reports'),
    settings: document.getElementById('view-settings'),
  };

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();

      // Update active class
      navItems.forEach(n => n.classList.remove('active'));
      item.classList.add('active');

      // Hide all views, show selected
      const viewId = item.dataset.view;
      Object.values(views).forEach(v => v.classList.add('hidden'));
      if (views[viewId]) views[viewId].classList.remove('hidden');
    });
  });
}