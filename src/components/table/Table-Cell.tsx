import { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface TableCellProps extends ComponentProps<'td'> {
  customStyle?: string;
}

export function TableCell({ customStyle, ...props }: TableCellProps) {
  return (
    <td
      className={twMerge('py-3 px-4 text-sm text-zinc-300', customStyle)}
      {...props}
    />
  );
}
