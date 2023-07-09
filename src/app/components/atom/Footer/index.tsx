import { Title } from '@/app/components';

const Footer = () => {
  return (
    <div className='h-72 w-full bg-gray-200'>
      <div className='container mx-auto px-4 h-full'>
        <div className='flex justify-between pt-12 h-full'>
          <div className='w-1/2'>
            <Title className='text-xl mb-4' bold>
              Project28: Avocado
            </Title>
            <Title className='text-xl'>
              Shop now for the{' '}
              <span className='underline underline-offset-2 decoration-1'>
                {' '}
                freshest avocados delivered to your door!{' '}
              </span>{' '}
              <br /> Join our avocado-loving community and elevate your meals
              with our premium selection. Easy ordering. Secure payment. Start
              satisfying your avocado cravings today!
            </Title>
          </div>
          <div className='flex w-1/2 justify-end gap-8'>
            <div>
              <Title className='text-xl mb-4' bold>
                ordering <br /> 👇👇👇
              </Title>
              <ul>
                <li>phone: 0876061277</li>
                <li>email: avocadoproject28@gmail.com</li>
                <li>facebook: @avocadoproject28</li>
                <li>line: @project28</li>
              </ul>
            </div>
            <div>
              <Title className='text-xl mb-4' bold>
                reviews <br /> 👇👇👇
              </Title>
              <ul>
                <li>instagram: @avocadoproject28</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
