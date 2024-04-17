'use client';
import React, { useState, useCallback } from 'react';
import ProviderCard from './ProviderCard';
import Modal from './Modal';
import Provider from '@/interfaces/types';

const RentalProviderOverview = ({ rentalProvider }: { rentalProvider: Provider[] }) => {
    const [showModal, setShowModal] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<Provider>();

    const toggleModal = useCallback((provider: Provider) => {
        setShowModal(!showModal);
        setSelectedProvider(provider);
    }, [showModal]);

    return (
        <div className="flex min-h-screen flex-col items-start">
            <h1 className="text-3xl mt-7 text-blue-600">
                {rentalProvider.length && (rentalProvider[0]?.score ?? -1) >= 0 ? 'All Rental Providers with Score' : 'All Rental Providers'}
            </h1>
            <div className="container my-12 mx-auto">
                <div className="flex flex-wrap">
                    {rentalProvider.map((provider, index) => (
                        <ProviderCard key={index} provider={provider} onClick={() => toggleModal(provider)} />
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
