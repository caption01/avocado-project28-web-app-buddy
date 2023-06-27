import { ReactNode } from 'react';

import { Text } from '@/app/components';

interface TitleProps {
  children: ReactNode;
}

const Title = (props: TitleProps) => {
  return <Text className='text-lg'>{props.children}</Text>;
};

export default Title;
export type { TitleProps };
