
import Provider from "@/interfaces/types";
import ModalContent from "./ModalContent";
import exp from "constants";

const Modal = ({ selectedProvider, onClose }: { selectedProvider: Provider; onClose: () => void }) => (
<>
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center overflow-y-auto p-4">
    <div className="bg-white p-4 rounded-lg shadow-lg max-w-md w-full mx-auto my-8">
        <ModalContent selectedProvider={selectedProvider} onClose={onClose} />
        <button className="absolute top-0 right-0 m-4 text-3xl font-semibold" onClick={onClose}>×</button>
    </div>
    </div>
</>
);

export default Modal;  