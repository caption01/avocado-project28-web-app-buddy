import React from 'react';

import { Header, Title, Screen, Button } from '@/app/components';

export default function Page() {
  return (
    <div>
      <Screen className='h-screen'>
        <div className='grid grid-cols-1 grid-rows-1 h-full'>
          <div className='flex justify-center items-center'>
            <div>
              <Header className='mb-4'>The Best</Header>
              <Header className='mb-4' bold>
                Avocado Shop
              </Header>
              <Button className='bg-gray-500'>Buy Now</Button>
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
