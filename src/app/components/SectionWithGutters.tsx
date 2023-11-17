import { clsx } from 'clsx';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

export const SectionWithGutters: React.FC<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
> = (props) => (
  <section
    {...props}
    className={clsx(props.className, 'flex-grow items-center px-4 py-16 lg:px-0')}
  />
);
