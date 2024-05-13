'use client';
import React, { useState, useCallback } from 'react';
import ProviderCard from './ProviderCard';
import Modal from './Modal';
import { RatedProvider } from '@/interfaces/types';

interface RentalProviderOverviewProps {
  rentalProvider: RatedProvider[];
}

const RentalProviderOverview: React.FC<RentalProviderOverviewProps> = ({ rentalProvider }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<RatedProvider | null>(null);

    const toggleModal = useCallback((provider?: RatedProvider) => {
        setShowModal(prevShowModal => !prevShowModal); // Toggle the display based on previous state
        setSelectedProvider(provider || null); // Set or clear the selected provider
    }, []);

    return (
        <div className="flex min-h-screen flex-col items-start">
            <div className="container my-12 mx-auto">
                <div className="flex flex-wrap">
                    {rentalProvider?.map((provider) => (
                        <ProviderCard key={provider.platform} provider={provider} onClick={() => toggleModal(provider)} />
                    ))}
                </div>
            </div>
            {showModal && selectedProvider && (
                <Modal selectedProvider={selectedProvider} onClose={() => setShowModal(false)} />
            )}
        </div>
    );
};

export default RentalProviderOverview;
