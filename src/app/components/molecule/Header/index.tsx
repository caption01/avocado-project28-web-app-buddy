import { ReactNode } from 'react';

import { Text } from '@/app/components';

interface HeaderProps {
  children: ReactNode;
}

const Header = (props: HeaderProps) => {
  return <Text className='text-7xl'>{props.children}</Text>;
};

export default Header;
export type { HeaderProps };
