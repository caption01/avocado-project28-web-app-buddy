import Image from 'next/image';

interface ContactProps {
  icon: string;
  alt: string;
}

const Contact = ({ icon, alt }: { icon: any; alt: string }) => {
  return <Image src={icon} alt={alt} width={200} height={200} />;
};

export default Contact;
export type { ContactProps };
