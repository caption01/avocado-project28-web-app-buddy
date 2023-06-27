import React from 'react';

import { Header, Title, Screen } from '@/app/components';

export default function Page() {
  return (
    <div>
      <Screen className='h-screen'>
        <Header>The Best Avocado Shop</Header>
      </Screen>
      <Screen className='h-screen'>
        <Title bold>Avocado everyday.</Title>
        <Title bold>Keep doctor awy</Title>
      </Screen>
      <Screen className='h-screen'>
        <Header>Recipe</Header>
      </Screen>
      <Screen className='h-screen'>
        <Header>Start Your Plan.</Header>
      </Screen>
      <Screen className='h-screen'>
        <Header>Connect with us</Header>
      </Screen>
    </div>
  );
}
