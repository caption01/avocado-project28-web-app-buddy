'use client';

import React from 'react';
import Link from 'next/link';
import { ParallaxProvider } from 'react-scroll-parallax';

import {
  Header,
  Title,
  Screen,
  Button,
  Package,
  Contact,
  Footer,
  AvocadoParallax,
} from '@/app/components';

const packages = [
  {
    title: 'Starter package',
    text: ['for single order', '(6 pieces / 1 box)', 'receive', '1 package'],
    price: '799 Baht',
  },
  {
    title: 'Avocado lover',
    text: [
      'for monthly order',
      '(6 pieces / 1 box)',
      'receive',
      '1 package / week',
    ],
    price: '2999 Baht',
  },
];

const contacts = [
  {
    icon: '/images/logo-fb.png',
    alt: 'logo-fb',
    href: 'https://www.facebook.com/avocadoproject28',
  },
  {
    icon: '/images/logo-line.png',
    alt: 'logo-line',
    href: 'https://lin.ee/FLU4lTu',
  },
  {
    icon: '/images/logo-ig.png',
    alt: 'logo-ig',
    href: 'https://www.instagram.com/avocadoproject28/',
  },
];

const bgGradient = {
  green: '#d7f444',
  white: '#ffffff',
};

export default function Page() {
  return (
    <ParallaxProvider>
      <div>
        <Screen
          className={`h-screen bg-gradient-to-b from-[${bgGradient.green}] from-30% to-[${bgGradient.white}] to-70%`}
        >
          <div className='grid grid-cols-1 grid-rows-1 h-full'>
            <div className='flex flex-col justify-center items-center'>
              <Header className='mb-12'>The Best</Header>
              <Header className='mb-24' bold>
                Avocado Shop
              </Header>
              <Button className='border-2 border-black'>Buy Now</Button>
            </div>
          </div>
        </Screen>
        <Screen
          className={`h-full w-full bg-gradient-to-t from-[${bgGradient.green}] from-30% to-[${bgGradient.white}] to-70%`}
        >
          <div className={`flex w-full justify-center`}>
            <AvocadoParallax />
          </div>
        </Screen>
        <Screen
          className={`h-screen bg-gradient-to-b from-[${bgGradient.green}] from-30% to-[${bgGradient.white}] to-70%`}
        >
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
                Consuming them regularly can help improve heart health by
                lowering cholesterol levels and reducing the risk of heart
                disease.
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
          <div>
            <Button className='border-2 border-black'>See more</Button>
          </div>
        </Screen>
        <Screen
          className={`h-screen flex flex-col items-center bg-gradient-to-t from-[${bgGradient.green}] from-30% to-[${bgGradient.white}] to-70%`}
        >
          <Header className='mb-24'>Start Your Plan.</Header>
          <div className='flex gap-16 justify-center w-full'>
            {packages.map((p) => (
              <div key={p.title} className='w-1/3 mx-16'>
                <Package title={p.title} text={p.text} price={p.price} />
              </div>
            ))}
          </div>
        </Screen>
        <Screen
          className={`pb-48 bg-gradient-to-b from-[${bgGradient.green}] from-30% to-[${bgGradient.white}] to-70%`}
        >
          <Header className='mb-48'>Contact us</Header>
          <div className='flex w-full h-full justify-evenly'>
            {contacts.map((contact) => (
              <Link key={contact.icon} href={contact.href} target='_blank'>
                <div className='w-48'>
                  <Contact icon={contact.icon} alt={contact.alt} />
                </div>
              </Link>
            ))}
          </div>
        </Screen>
        <Footer />
      </div>
    </ParallaxProvider>
  );
}
