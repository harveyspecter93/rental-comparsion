import { Criteria, CriteriaLabels, NumericProperties, RatedProvider } from "@/interfaces/types";
import Rating from "@mui/material/Rating";

interface ModalContentProps {
    selectedProvider: RatedProvider
}

const criteriaKeys: Array<string> = Object.keys(CriteriaLabels);

const ModalContent: React.FC<ModalContentProps> = ({ selectedProvider }: { selectedProvider: RatedProvider; }) => (
    <div>
        <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
            <img className="h-auto w-full object-contain p-5"
                src={selectedProvider.imageUrl || 'path_to_default_image.jpg'}
                alt={`Image of ${selectedProvider.platform}`}
                style={{ maxHeight: '100%' }} />
                    
            {selectedProvider.score && (
            <span className="absolute top-0 right-0 inline-flex mt-2 mr-2 px-2 py-1 rounded-lg z-10 bg-indigo-50 text-medium font-medium text-blue-600">
                <p>Score: <b>{selectedProvider.score}</b>/10</p>
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

        <div className="mt-8 ml-2 pb-5">
            <div className="flex flex-col space-y-4 xl:space-y-0 xl:grid xl:grid-cols-2 xl:gap-4">
            <p className="whitespace-pre-line flex-col xl:flex-row xl:items-center text-gray-800">
                    <i className="fi fi-rr-marker mr-2 mb-0" />
                    Sitz: {selectedProvider.location} {'\n'}
                    <i className="fi fi-rr-globe mr-2 mb-0 " /> 
                    <a href={selectedProvider.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline cursor-pointer">
                    Website
                    </a>                    
                </p>
            </div>

            <div className="mt-8 xl:grid xl:grid-rows-4 xl:grid-flow-col xl:gap-4">
                {criteriaKeys.map((categoryKey) => (
                    <div key={categoryKey} className="flex justify-between items-begin content-begin">
                        <p className="text-gray-800 mb-2 xl:mb-0 ">
                            {CriteriaLabels[categoryKey as keyof typeof CriteriaLabels]} 
                        </p>
                        <Rating className="mr-4" name="half-rating-read" value={selectedProvider[categoryKey as keyof NumericProperties]/(["discountAvailability", "reviewCount"].includes(categoryKey) ? 5 : 10) * 5} precision={0.5} readOnly />
                    </div>
                ))}
            </div>
        </div>
    </div>
);

export default ModalContent;
