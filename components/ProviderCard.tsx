import { RatedProvider } from '@/interfaces/types';
import React from 'react';

const ProviderCard = ({ provider, onClick }: { provider: RatedProvider; onClick: () => void }) => (
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
                {provider.score && <span className=" inline-flex px-2 py-1 rounded-lg z-10 bg-indigo-50 text-medium font-medium text-blue-600">
                        <p>Score: <b>{provider.score}</b>/10</p>
                    </span>}
            </header>
            <footer className="flex justify-between p-2 md:p-4">
                {provider.location && <p><i className="fi fi-rr-marker mr-2"></i>{provider.location}</p>}   
                
                
            </footer>
        </article>
    </div>
);

export default ProviderCard;

