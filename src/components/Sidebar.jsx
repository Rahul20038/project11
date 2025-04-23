import React from 'react'
import { NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'

function Sidebar({ isOpen, setIsOpen }) {
  const navItems = [
    { path: '/', label: 'Dashboard', icon: '📊' },
    { path: '/projects', label: 'Projects', icon: '🏗️' },
    { path: '/teams', label: 'Teams', icon: '👥' },
    { path: '/calendar', label: 'Calendar', icon: '📅' },
    { path: '/reports', label: 'Reports', icon: '📈' }
  ]

  return (
    <motion.aside
      className="glassmorphism sidebar"
      animate={{ width: isOpen ? '240px' : '80px' }}
      style={{
        position: 'fixed',
        height: '100vh',
        padding: '20px',
        zIndex: 100
      }}
    >
      <div className="sidebar-header" style={{ marginBottom: '40px' }}>
        <motion.h1
          animate={{ opacity: isOpen ? 1 : 0 }}
          style={{ fontSize: '20px', fontWeight: 600 }}
        >
          {isOpen ? 'Construction Hub' : 'CH'}
        </motion.h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            position: 'absolute',
            right: '10px',
            top: '20px',
            background: 'transparent',
            color: 'var(--text-primary)'
          }}
        >
          {isOpen ? '←' : '→'}
        </button>
      </div>
      <nav>
        {navItems.map(({ path, label, icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `nav-item ${isActive ? 'active' : ''}`
            }
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '12px',
              marginBottom: '8px',
              borderRadius: '8px',
              textDecoration: 'none',
              color: 'var(--text-primary)',
              transition: 'all 0.3s ease'
            }}
          >
            <span style={{ marginRight: isOpen ? '12px' : '0' }}>{icon}</span>
            <motion.span
              animate={{ opacity: isOpen ? 1 : 0, display: isOpen ? 'block' : 'none' }}
            >
              {label}
            </motion.span>
          </NavLink>
        ))}
      </nav>
    </motion.aside>
  )
}

export default Sidebar