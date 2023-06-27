import { ReactNode } from 'react';
import cls from 'classnames';

interface TextProps {
  className: string;
  children: ReactNode;
  bold?: boolean;
}

const Text = (props: TextProps) => {
  const textClass = cls(props.className, { 'font-bold': !!props.bold });

  return <div className={textClass}>{props.children}</div>;
};

export default Text;
export type { TextProps };
