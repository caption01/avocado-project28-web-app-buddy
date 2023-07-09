import { ReactNode } from 'react';

interface ScreenProps {
  className?: string;
  children: ReactNode;
}

const Screen = (props: ScreenProps) => {
  return <section className={props.className}>{props.children}</section>;
};

export default Screen;
export type { ScreenProps };
