//utils/utilityAnalysis/calculation.tsx
import { RatedProvider, Criteria } from '@/interfaces/types';

// Normalize weights to sum to 100 for percentage calculation
const normalizeWeights = (params: Criteria[]): Criteria[] => {
    const totalWeight = params.reduce((sum, param) => sum + param.weight, 0);
    return params.map(param => ({
        ...param,
        weight: (param.weight / totalWeight) * 100
    }));
};

// Normalize value based on the scale
const normalizeValue = (value: number, scale: number): number => {
    return (value) / (scale) * 10;
}

// Calculate the weighted score for each provider
const calculateScore = (provider: RatedProvider, weightedParams: Criteria[]): number => {
    return weightedParams.reduce((total, param) => {
        const value = provider[param.criteria];
        const normalizedValue = normalizeValue(value, param.scale);
        const score = normalizedValue * (param.weight / 100);
        return total + score;
    }, 0);
};

// Analyze utilities of rated providers
export const calculateUtilityAnalysis = (params: Criteria[], providers: RatedProvider[]): RatedProvider[] => {
    
    if(params.some(param => param.scale <= 0 )) {
        throw new Error('Ungültige Skala. Skala muss größer als 0 sein.');
    }

    const weightedParams = normalizeWeights(params);
    return providers.map(provider => {
        provider.score = calculateScore(provider, weightedParams).toFixed(2);
        return provider;
    });
};



