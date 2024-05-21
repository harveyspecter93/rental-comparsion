interface Provider {
    platform: string;
    imageUrl?: string;
    location?: string;
    description?: string;
    websiteUrl?: string;
}

export interface NumericProperties {
    averageRatings: number;
    discountAvailability: number;
    globalAvailability: number;
    hostFeeStructure: number;
    hostInsurance: number;
    priceCompetitiveness: number;
    productRange: number;
    reviewCount: number;
}


export interface Criteria {
    weight: number,
    scale: number,
    criteria: keyof NumericProperties; // Using keyof ensures the property keys are checked against NumericProperties0
}

// Extending the existing Provider interface to create a more specific type
export interface RatedProvider extends Provider, NumericProperties {
    score?: string;  // Redefine score as string if needed for formatted outputs
}


export enum CriteriaLabels {
    productRange = 'Vielfalt des Angebots',
    globalAvailability = 'Globale Verfügbarkeit',
    priceCompetitiveness = 'Wettbewerbsfähigkeit der Preise',
    discountAvailability = 'Rabattverfügbarkeit',
    averageRatings = 'Durchschnittliche Gästebewertungen',
    reviewCount = 'Anzahl der Bewertungen',
    hostFeeStructure = 'Gebührenstruktur und Transparenz für Gastgeber',
    hostInsurance = 'Versicherungspolicen und Schutz für Gastgeber',
}

