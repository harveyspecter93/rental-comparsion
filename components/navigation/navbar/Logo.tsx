import Link from 'next/link';

const Logo = () => {
  return (
    <Link href="/" passHref>
      <span className="text-2xl text-white cursor-pointer">Finde die ideale Mietunterkunft-Plattform für deine Bedürfnisse</span>
    </Link>
  );
};

export default Logo;
