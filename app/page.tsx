import RentalProviderOverview from '@/components/RentalProviderOverview';
import { RatedProvider } from '@/interfaces/types'; // Import the 'RatedProvider' type

export default async function Home() {
    const response = await fetch(`http://localhost:3000/api/rentalProviders`);
    const providers = await response.json()

    return <RentalProviderOverview rentalProvider={ providers } />;
};
  



