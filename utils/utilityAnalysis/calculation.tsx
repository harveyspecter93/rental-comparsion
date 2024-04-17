export const calculateUtilityAnalysis = (params: any, rentalProviderData: any) => {
  rentalProviderData.map((provider: any, index: number) => {
    const scoreProductRange = (provider.productRange / 100) * Number(params.find((param: { criteria: string; }) => param.criteria === 'productRange')?.weight);
    const scoreGlobalAvailability = (provider.globalAvailability / 100) * Number(params.find((param: { criteria: string; }) => param.criteria === 'globalAvailability')?.weight);
    const scorePriceCompetitiveness = (provider.priceCompetitiveness / 100) * Number(params.find((param: { criteria: string; }) => param.criteria === 'priceCompetitiveness')?.weight);
    const scoreDiscountAvailability = (provider.discountAvailability / 100) * Number(params.find((param: { criteria: string; }) => param.criteria === 'discountAvailability')?.weight);
    const scoreAverageRatings = (provider.averageRatings / 100) * Number(params.find((param: { criteria: string; }) => param.criteria === 'averageRatings')?.weight);
    const scoreReviewCount = (provider.reviewCount / 100) * Number(params.find((param: { criteria: string; }) => param.criteria === 'reviewCount')?.weight);
    const scoreHostFeeStructure = (provider.hostFeeStructure / 100) * Number(params.find((param: { criteria: string; }) => param.criteria === 'hostFeeStructure')?.weight);
    const scoreHostInsurance = (provider.hostInsurance / 100) * Number(params.find((param: { criteria: string; }) => param.criteria === 'hostInsurance')?.weight);

    const totalScore = scoreProductRange + scoreGlobalAvailability + scorePriceCompetitiveness + scoreDiscountAvailability + scoreAverageRatings + scoreReviewCount + scoreHostFeeStructure + scoreHostInsurance;
    provider.score = totalScore.toFixed(2);
  });

  return rentalProviderData;
};
