import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" passHref>
       
      <span className="text-2xl sm:text-xl text-white cursor-pointer">Finde deine ideale Mietunterkunft-Plattform</span>
    </Link>
  );
};

export default Logo;
