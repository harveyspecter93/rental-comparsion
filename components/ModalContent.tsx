import { RatedProvider } from "@/interfaces/types";
import Button from "./Button";

interface ModalContentProps {
    selectedProvider: RatedProvider,
    onClose: () => void
}

const ModalContent: React.FC<ModalContentProps> = ({ selectedProvider, onClose }: { selectedProvider: RatedProvider; onClose: () => void }) => (
    <div className="flex flex-col w-full p-6 bg-white rounded-lg shadow-lg">
        <header className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
            <h3 className="text-3xl font-semibold">
                Informationen
            </h3>
        </header>

        <div className="relative p-4 mx-auto w-full shadow rounded-lg bg-white">
            <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
                <img className="h-auto w-full object-contain p-5"
                    src={selectedProvider.imageUrl || 'path_to_default_image.jpg'}
                    alt={`Image of ${selectedProvider.platform}`}
                    style={{ maxHeight: '100%' }} />
                        
                {selectedProvider.score && (
                <span className="absolute top-0 right-0 inline-flex mt-2 mr-2 px-2 py-1 rounded-lg z-10 bg-indigo-50 text-medium font-medium text-blue-600">
                    <p>Score: <b>{selectedProvider.score}</b></p>
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

            <div className="grid grid-cols-1 grid-rows-2 gap-4 mt-8 ml-2 pb-5">
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <i className="fi fi-rr-marker mr-2 mb-0"></i>
                    Sitz: {selectedProvider.location || "todo"}
                </p>
                <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
                    <i className="fi fi-rr-document-signed mr-2 mb-0 flex"></i>
                    <a href={selectedProvider.websiteUrl || "todo"} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline cursor-pointer">
                        Website
                    </a>                    
                </p>
            </div>
            
            <footer className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <Button onClick={onClose}>Schliessen</Button>
            </footer>
        </div>
    </div>
);


export default ModalContent;
