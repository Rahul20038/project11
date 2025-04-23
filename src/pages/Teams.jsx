import React from 'react'
import { motion } from 'framer-motion'

function Teams() {
  const teams = [
    {
      id: 1,
      name: 'Site A Team',
      lead: 'John Doe',
      members: 8,
      project: 'City Center Mall'
    },
    {
      id: 2,
      name: 'Site B Team',
      lead: 'Jane Smith',
      members: 12,
      project: 'Riverside Apartments'
    },
    {
      id: 3,
      name: 'Planning Team',
      lead: 'Mike Johnson',
      members: 5,
      project: 'Tech Park Phase 2'
    }
  ]

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 className="page-title">Teams</h1>
        <button>Add Team</button>
      </div>

      <div className="grid">
        {teams.map((team, index) => (
          <motion.div
            key={team.id}
            className="glassmorphism card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <h2 style={{ marginBottom: '16px' }}>{team.name}</h2>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ color: 'var(--text-secondary)' }}>Team Lead</label>
              <p>{team.lead}</p>
            </div>
            <div style={{ marginBottom: '12px' }}>
              <label style={{ color: 'var(--text-secondary)' }}>Members</label>
              <p>{team.members} members</p>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={{ color: 'var(--text-secondary)' }}>Current Project</label>
              <p>{team.project}</p>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button style={{ flex: 1 }}>Manage Team</button>
              <button
                style={{
                  flex: 1,
                  background: 'transparent',
                  border: '1px solid var(--accent-color)',
                  color: 'var(--accent-color)'
                }}
              >
                Add Member
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Teams