import { ReactNode } from 'react';

interface TextProps {
  className: string;
  children: ReactNode;
}

const Text = (props: TextProps) => {
  return <div className={props.className}>{props.children}</div>;
};

export default Text;
export type { TextProps };
