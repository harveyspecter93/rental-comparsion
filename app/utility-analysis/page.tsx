import UtilityAnalysisInteraction from "../../components/UtilityAnalysisInteraction";
import { createClient } from '@/utils/supabase/server';
import { cookies } from 'next/headers';


const UtilityAnalysis = async () => {
  
  const cookieStore = cookies()
  const supabase = createClient(cookieStore);
  const { data: rentalProvider } = await supabase.from("rentalProvider").select();

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <UtilityAnalysisInteraction rentalProvider={rentalProvider} />
      </div>
    </div>
  );
};

export default UtilityAnalysis;
