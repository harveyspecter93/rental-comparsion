import { RatedProvider } from "@/interfaces/types";
import ModalContent from "./ModalContent";

const Modal = ({ selectedProvider, onClose }: { selectedProvider: RatedProvider; onClose: () => void }) => (
    // Outer container with fixed positioning to cover the whole screen
    <div className="fixed inset-0 z-50 overflow-y-auto">
        {/* Backdrop with opacity for shadowing the content behind */}
        <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose}></div>
        {/* Centering the modal content */}
        <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center">
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <ModalContent selectedProvider={selectedProvider} onClose={onClose} />
                <button className="absolute top-0 right-0 m-4 text-3xl font-semibold" onClick={onClose}>×</button>
            </div>
        </div>
    </div>
);

export default Modal;