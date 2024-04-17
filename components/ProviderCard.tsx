import React from 'react';

const ProviderCard = ({ provider, onClick }: { provider: Provider; onClick: () => void }) => (
    <div className="w-full md:w-1/2 lg:w-1/3 p-1 lg:p-4">
        <article 
            className="overflow-hidden rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-2 cursor-pointer"
            onClick={onClick}
        >
            <a>
                <img alt={`company logo of ${provider.platform}`} src={provider.imageUrl || ''} className="h-64 w-full object-contain p-5" />
            </a>
            <header className="flex justify-between p-2 md:p-4">
                <h1 className="text-lg">{provider.platform}</h1>
            </header>
            <footer className="flex justify-between p-2 md:p-4">
                {provider.location && <p><i className="fi fi-rr-marker mr-2"></i>{provider.location}</p>}   
                {provider.score && <p className="text-sm text-gray-700">Score: {provider.score}</p>}
            </footer>
        </article>
    </div>
);

export default ProviderCard;

