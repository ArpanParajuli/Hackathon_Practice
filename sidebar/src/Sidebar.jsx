import React, { useState } from 'react';
import './Sidebar.css';

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState('dashboard');

  // Menu items - easy to customize
  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: '📊' },
    { id: 'revenue', name: 'Revenue', icon: 'ℹ️' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'analytics', name: 'Analytics', icon: '📈' },
    { id: 'likes', name: 'Likes', icon: '❤️' },
    { id: 'wallets', name: 'Wallets', icon: '👛' },
  ];

  // Handle menu click
  const handleMenuClick = (id) => {
    setActiveMenu(id);
    // Close sidebar on mobile after clicking
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  // Handle logout
  const handleLogout = () => {
    alert('You have been logged out!');
  };

  // Toggle dark mode (simple example)
  const handleDarkMode = () => {
    alert('Dark mode toggled!');
  };

  return (
    <>
      {/* Mobile menu button */}
      <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <span className="hamburger">☰</span>
      </button>

      {/* Sidebar */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        
        {/* Brand section */}
        <div className="sidebar-header">
          <div className="brand">
            <span className="brand-icon">🚀</span>
            <span className="brand-text">CodingHub</span>
          </div>
        </div>

        {/* Menu items */}
        <nav className="menu">
          <ul>
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  className={`menu-item ${activeMenu === item.id ? 'active' : ''}`}
                  onClick={() => handleMenuClick(item.id)}
                >
                  <span className="icon">{item.icon}</span>
                  <span className="label">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer section */}
        <div className="sidebar-footer">
          <button className="footer-btn dark-mode-btn" onClick={handleDarkMode}>
            <span>🌙</span>
            <span>Dark Mode</span>
          </button>
          
          <button className="footer-btn logout-btn" onClick={handleLogout}>
            <span>🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Close sidebar when clicking outside on mobile */}
      {isOpen && (
        <div className="overlay" onClick={() => setIsOpen(false)}></div>
      )}
    </>
  );
}

export default Sidebar;
