import cls from 'classnames';
import { ReactNode } from 'react';

interface ButtonProps {
  className?: string;
  children: ReactNode;
  onClick: () => void;
}

const Button = (props: ButtonProps) => {
  const btnClass = cls(
    'px-8',
    'py-4',
    'rounded-full',
    'border-black',
    'text-3xl',
    'border-2',
    'border-black',
    'bg-white',
    'cursor-pointer',
    props.className,
  );

  return (
    <button className={btnClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
export type { ButtonProps };
