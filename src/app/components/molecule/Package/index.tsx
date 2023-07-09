import { Title } from '@/app/components';

const Package = () => {
  return (
    <div className='bg-gray-100 w-full p-16  text-center rounded-tr-[7.5rem] rounded-bl-[7.5rem]'>
      <Title className='mb-32' bold>
        Starter package
      </Title>
      <Title className='text-3xl'>pay for single order</Title>
      <Title className='text-3xl mb-16'>(6 pieces / 1 box)</Title>
      <Title className='text-3xl mb-32'>receive 1 package</Title>
      <Title bold>799 Baht</Title>
    </div>
  );
};

export default Package;
