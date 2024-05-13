import RentalProviderOverview from '@/components/RentalProviderOverview';
import { RatedProvider } from '@/interfaces/types'; 
import { createClient } from '@/utils/supabase/server';

import { cookies } from 'next/headers';

export default async function Home() {
    
    const cookieStore = cookies()
    const supabase = createClient(cookieStore);
    const { data: rentalProvider } = await supabase.from("rentalProvider").select();

    return <RentalProviderOverview rentalProvider={ rentalProvider as RatedProvider[] } />;
};
  



