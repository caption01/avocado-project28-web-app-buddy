import { ReactNode } from 'react';

interface ScreenProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

const Screen = (props: ScreenProps) => {
  return (
    <section id={props.id} className={`px-48 ${props.className}`}>
      {props.children}
    </section>
  );
};

export default Screen;
export type { ScreenProps };
