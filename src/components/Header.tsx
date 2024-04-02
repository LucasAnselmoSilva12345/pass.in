import nlwUniteIconImg from '../assets/nlw-unite-icon.svg';
import { NavLink } from './Nav-Link';

export function Header() {
  return (
    <header className="w-full lg:max-w-[1216px] mx-auto p-5 flex items-center justify-between lg:justify-normal gap-5">
      <img src={nlwUniteIconImg} alt="Icone da aplicação do NLW Unite" />

      <nav>
        <ul className="flex items-center gap-5">
          <NavLink redirect="/event" title="Eventos" style="text-zinc-300" />
          <NavLink redirect="/subscriber" title="Participantes" />
        </ul>
      </nav>
    </header>
  );
}
