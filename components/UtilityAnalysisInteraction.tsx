'use client';
// Standard imports
import { useState } from 'react';

// UI Components
import SliderTable from './SliderTable';
import Button from './Button';
import RentalProviderOverview from './RentalProviderOverview';

// Utility functions
import { calculateUtilityAnalysis } from '@/utils/utilityAnalysis/calculation';
import { sortList } from '@/utils/utilityAnalysis/sortList';
import { Criteria, CriteriaLabels, NumericProperties, RatedProvider } from '@/interfaces/types';

type Props = {
  rentalProvider: RatedProvider[];
};

// Initial state constants
type CL = keyof typeof CriteriaLabels;

const initialParams: Criteria[] = (Object.keys(CriteriaLabels) as Array<CL>).map(label => 
  ({ weight: 0, scale: ["discountAvailability", "reviewCount"].includes(label) ? 5 : 10, criteria: label as keyof NumericProperties, label: label as keyof CriteriaLabels })
);

const UtilityAnalysisInteraction: React.FC<Props> = ({ rentalProvider }) => {
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [ratedRentalProvider, setRatedRentalProvider] = useState<any[]>([]);
  const [params, setParams] = useState<Criteria[]>(initialParams);

  const handleSliderChange = (index: number, newWeight: number) => {
    const updatedParams = [...params];
    updatedParams[index].weight = newWeight;
    setParams(updatedParams);
    checkAtLeastOneWeightGreaterThanZero();
  };

  const checkAtLeastOneWeightGreaterThanZero = (): boolean => {
    const hasValidWeight = params.some(param => param.weight > 0);
    setErrorMessage(hasValidWeight ? '' : 'Mindestens ein Kriterium muss als relevant gewichtet werden.');
    return hasValidWeight;
  };

  const saveChanges = () => {
    if (checkAtLeastOneWeightGreaterThanZero()) {
      const ratedList = sortList(calculateUtilityAnalysis(params, rentalProvider));
      setRatedRentalProvider(ratedList);
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to the top smoothly
    }
  };

  const deleteList = () => {
    setRatedRentalProvider([]);
    setParams(initialParams);
  };

  return (
    <div>
      {ratedRentalProvider.length === 0 ? (
        <div className="mb-5">
          <h2 className="text-2xl font-semibold leading-tight mb-2">Nutzwertanalyse</h2>
          <p className="pt-2 pb-4">Bitte gewichten Sie folgende Kriterien anhand Ihren persönlichen Bedürfnissen. <br />
            Die Gewichtung wird entsprechend in die Berechnung der Nutzwertanalyse einfliessen.
          </p>
          <form>
            {/* Parameter table with sliders */}
            <SliderTable params={params} handleSliderChange={handleSliderChange} />
            {errorMessage && (
              <div className="p-4 mb-2 mt-2 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                {errorMessage}
              </div>
            )}
            <Button onClick={saveChanges}  className="my-4" isDisabled={errorMessage !== ''}>Ausrechnen</Button>
          </form>
        </div>
      ) : (
        <>
          <Button onClick={deleteList} className="mx-4 p-0">Neu ausrechnen</Button>
          <RentalProviderOverview rentalProvider={ratedRentalProvider} />
        </>
      )}
    </div>
  );
};

export default UtilityAnalysisInteraction;


