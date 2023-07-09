import React from 'react';

import { Header, Title, Screen } from '@/app/components';

export default function Page() {
  return (
    <div>
      <Screen className='h-screen'>
        <div className='grid grid-cols-1 grid-rows-1 h-full'>
          <div className='flex justify-center items-center'>
            <div>
              <Header className='mb-4'>The Best</Header>
              <Header bold>Avocado Shop</Header>
            </div>
          </div>
        </div>
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
