import Button from "./Button";

interface ModalContentProps {
    selectedProvider: Provider,
    onClose: () => void
}

const ModalContent: React.FC<ModalContentProps> = ({ selectedProvider, onClose }: { selectedProvider: Provider; onClose: () => void }) => (
    <div className="flex flex-col w-full p-6 bg-white rounded-lg shadow-lg">
        <header className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">
                Provider Details
            </h3>
        </header>

        <div className="relative p-4 mx-auto w-full shadow rounded-lg bg-white">
            <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                <img className="block h-full w-full absolute inset-0" src={selectedProvider.imageUrl || ''} alt={`Image of ${selectedProvider.platform}`} />
                {selectedProvider.score && (
                    <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-yellow-400 text-sm font-medium text-white">
                        Score: {selectedProvider.score}
                    </span>
                )}
            </div>

            <div className="mt-4 ml-2">
                <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1">
                    {selectedProvider.platform}
                </h2>
                <p className="mt-2 text-sm text-gray-800">
                    {selectedProvider.description}
                </p>
            </div>

            <div className="grid grid-cols-2 grid-rows-3 gap-4 mt-8 ml-2">
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <i className="fi fi-sr-signal-stream mr-2 mb-0 flex"></i>
                    Reichweite: {selectedProvider.reach || "todo"}
                </p>
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <i className="fi fi-bs-heart mr-2 mb-0 flex"></i>
                    Erfahrungen: {selectedProvider.trustworthiness || "todo"}
                </p>
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <i className="fi fi-rr-coins mr-2 mb-0 flex"></i>
                    Kosten: {selectedProvider.cost || "todo"}
                </p>
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <i className="fi fi-rr-marker mr-2 mb-0"></i>
                    Sitz: {selectedProvider.location || "todo"}
                </p>
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <i className="fi fi-rr-book-section mr-2 mb-0 flex"></i>
                    Sektor: {selectedProvider.sector || "todo"}
                </p>
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <i className="fi fi-rr-document-signed mr-2 mb-0 flex"></i>
                    Art: {selectedProvider.rentalType || "todo"}
                </p>
            </div>
            
            <footer className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <Button onClick={onClose}>Schliessen</Button>
            </footer>
        </div>
    </div>
);


export default ModalContent;
