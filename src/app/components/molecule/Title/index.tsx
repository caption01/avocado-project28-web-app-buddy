import { ReactNode } from 'react';

import { Text } from '@/app/components';

interface TitleProps {
  bold?: boolean;
  children: ReactNode;
}

const Title = (props: TitleProps) => {
  return (
    <Text className='text-5xl' bold={props.bold}>
      {props.children}
    </Text>
  );
};

export default Title;
export type { TitleProps };
