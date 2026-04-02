import HomePage from './pages/Home';
import PortalHome from './pages/PortalHome';
import UnitLanding from './pages/UnitLanding';
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import April from './pages/April';
import May from './pages/May';
import June from './pages/June';
import GCs from './pages/GCs';
import FullSchedule from './pages/FullSchedule';
import Leaders from './pages/Leaders';
import { Home, Calendar, LayoutGrid, Users } from 'lucide-react';
import { saveToCalendar } from './lib/calendar';
import Local from './pages/Local';

function MoveLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen overflow-x-hidden bg-black text-white">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col lg:ml-64">
        <Navbar />
        <main className="flex-1 pb-24 lg:pb-0">
          <AnimatePresence mode="wait">
            <Routes location={location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/june" element={<June />} />
              <Route path="/april" element={<April />} />
              <Route path="/may" element={<May />} />
              <Route path="/local" element={<Local />} />
              <Route
                path="/schedules"
                element={
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.3 }}>
                    <div className="p-4 sm:p-6 lg:p-8">
                      <div className="mb-8 border-l-4 border-white bg-move-blue p-4 shadow-[10px_10px_0px_0px_rgba(255,255,255,0.1)] sm:mb-12 sm:border-l-8 sm:p-6 lg:p-8">
                        <h2 className="mb-2 text-lg font-black italic uppercase tracking-tighter text-white sm:text-xl lg:text-2xl">PRÓXIMO EVENTO</h2>
                        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
                          <div className="min-w-0">
                            <h3 className="mb-2 text-3xl font-black uppercase leading-none text-white sm:text-4xl lg:text-5xl">Seminário de Evangelismo</h3>
                            <p className="text-sm font-bold uppercase tracking-[0.2em] text-white/80 sm:text-base lg:text-xl">11 DE ABRIL · SÁBADO · 15:00</p>
                          </div>
                          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                            <button
                              onClick={() =>
                                saveToCalendar({
                                  title: 'Seminário de Evangelismo',
                                  description: 'Seminário de Evangelismo - MOVE Alphaville',
                                  location: 'Igreja Dinamus Alphaville - Al. Mamoré, 521',
                                  startTime: '20260411T150000Z',
                                  endTime: '20260411T180000Z',
                                })
                              }
                              className="w-full bg-white px-5 py-3 text-base font-black uppercase tracking-tighter text-move-blue transition-all hover:bg-move-pink hover:text-white sm:w-auto sm:px-6 sm:text-lg lg:px-8 lg:py-4 lg:text-xl"
                            >
                              TE VEJO LÁ
                            </button>
                            <Link to="/move/april" className="w-full border-2 border-white px-5 py-3 text-center text-base font-black uppercase tracking-tighter text-white transition-all hover:bg-white hover:text-move-blue sm:w-auto sm:px-6 sm:text-lg lg:px-8 lg:py-4 lg:text-xl">
                              VER DETALHES
                            </Link>
                          </div>
                        </div>
                      </div>
                      <h1 className="mb-6 text-3xl font-black italic uppercase tracking-tighter text-move-blue sm:text-4xl lg:mb-8 lg:text-6xl">EVENTOS MOVE</h1>
                      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:gap-8">
                        <Link to="/move/april" className="group relative h-72 overflow-hidden border-2 border-move-blue sm:h-80 lg:h-96">
                          <img src="https://lh3.googleusercontent.com/aida/ADBb0uiAAOYNvj9TvpYA1-SK2D2OTGeSvPclxq4HHhCmQfo1SqxujI4oSbtFHxiqxj2QI5HrTvooYbFZnXHPb2IgKG4NDAmOhT5lGUHrZNeXhLDG6XM5VmGzuxgCoEof6Ww7n-iwgKqFsZsXAP46vSvUxUmQwOjEppKVxf4upnKM_EnsDwNyI9CmZf1CINUMzBj6Tit_Vxz3S-trcoERsR8vBLSxhdKK3YJUtuJ4YmeJfL1C0ZArRwZ2xeplmGd7N4aCuankBUos-I0xeiA" className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" alt="April" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
                          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                            <h2 className="text-4xl font-black italic uppercase text-white sm:text-5xl lg:text-6xl">ABRIL</h2>
                          </div>
                        </Link>
                        <Link to="/move/may" className="group relative h-72 overflow-hidden border-2 border-move-pink sm:h-80 lg:h-96">
                          <img src="https://lh3.googleusercontent.com/aida/ADBb0uicONRmhG4bJhSISyu3k4ACAPiV9d5J6P9HLx0kGbiT2OEerHQ7yl3oD0jLbk2mZfvSKzKcOccNXD3vwPJEUiHcnJfgw-X0Hlga2_To4xJPJ720G35mLKNt--NAdQfVo-OyTTO3O86Be8HFWUjQz03-iQvuDUmRK-k4qyw3__Nt14GemT4oRqCRJd7MRwCDOeVHwp9OwbGpjDKbbEFhbrfVeVW2AD8fs4J2ssUOcA4xrUYeKZazdyFIWNmM0aUabhVcV4A9xC_eng" className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" alt="May" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
                          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                            <h2 className="text-4xl font-black italic uppercase text-white sm:text-5xl lg:text-6xl">MAIO</h2>
                          </div>
                        </Link>
                        <Link to="/move/june" className="group relative h-72 overflow-hidden border-2 border-move-orange sm:h-80 lg:h-96">
                          <img src="https://lh3.googleusercontent.com/aida/ADBb0ujfdyVJB0MACQs9vJtZSkeMpsgW-Qss837J7lGLF923SC5Uuta5BYIRQyc-J3n9-5LJFrnBUwn4sy2RrZ5jDyAMbZHs-NPC8cTP3uj1PcUX33nvX0ej-2LJTlcRu528cGLVxjGCCXTuokHvHVj8AzKmp-Nmx3hTbfdgjced8jDt8gi0fafgklTXSPNl2bBX4Z5W6wGKW8zhp-u0tReYM2zGqyB1pOMEPhDLvH4HkWaMAbBXceSwe_zqB4ukavMPkd7mKM1GiLshdQ" className="absolute inset-0 h-full w-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0" alt="June" referrerPolicy="no-referrer" />
                          <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/20" />
                          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6">
                            <h2 className="text-4xl font-black italic uppercase text-white sm:text-5xl lg:text-6xl">JUNHO</h2>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                }
              />
              <Route path="/gcs" element={<GCs />} />
              <Route path="/full-schedule" element={<FullSchedule />} />
              <Route path="/leaders" element={<Leaders />} />
              <Route path="/tickets" element={<GCs />} />
              <Route path="*" element={<Navigate to="/move" replace />} />
            </Routes>
          </AnimatePresence>
        </main>

        <nav className="fixed bottom-0 z-50 flex w-full justify-around border-t-4 border-move-blue bg-black p-2 lg:hidden">
          <Link to="/move/schedules" className="flex flex-1 flex-col items-center justify-center p-2 text-neutral-400">
            <Home size={20} />
            <span className="text-[10px] font-bold uppercase">Início</span>
          </Link>
          <Link to="/move/full-schedule" className="flex flex-1 flex-col items-center justify-center p-2 text-neutral-400">
            <Calendar size={20} />
            <span className="text-[10px] font-bold uppercase">Agenda</span>
          </Link>
          <Link to="/move/leaders" className="flex flex-1 flex-col items-center justify-center p-2 text-neutral-400">
            <Users size={20} />
            <span className="text-[10px] font-bold uppercase">Líderes</span>
          </Link>
          <Link to="/move/gcs" className="flex flex-1 flex-col items-center justify-center p-2 text-neutral-400">
            <LayoutGrid size={20} />
            <span className="text-[10px] font-bold uppercase">GCs</span>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortalHome />} />
        <Route path="/move/*" element={<MoveLayout />} />
        <Route path="/:unitId" element={<UnitLanding />} />
      </Routes>
    </Router>
  );
}
