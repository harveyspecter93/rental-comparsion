import { calculateUtilityAnalysis } from '../utils/utilityAnalysis/calculation';
import { RatedProvider, Criteria } from '@/interfaces/types';
describe('calculateUtilityAnalysis', () => {
  test('should correctly calculate the score for each provider', ( ) => {
    const params = [
      { weight: 50, criteria: 'averageRatings' },      
      { weight: 50, criteria: 'reviewCount' },
    ] as Criteria[];

    const rentalProviderData = [
      { averageRatings: 10, reviewCount: 1 },
      { averageRatings: 10, reviewCount: 5 },
      ] as RatedProvider[];

    const result = calculateUtilityAnalysis(params, rentalProviderData);
    expect(result[0].score).toBe('5.50');
    expect(result[1].score).toBe('7.50');
  });
});
