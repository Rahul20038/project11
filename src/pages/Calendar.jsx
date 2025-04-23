// import React from 'react'
// import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar'
// import { format, parse, startOfWeek, getDay } from 'date-fns'
// import 'react-big-calendar/lib/css/react-big-calendar.css'

// const locales = {
//   'en-US': require('date-fns/locale/en-US')
// }

// const localizer = dateFnsLocalizer({
//   format,
//   parse,
//   startOfWeek,
//   getDay,
//   locales
// })

// function Calendar() {
//   const events = [
//     {
//       title: 'Foundation Work - City Center',
//       start: new Date(2024, 2, 15),
//       end: new Date(2024, 2, 20)
//     },
//     {
//       title: 'Electrical Installation - Riverside',
//       start: new Date(2024, 2, 18),
//       end: new Date(2024, 2, 22)
//     },
//     {
//       title: 'Interior Finishing - Tech Park',
//       start: new Date(2024, 2, 25),
//       end: new Date(2024, 2, 30)
//     }
//   ]

//   return (
//     <div>
//       <h1 className="page-title">Construction Schedule</h1>
//       <div className="glassmorphism" style={{ padding: '20px', height: 'calc(100vh - 140px)' }}>
//         <BigCalendar
//           localizer={localizer}
//           events={events}
//           startAccessor="start"
//           endAccessor="end"
//           style={{
//             height: '100%',
//             background: 'transparent'
//           }}
//         />
//       </div>
//     </div>
//   )
// }

// export default Calendar



import React from 'react'
import { Calendar as BigCalendar, dateFnsLocalizer } from 'react-big-calendar'
import { format, parse, startOfWeek, getDay } from 'date-fns'
import enUS from 'date-fns/locale/en-US' // ✅ Correct way for Vite/React
import 'react-big-calendar/lib/css/react-big-calendar.css'

const locales = {
  'en-US': enUS
}

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek: () => startOfWeek(new Date(), { weekStartsOn: 0 }), // ✅ Always start week from Sunday
  getDay,
  locales
})

function Calendar() {
  const events = [
    {
      title: 'Foundation Work - City Center',
      start: new Date(2024, 2, 15),
      end: new Date(2024, 2, 20)
    },
    {
      title: 'Electrical Installation - Riverside',
      start: new Date(2024, 2, 18),
      end: new Date(2024, 2, 22)
    },
    {
      title: 'Interior Finishing - Tech Park',
      start: new Date(2024, 2, 25),
      end: new Date(2024, 2, 30)
    }
  ]

  return (
    <div className="calendar-container">
      <h1 className="page-title" style={{ textAlign: 'center', marginBottom: '20px' }}>
        Construction Schedule
      </h1>
      <div
        className="glassmorphism"
        style={{
          padding: '20px',
          height: 'calc(100vh - 140px)',
          borderRadius: '20px',
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(10px)',
          boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)'
        }}
      >
        <BigCalendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{
            height: '100%',
            backgroundColor: 'transparent',
            color: 'white'
          }}
        />
      </div>
    </div>
  )
}

export default Calendar
