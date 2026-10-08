import { useEffect, useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { EVENT_END, EVENT_START, getEventStatus, VIP_URL } from '@/lib/campaign';

export function VipButton({ children = 'Entrar no Grupo VIP do WhatsApp', className = '' }: { children?: React.ReactNode; className?: string }) {
  return <Button asChild variant="vip" className={`vip-button ${className}`}><a href={VIP_URL} target="_blank" rel="noopener noreferrer"><MessageCircle className="size-5" />{children}<ArrowUpRight className="size-4" /></a></Button>;
}

export function Countdown() {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    setNow(Date.now());
    const timer = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(timer);
  }, []);
  const status = now === null ? 'upcoming' : getEventStatus(now);
  if (status === 'ended') return <div className="text-sm font-medium">Evento encerrado · acompanhe as novidades no Grupo VIP.</div>;
  const seconds = now === null ? null : Math.max(0, Math.floor(((status === 'live' ? EVENT_END : EVENT_START) - now) / 1000));
  const values = seconds === null ? ['—', '—', '—', '—'] : [Math.floor(seconds / 86400), Math.floor(seconds / 3600) % 24, Math.floor(seconds / 60) % 60, seconds % 60].map(v => String(v).padStart(2, '0'));
  return <div><p className="mb-3 text-[10px] uppercase tracking-[1px] text-hero-muted">{status === 'live' ? 'A Black já começou. Termina em' : 'A maior oportunidade do ano começa em'}</p><div className="countdown" aria-label="Contagem regressiva da Black Pau Brasil">{values.map((value, i) => <div className="countdown-unit" key={i}><strong>{value}</strong><small>{['dias', 'horas', 'minutos', 'segundos'][i]}</small></div>)}</div></div>;
}