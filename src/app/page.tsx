import React from 'react';

import { Header, Title, Screen, Button } from '@/app/components';

export default function Page() {
  return (
    <div className='container mx-auto px-4'>
      <Screen className='h-screen'>
        <div className='grid grid-cols-1 grid-rows-1 h-full'>
          <div className='flex justify-center items-center'>
            <div>
              <Header className='mb-4'>The Best</Header>
              <Header className='mb-4' bold>
                Avocado Shop
              </Header>
              <Button className='border-2 border-black'>Buy Now</Button>
            </div>
          </div>
        </div>
      </Screen>
      <Screen className='h-screen'>
        <div className='grid grid-cols-1 grid-rows-1 h-full'>
          <div>
            <Header className='mb-4' bold>
              Avocado everyday
            </Header>
            <Header className='mb-24' bold>
              Keep doctor awy
            </Header>
            <Title className='leading-relaxed'>
              Eating avocado every day has numerous health benefits. Avocados
              are a{' '}
              <span className='underline underline-offset-2 decoration-4 mr-4'>
                great source of healthy fats, fiber, and vitamins.
              </span>
              Consuming them regularly can help improve heart health by lowering
              cholesterol levels and reducing the risk of heart disease.
            </Title>
          </div>
        </div>
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
