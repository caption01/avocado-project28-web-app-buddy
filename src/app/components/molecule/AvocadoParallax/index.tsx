import { useParallax } from 'react-scroll-parallax';
import Image from 'next/image';

const AvocadoParallax = () => {
  const parallax = useParallax<HTMLDivElement>({
    speed: -10,
    translateY: [-25, 0],
    scale: [0.8, 1.1],
  });
  return (
    <div ref={parallax.ref}>
      <Image src={'/images/leaf-1.svg'} alt={'1'} width={500} height={300} />
      <Image src={'/images/leaf-2.svg'} alt={'1'} width={500} height={300} />
      <div className='py-12' />
      <Image src={'/images/avocado-1.svg'} alt={'1'} width={500} height={300} />
      <div className='py-12' />
      <Image src={'/images/avocado-2.svg'} alt={'1'} width={500} height={300} />
      <div className='py-12' />
      <Image src={'/images/avocado-3.svg'} alt={'1'} width={500} height={300} />
    </div>
  );
};

export default AvocadoParallax;
