import { Link } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

interface NavLinkProps {
  redirect: string;
  title: string;
  style?: string;
}

export function NavLink({ redirect, title, style }: NavLinkProps) {
  return (
    <li>
      <Link to={redirect} className={twMerge('font-medium text-sm', style)}>
        {title}
      </Link>
    </li>
  );
}
