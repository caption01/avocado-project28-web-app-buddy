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
              <Header className='mb-12' bold>
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
            <Title className='leading-relaxed mb-24'>
              Eating avocado every day has numerous health benefits. Avocados
              are a{' '}
              <span className='underline underline-offset-2 decoration-4 mr-4'>
                great source of healthy fats, fiber, and vitamins.
              </span>
              Consuming them regularly can help improve heart health by lowering
              cholesterol levels and reducing the risk of heart disease.
            </Title>
            <Button className='border-2 border-black'>Program</Button>
          </div>
        </div>
      </Screen>
      <Screen className='h-screen flex flex-col items-center'>
        <Header className='mb-24'>Recipe</Header>
        <div className='grid grid-cols-3 grid-rows-2 w-4/5 h-3/5 gap-8 mx-auto mb-24'>
          <div className='col-span-2 row-span-2'>
            <video className='w-full h-full object-fill' controls autoPlay>
              <source src='/video/avocado-recipe-1.mp4' type='video/mp4' />
            </video>
          </div>
          <div>
            <video className='w-full h-full object-fill' controls autoPlay>
              <source src='/video/avocado-recipe-2.mp4' type='video/mp4' />
            </video>
          </div>
          <div>
            <video className='w-full h-full object-fill' controls autoPlay>
              <source src='/video/avocado-recipe-3.mp4' type='video/mp4' />
            </video>
          </div>
        </div>
        <div className=''>
          <Button className='border-2 border-black'>More</Button>
        </div>
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
