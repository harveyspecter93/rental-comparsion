import { calculateUtilityAnalysis } from '../utils/utilityAnalysis/calculation';
import { RatedProvider, Criteria } from '@/interfaces/types';
describe('calculateUtilityAnalysis', () => {
  test('should correctly calculate the score for each provider', ( ) => {
    const params = [
      { weight: 50, scale: 10, criteria: 'averageRatings' },      
      { weight: 50, scale: 5, criteria: 'reviewCount' },
    ] as Criteria[];

    const rentalProviderData = [
      { averageRatings: 10, reviewCount: 1 },
      { averageRatings: 10, reviewCount: 5 },
      { averageRatings: 1, reviewCount: 1 },
      ] as RatedProvider[];

    const result = calculateUtilityAnalysis(params, rentalProviderData);
    expect(result[0].score).toBe('6.00');
    expect(result[1].score).toBe('10.00');
    expect(result[2].score).toBe('1.50');
  });


  test("Should throw error because of invalid scale", () => {
    
    const t = () => {
        const params = [
          { weight: 100, scale: 0, criteria: 'averageRatings' }
        ] as Criteria[];
    
        const rentalProviderData = [
          { averageRatings: 10, reviewCount: 1 },
          { averageRatings: 10, reviewCount: 5 }
          ] as RatedProvider[];

        calculateUtilityAnalysis(params, rentalProviderData)
      };
    
      expect(t).toThrow(Error('Ungültige Skala. Skala muss größer als 0 sein.'));
  });

});








