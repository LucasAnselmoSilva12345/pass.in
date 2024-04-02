import { ComponentProps } from 'react';

interface TableProps extends ComponentProps<'table'> {}

export function Table(props: TableProps) {
  return (
    <div className="mt-5 border border-white/10 rounded-lg">
      <table className="w-full" {...props} />
    </div>
  );
}
