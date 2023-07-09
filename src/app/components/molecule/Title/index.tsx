import { ReactNode } from 'react';

import { Text } from '@/app/components';

interface TitleProps {
  bold?: boolean;
  children: ReactNode;
  className?: string;
}

const Title = (props: TitleProps) => {
  return (
    <Text className={`text-5xl ${props?.className}`} bold={props.bold}>
      {props.children}
    </Text>
  );
};

export default Title;
export type { TitleProps };
