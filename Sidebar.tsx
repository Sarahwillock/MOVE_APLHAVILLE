import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/src/lib/utils';

const months = [
  { name: 'Abril', path: '/april' },
  { name: 'Maio', path: '/may' },
  { name: 'Junho', path: '/' },
];

export default function MonthSwitcher() {
  const location = useLocation();

  return (
    <div className="flex gap-2 mb-8 overflow-x-auto pb-2 no-scrollbar">
      {months.map((month) => {
        const isActive = location.pathname === month.path || (month.path === '/' && location.pathname === '/june');
        return (
          <Link
            key={month.name}
            to={month.path}
            className={cn(
              "px-6 py-2 font-black uppercase italic tracking-tighter transition-all border-2",
              isActive 
                ? "bg-move-blue text-white border-move-blue scale-105 z-10" 
                : "bg-black/40 text-white/60 border-white/20 hover:border-white/60"
            )}
          >
            {month.name}
          </Link>
        );
      })}
      <Link
        to="/schedules"
        className="px-6 py-2 font-black uppercase italic tracking-tighter transition-all border-2 bg-black/40 text-white/60 border-white/20 hover:border-white/60 ml-auto"
      >
        EVENTOS MOVE
      </Link>
    </div>
  );
}
