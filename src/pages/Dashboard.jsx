import React from 'react'
import { motion } from 'framer-motion'

function Dashboard() {
  const activeProjects = [
    { id: 1, name: 'City Center Mall', progress: 75, location: 'Downtown' },
    { id: 2, name: 'Riverside Apartments', progress: 45, location: 'East Side' },
    { id: 3, name: 'Tech Park Phase 2', progress: 30, location: 'Industrial Zone' }
  ]

  const teamMembers = [
    { id: 1, name: 'John Doe', role: 'Site Manager', status: 'online' },
    { id: 2, name: 'Jane Smith', role: 'Architect', status: 'offline' },
    { id: 3, name: 'Mike Johnson', role: 'Engineer', status: 'online' }
  ]

  const deadlines = [
    { id: 1, task: 'Foundation Completion', date: '2024-03-15' },
    { id: 2, task: 'Electrical Installation', date: '2024-03-20' },
    { id: 3, task: 'Interior Finishing', date: '2024-03-25' }
  ]

  return (
    <div>
      <h1 className="page-title">Dashboard</h1>
      <div className="grid">
        <motion.div
          className="glassmorphism card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>Active Projects</h2>
          {activeProjects.map(project => (
            <div key={project.id} style={{ marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <h3>{project.name}</h3>
                <span>{project.location}</span>
              </div>
              <div style={{ 
                background: 'rgba(255,255,255,0.1)',
                borderRadius: '4px',
                height: '8px',
                marginTop: '8px'
              }}>
                <div
                  style={{
                    width: `${project.progress}%`,
                    height: '100%',
                    background: 'var(--accent-color)',
                    borderRadius: '4px',
                    transition: 'width 0.3s ease'
                  }}
                />
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          className="glassmorphism card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h2>Team Status</h2>
          {teamMembers.map(member => (
            <div
              key={member.id}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '12px'
              }}
            >
              <div
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'var(--accent-color)',
                  marginRight: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                {member.name[0]}
              </div>
              <div>
                <h3 style={{ fontSize: '16px' }}>{member.name}</h3>
                <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                  {member.role}
                </p>
              </div>
              <div
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: member.status === 'online' ? '#4CAF50' : '#757575',
                  marginLeft: 'auto'
                }}
              />
            </div>
          ))}
        </motion.div>

        <motion.div
          className="glassmorphism card"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2>Upcoming Deadlines</h2>
          {deadlines.map(deadline => (
            <div
              key={deadline.id}
              style={{
                padding: '12px',
                marginBottom: '8px',
                borderRadius: '8px',
                background: 'rgba(255,255,255,0.05)'
              }}
            >
              <h3 style={{ fontSize: '16px' }}>{deadline.task}</h3>
              <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>
                Due: {new Date(deadline.date).toLocaleDateString()}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard