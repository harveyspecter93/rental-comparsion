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

// Calculate the weighted score for each provider
const calculateScore = (provider: RatedProvider, weightedParams: Criteria[]): number => {
    return weightedParams.reduce((total, param) => {
        const value = provider[param.criteria];
        const score = value * (param.weight / 100);
        return total + score;
    }, 0);
};

// Analyze utilities of rated providers
export const calculateUtilityAnalysis = (params: Criteria[], providers: RatedProvider[]): RatedProvider[] => {
    const weightedParams = normalizeWeights(params);

    return providers.map(provider => {
        provider.score = calculateScore(provider, weightedParams).toFixed(2);
        return provider;
    });
};
