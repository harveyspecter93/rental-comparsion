'use client';
import React, { useState, useCallback, useEffect } from 'react';
import ProviderCard from './ProviderCard';
import Modal from './Modal';
import { RatedProvider } from '@/interfaces/types';
import ModalContent from './ModalContent';

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

    useEffect(() => {
        if (showModal && selectedProvider) {
          document.body.classList.add('no-scroll');
        } else {
          document.body.classList.remove('no-scroll');
        }
      }, [showModal, selectedProvider]);
    
    return (
        <div className="flex min-h-screen flex-col items-start">
            <div className="container my-8 mx-auto">
                <div className="flex flex-wrap">
                    { rentalProvider?.map((provider) => (
                        <ProviderCard key={provider.platform} provider={provider} onClick={() => toggleModal(provider)} />
                    )) }
                </div>
            </div>
            {selectedProvider && (
        <Modal isVisible={showModal} onClose={() => setShowModal(false)}  title={selectedProvider.platform}>
            <ModalContent selectedProvider={selectedProvider} />
        </Modal>
      )}
        </div>
    );
};

export default RentalProviderOverview;
