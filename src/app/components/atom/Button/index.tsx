import cls from 'classnames';
import { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  children: ReactNode;
}

const Button = (props: ButtonProps) => {
  const btnClass = cls(
    'px-8',
    'py-4',
    'rounded-full',
    'border-black',
    'text-3xl',
    props.className,
  );

  return <button className={btnClass}>{props.children}</button>;
};

export default Button;
export type { ButtonProps };
