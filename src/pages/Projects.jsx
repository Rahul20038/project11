import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Projects() {
  const [showModal, setShowModal] = useState(false)
  const [projects] = useState([
    {
      id: 1,
      name: 'City Center Mall',
      location: 'Downtown',
      startDate: '2024-01-15',
      endDate: '2024-12-31',
      status: 'In Progress'
    },
    {
      id: 2,
      name: 'Riverside Apartments',
      location: 'East Side',
      startDate: '2024-02-01',
      endDate: '2024-08-30',
      status: 'Planning'
    },
    {
      id: 3,
      name: 'Tech Park Phase 2',
      location: 'Industrial Zone',
      startDate: '2024-03-01',
      endDate: '2025-03-01',
      status: 'In Progress'
    }
  ])

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 className="page-title">Projects</h1>
        <button onClick={() => setShowModal(true)}>Add Project</button>
      </div>

      <div className="glassmorphism" style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th style={{ padding: '16px', textAlign: 'left' }}>Name</th>
              <th style={{ padding: '16px', textAlign: 'left' }}>Location</th>
              <th style={{ padding: '16px', textAlign: 'left' }}>Start Date</th>
              <th style={{ padding: '16px', textAlign: 'left' }}>End Date</th>
              <th style={{ padding: '16px', textAlign: 'left' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {projects.map(project => (
              <tr key={project.id} style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
                <td style={{ padding: '16px' }}>{project.name}</td>
                <td style={{ padding: '16px' }}>{project.location}</td>
                <td style={{ padding: '16px' }}>{project.startDate}</td>
                <td style={{ padding: '16px' }}>{project.endDate}</td>
                <td style={{ padding: '16px' }}>
                  <span
                    style={{
                      padding: '4px 8px',
                      borderRadius: '4px',
                      background: project.status === 'In Progress' ? '#4CAF50' : '#FFA500',
                      fontSize: '14px'
                    }}
                  >
                    {project.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0,0,0,0.8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 1000
            }}
          >
            <motion.div
              className="glassmorphism"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              style={{ padding: '24px', width: '100%', maxWidth: '500px' }}
            >
              <h2 style={{ marginBottom: '24px' }}>Add New Project</h2>
              <form>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '8px' }}>Project Name</label>
                  <input
                    type="text"
                    style={{
                      width: '100%',
                      padding: '8px',
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '4px',
                      color: 'white'
                    }}
                  />
                </div>
                <div style={{ marginBottom: '16px' }}>
                  <label style={{ display: 'block', marginBottom: '8px' }}>Location</label>
                  <input
                    type="text"
                    style={{
                      width: '100%',
                      padding: '8px',
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '4px',
                      color: 'white'
                    }}
                  />
                </div>
                <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '8px' }}>Start Date</label>
                    <input
                      type="date"
                      style={{
                        width: '100%',
                        padding: '8px',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '4px',
                        color: 'white'
                      }}
                    />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '8px' }}>End Date</label>
                    <input
                      type="date"
                      style={{
                        width: '100%',
                        padding: '8px',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '4px',
                        color: 'white'
                      }}
                    />
                  </div>
                </div>
                <div style={{ display: 'flex', gap: '16px', justifyContent: 'flex-end' }}>
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    style={{ background: 'transparent', border: '1px solid var(--accent-color)', color: 'var(--accent-color)' }}
                  >
                    Cancel
                  </button>
                  <button type="submit">Add Project</button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Projects