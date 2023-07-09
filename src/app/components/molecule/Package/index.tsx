import { Title } from '@/app/components';

type PackageProps = {
  title: string;
  text: string[];
  price: string;
};

const Package = (props: PackageProps) => {
  const { title, text = [], price } = props;
  const [f, s, t] = text;

  return (
    <div className='bg-gray-100 w-full p-16  text-center rounded-tr-[7.5rem] rounded-bl-[7.5rem]'>
      <Title className='mb-32' bold>
        {title}
      </Title>
      <Title className='text-3xl'>{f}</Title>
      <Title className='text-3xl mb-16'>{s}</Title>
      <Title className='text-3xl mb-32'>{t}</Title>
      <Title bold>{price}</Title>
    </div>
  );
};

export default Package;
