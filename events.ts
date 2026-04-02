import { Link, useLocation } from 'react-router-dom';
import { Calendar, Bell } from 'lucide-react';
import { cn } from '@/src/lib/utils';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Início', path: '/move' },
    { name: 'Agenda', path: '/move/full-schedule' },
    { name: 'Eventos Move', path: '/move/schedules' },
    { name: 'Líderes da Casa', path: '/move/leaders' },
    { name: 'GCs', path: '/move/gcs' },
  ];

  return (
    <nav className="sticky top-0 z-50 flex w-full items-center justify-between border-b-2 border-move-blue bg-neutral-950 px-4 py-3 font-bold uppercase tracking-tighter text-move-blue sm:px-6 sm:py-4">
      <div className="flex items-center gap-4">
        <Link to="/" className="text-xs font-black uppercase tracking-[0.25em] text-white/55 hover:text-white">Portal</Link>
        <Link to="/move" className="text-xl font-black italic text-move-blue sm:text-2xl">MOVE</Link>
      </div>

      <div className="hidden items-center gap-8 md:flex">
        {links.map((link) => {
          const isActive = location.pathname === link.path;
          return (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'px-2 transition-colors',
                isActive ? 'border-b-4 border-move-pink text-move-pink' : 'text-neutral-400 hover:bg-move-blue hover:text-white'
              )}
            >
              {link.name}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-2 sm:gap-4">
        <a
          href="https://www.instagram.com/move.alphaville/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden text-[10px] tracking-widest text-move-pink transition-colors hover:text-white lg:block"
        >
          @MOVE.ALPHAVILLE
        </a>
        <Link to="/move/full-schedule" className="rounded border border-move-blue/30 p-2 sm:border-0 sm:p-0">
          <Calendar className="cursor-pointer transition-colors hover:text-move-pink" size={18} />
        </Link>
        <button type="button" className="rounded border border-move-blue/30 p-2 sm:border-0 sm:p-0" aria-label="Notificações">
          <Bell className="cursor-pointer transition-colors hover:text-move-pink" size={18} />
        </button>
      </div>
    </nav>
  );
}
