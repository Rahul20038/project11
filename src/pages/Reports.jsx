import React from 'react'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell
} from 'recharts'

function Reports() {
  const budgetData = [
    { name: 'City Center', budget: 1000000, actual: 750000 },
    { name: 'Riverside', budget: 800000, actual: 600000 },
    { name: 'Tech Park', budget: 1200000, actual: 400000 }
  ]

  const progressData = [
    { name: 'Completed', value: 30 },
    { name: 'In Progress', value: 45 },
    { name: 'Not Started', value: 25 }
  ]

  const COLORS = ['#4CAF50', '#FFA500', '#757575']

  return (
    <div>
      <h1 className="page-title">Reports</h1>
      <div className="grid">
        <div className="glassmorphism card">
          <h2 style={{ marginBottom: '20px' }}>Project Budgets</h2>
          <BarChart
            width={500}
            height={300}
            data={budgetData}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="budget" fill="#8884d8" name="Budget" />
            <Bar dataKey="actual" fill="#82ca9d" name="Actual Spent" />
          </BarChart>
        </div>

        <div className="glassmorphism card">
          <h2 style={{ marginBottom: '20px' }}>Project Progress</h2>
          <PieChart width={400} height={300}>
            <Pie
              data={progressData}
              cx={200}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
              label
            >
              {progressData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </div>
      </div>
    </div>
  )
}

export default Reports