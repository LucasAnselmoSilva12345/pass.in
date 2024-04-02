import { Link } from 'react-router-dom';
import nlwUniteIconImg from '../assets/nlw-unite-icon.svg';

export function Header() {
  return (
    <header className="w-full lg:max-w-[1216px] mx-auto p-5 flex items-center justify-between lg:justify-normal gap-5">
      <img src={nlwUniteIconImg} alt="Icone da aplicação do NLW Unite" />

      <nav>
        <ul className="flex items-center gap-5">
          <li>
            <Link to="/" className="font-medium text-sm text-zinc-300">
              Eventos
            </Link>
          </li>
          <li>
            <Link to="/" className="font-medium text-sm">
              Participantes
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
