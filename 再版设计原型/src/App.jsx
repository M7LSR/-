import { useState } from 'react'
import PhoneShell from './components/PhoneShell'
import PageSwitcher from './components/PageSwitcher'
import AnalyticsPage from './pages/AnalyticsPage'
import IdleGapPage from './pages/IdleGapPage'
import LibraryPage from './pages/LibraryPage'
import PlannerHubPage from './pages/PlannerHubPage'
import SeatBookingPage from './pages/SeatBookingPage'
import StudyChecklistPage from './pages/StudyChecklistPage'

const PAGE_IDS = ['gap', 'seat', 'tasks', 'hub', 'analytics', 'library']

export default function App() {
  const [page, setPage] = useState(() => {
    const hash = window.location.hash.replace('#', '')
    return PAGE_IDS.includes(hash) ? hash : 'gap'
  })
  const [pagesOpen, setPagesOpen] = useState(false)

  const openPages = () => setPagesOpen((open) => !open)

  return (
    <PhoneShell>
      {page === 'gap' ? (
        <IdleGapPage
          onOpenPages={openPages}
          onBookSeat={() => setPage('seat')}
        />
      ) : page === 'seat' ? (
        <SeatBookingPage onOpenPages={openPages} />
      ) : page === 'tasks' ? (
        <StudyChecklistPage onOpenPages={openPages} />
      ) : page === 'hub' ? (
        <PlannerHubPage onOpenPages={openPages} />
      ) : page === 'analytics' ? (
        <AnalyticsPage onOpenPages={openPages} />
      ) : (
        <LibraryPage onOpenPages={openPages} />
      )}

      <PageSwitcher
        open={pagesOpen}
        current={page}
        onSelect={setPage}
        onClose={() => setPagesOpen(false)}
      />
    </PhoneShell>
  )
}