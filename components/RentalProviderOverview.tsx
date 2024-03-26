'use client';
import React, { useState } from "react";
import Link from 'next/link'

const RentalProviderOverview = ({ rentalProvider }: { rentalProvider: any }) => {

    const [showModal, setShowModal] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState<any>();

    const toggleModal = (providerId: number) => {
        setShowModal(!showModal);
        if (rentalProvider) {
            setSelectedProvider(rentalProvider[providerId]);
        }
    }

    return (
        <div>
            Hello World!
        </div>
    )

    // return (
    //     <div>
    //         {/*---------------------------------------- AFTER CALCULATION ---------------------------------------- */}
    //         <div className="flex min-h-screen flex-col items-start">
    //             {/* {rentalProvider && rentalProvider[0].score >= 0 ? (
    //                 <h1 className="text-3xl flex mt-7">All Rental Provider with Score</h1>
    //             ) : (
    //                 <h1 className="text-3xl flex mt-7">All Rental Provider</h1>
    //             )} */}
    //             <div className="container my-12 mx-auto ">
    //                 <div className="flex flex-wrap -mx-1 lg:-mx-4">
    //                     {rentalProvider && rentalProvider.map((provider: any, index: number) => (
    //                         <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3" key={index}>
    //                             <article className="overflow-hidden rounded-lg shadow-lg">
    //                                 {/*For loop over the criteria that can be chosen*/}
    //                                 <a>
    //                                     <img alt="Placeholder" className="block h-64 w-full" src={`${provider.imageUrl && provider.imageUrl}`}></img>
    //                                 </a>

    //                                 <header className="flex items-center justify-between leading-tight p-2 md:p-4">
    //                                     <h1 className="text-lg">
    //                                         {provider.platform}
    //                                     </h1>
    //                                     {/* {provider.score ? (
    //                                         <p className="text-grey-darker text-sm">
    //                                             Score: {provider.score}
    //                                         </p>
    //                                     ) : null} */}

    //                                 </header>

    //                                 <footer className="flex items-center justify-between leading-none p-2 md:p-4">
    //                                     <a className="flex items-center text-black">
    //                                         <button
    //                                             className="bg-gray-700 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow "
    //                                             type="button"
    //                                             onClick={() => toggleModal(index)}
    //                                         >
    //                                             Mehr Informationen
    //                                         </button>
    //                                         <p className="ml-2 ">
    //                                             <i className="fi fi-rr-marker mr-2 mb-0"></i>
    //                                             Location?
    //                                         </p>
    //                                     </a>
    //                                 </footer>
    //                             </article>
    //                             <>
    //                                 {showModal ? (
    //                                     <>
    //                                         <div
    //                                             className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
    //                                         >
    //                                             <div className="relative w-auto my-6 mx-auto max-w-md">
    //                                                 {/*content*/}
    //                                                 <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
    //                                                     {/*header*/}
    //                                                     <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
    //                                                         <h3 className="text-3xl font-semibold">
    //                                                             Provider
    //                                                         </h3>
    //                                                         <button
    //                                                             className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
    //                                                             onClick={() => setShowModal(false)}
    //                                                         >
    //                                                             <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
    //                                                                 ×
    //                                                             </span>
    //                                                         </button>
    //                                                     </div>
    //                                                     {/*body*/}
    //                                                     <div className="relative mx-auto w-full">
    //                                                         <div className="shadow p-4 rounded-lg bg-white">
    //                                                             <div className="flex justify-center relative rounded-lg overflow-hidden h-52">
    //                                                                 <div className="w-full">
    //                                                                     <div className="absolute inset-0">
    //                                                                         <img className="block h-full w-full " src={`${selectedProvider && selectedProvider.logo}`} />
    //                                                                     </div>
    //                                                                 </div>
    //                                                                 {/* {provider.score ? (
    //                                                                     <span className="absolute top-0 left-0 inline-flex mt-3 ml-3 px-3 py-2 rounded-lg z-10 bg-yellow-400 text-sm font-medium text-white select-none">
    //                                                                         <p className="flex items-start font-medium text-white">
    //                                                                             <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" ><path d="M12 .587l3.668 7.431 8.332 1.21-6.001 5.848 1.416 8.265L12 18.896l-7.415 4.445 1.416-8.265-6.001-5.848 8.332-1.21z" strokeWidth="2.2" fill="none" stroke="white" /></svg>
    //                                                                             {selectedProvider && selectedProvider.score}
    //                                                                         </p>
    //                                                                     </span>
    //                                                                 ) : null} */}
    //                                                             </div>

    //                                                             <div className="mt-4 ml-2">
    //                                                                 <h2 className="font-medium text-base md:text-lg text-gray-800 line-clamp-1">
    //                                                                     {selectedProvider && selectedProvider.platform}
    //                                                                 </h2>
    //                                                                 <p className="mt-2 text-sm text-gray-800" title="New York, NY 10004, United States">
    //                                                                     {selectedProvider && selectedProvider.description}
    //                                                                 </p>
    //                                                             </div>

    //                                                             <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-8 ml-2">
    //                                                                 <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
    //                                                                     <i className="fi fi-sr-signal-stream mr-2 mb-0 flex"></i>
    //                                                                     <span className="mt-2 xl:mt-0">
    //                                                                         Reichweite: mhh? todo 
    //                                                                         {/* {selectedProvider && selectedProvider.reach} */}
    //                                                                     </span>
    //                                                                 </p>
    //                                                                 <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
    //                                                                     <i className="fi fi-bs-heart mr-2 mb-0 flex"></i>
    //                                                                     <span className="mt-2 xl:mt-0">
    //                                                                         Erfahrungen: todo 
    //                                                                         {/* {selectedProvider && selectedProvider.trustworthiness} */}
    //                                                                     </span>
    //                                                                 </p>
    //                                                                 <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
    //                                                                     <i className="fi fi-rr-coins mr-2 mb-0 flex"></i>
    //                                                                     <span className="mt-2 xl:mt-0">
    //                                                                         Kosten: todo 
    //                                                                         {/* {selectedProvider && selectedProvider.cost} */}
    //                                                                     </span>
    //                                                                 </p>
    //                                                                 <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
    //                                                                     <i className="fi fi-rr-marker mr-2 mb-0"></i>
    //                                                                     <span className="mt-2 xl:mt-0">
    //                                                                         Sitz: todo
    //                                                                         {/* {selectedProvider && selectedProvider.location} */}
    //                                                                     </span>
    //                                                                 </p>
    //                                                                 <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
    //                                                                     <i className="fi fi-rr-book-section mr-2 mb-0 flex"></i>
    //                                                                     <span className="mt-2 xl:mt-0">
    //                                                                         Sektor: todo
    //                                                                         {/* {selectedProvider && selectedProvider.sector} */}

    //                                                                     </span>
    //                                                                 </p>
    //                                                                 <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800">
    //                                                                     <i className="fi fi-rr-document-signed mr-2 mb-0 flex"></i>
    //                                                                     <span className="mt-2 xl:mt-0">
    //                                                                         Art: todo 
    //                                                                         {/* {selectedProvider && selectedProvider.rentalType} */}
    //                                                                     </span>
    //                                                                 </p>
    //                                                             </div>
    //                                                             <div className="grid grid-cols-2 mt-8">
    //                                                                 <div className="flex items-center">
    //                                                                     <Link href={selectedProvider && selectedProvider.websiteUrl} target='_blank'>
    //                                                                         <p className="ml-2 text-gray-800 line-clamp-1">
    //                                                                             {selectedProvider && selectedProvider.websiteUrl}
    //                                                                         </p>
    //                                                                     </Link>
    //                                                                 </div>

    //                                                             </div>
    //                                                         </div>
    //                                                     </div>
    //                                                     {/*footer*/}
    //                                                     <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
    //                                                         <button
    //                                                             className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    //                                                             type="button"
    //                                                             onClick={() => setShowModal(false)}
    //                                                         >
    //                                                             Schliessen
    //                                                         </button>
    //                                                     </div>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div className="opacity-5 fixed inset-0 z-40 bg-black"></div>
    //                                     </>
    //                                 ) : null}
    //                             </>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // )
}
export default RentalProviderOverview;
