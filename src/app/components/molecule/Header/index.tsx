import { ReactNode } from 'react';

import { Text } from '@/app/components';

interface HeaderProps {
  bold?: boolean;
  className?: string;
  children: ReactNode;
}

const Header = (props: HeaderProps) => {
  return (
    <Text className={`text-8xl ${props?.className}`} bold={props.bold}>
      {props.children}
    </Text>
  );
};

export default Header;
export type { HeaderProps };
