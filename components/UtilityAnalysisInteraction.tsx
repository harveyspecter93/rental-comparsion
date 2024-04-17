'use client';
import { useState } from 'react';
import { calculateUtilityAnalysis } from '../utils/utilityAnalysis/calculation';
import { checkForm } from '../utils/utilityAnalysis/checkForm';
import { sortList } from '../utils/utilityAnalysis/sortList';
import RentalProviderOverview from './RentalProviderOverview';

const UtilityAnalysisInteraction = ({ rentalProvider }: { rentalProvider: any }) => {

  const [ratedRentalProvider, setRatedRentalProvider] = useState<any[]>([]);
  const [params, setParams] = useState([
    { weight: '', criteria: 'productRange', label: 'Vielfalt der Unterkunftstypen' },
    { weight: '', criteria: 'globalAvailability', label: 'Globale Verfügbarkeit' },
    { weight: '', criteria: 'priceCompetitiveness', label: 'Wettbewerbsfähigkeit der Preise' },
    { weight: '', criteria: 'discountAvailability', label: 'Rabattverfügbarkeit' },
    { weight: '', criteria: 'averageRatings', label: 'Durchschnittliche Gästebewertungen' },
    { weight: '', criteria: 'reviewCount', label: 'Anzahl der Bewertungen' },
    { weight: '', criteria: 'hostFeeStructure', label: 'Gebührenstruktur und Transparenz für Gastgeber' },
    { weight: '', criteria: 'hostInsurance', label: 'Versicherungspolicen und Schutz für Gastgeber' }
  ]);

  const handleTitleChange = (index: any, newWeight: any) => {
    let updatedParams = [...params];
    updatedParams[index].weight = newWeight;
    setParams(updatedParams);
  };

  const saveChanges = () => {
    const correctForm = checkForm(params);
    if (correctForm === true) {
      //calculates the utility analysis and sorts the list 
      const ratedRentalProviderList = sortList(calculateUtilityAnalysis(params, rentalProvider));
      setRatedRentalProvider(ratedRentalProviderList);
    } else {
      //alerts the user with the specific error message
      alert(correctForm);
    }
  };

  const deleteList = () => {
    // reset the list and the params
    setRatedRentalProvider([]);
    setParams([
      { weight: '', criteria: 'productRange', label: 'Vielfalt der Unterkunftstypen' },
      { weight: '', criteria: 'globalAvailability', label: 'Globale Verfügbarkeit' },
      { weight: '', criteria: 'priceCompetitiveness', label: 'Wettbewerbsfähigkeit der Preise' },
      { weight: '', criteria: 'discountAvailability', label: 'Rabattverfügbarkeit' },
      { weight: '', criteria: 'averageRatings', label: 'Durchschnittliche Gästebewertungen' },
      { weight: '', criteria: 'reviewCount', label: 'Anzahl der Bewertungen' },
      { weight: '', criteria: 'hostFeeStructure', label: 'Gebührenstruktur und Transparenz für Gastgeber' },
      { weight: '', criteria: 'hostInsurance', label: 'Versicherungspolicen und Schutz für Gastgeber' }
    ]);
  };

  return (
    <div>

      {ratedRentalProvider.length === 0 ? (
        <div>
          <div className="mb-5">
            <h2 className="text-2xl font-semibold leading-tight mb-2">
              Nutzwertanalyse
            </h2>
          </div>
          <p>
            Bitte wählen Sie Kriterien, die für die Nutzwertanalyse verwendet
            werden sollen aus. <br />
            Die Kriterien müssen einzeln Gewichtet werden. Dabei ist zu
            beachten, dass die Summe am Ende 100% ergeben muss. <br />
            <i>Falls ein Kriterium irrelevant ist, lassen Sie das Feld leer.</i>
          </p>

          <form action="">
            <div className="-mx-4 sm:-mx-8 px-10 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        <div className="flex-shrink-0 w-10 h-10 mb-3">
                          <img
                            className="w-full h-full"
                            src="https://cdn-icons-png.flaticon.com/512/6404/6404370.png"
                            alt=""
                          />
                        </div>
                        Kriterien
                      </th>
                      <th className="px-5 py-5 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                        <div className="flex-shrink-0 w-10 h-10 mb-3">
                          <img
                            className="w-full h-full"
                            src="https://cdn-icons-png.flaticon.com/512/847/847345.png"
                            alt=""
                          />
                        </div>
                        Gewichtung - total max. 100%
                      </th>
                    </tr>
                  </thead>
                  {/*For loop over the criteria that can be chosen*/}
                  <tbody>
                    {params.map((param, index) => (
                      <tr key={index}>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center flex-row">
                            
                              {/* <select
                                className="h-full rounded-r border-t sm:rounded-r-none sm:border-r-0 border-r border-b block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:border-l focus:border-r focus:bg-white focus:border-gray-500"
                                value={param.criteria === '' ? '' : param.criteria}
                                onChange={(e) => handleContentChange(index, e.target.value)}

                              >
                                <option value="" disabled hidden>
                                  Kriterium auswählen
                                </option>
                                <option value="reach">Reichweite</option>
                                <option value="cost">Kosten</option>
                                <option value="trustworthiness">Vertrauenswürdigkeit</option>
                              </select>  */}

                              <p className="ml-2">{param.label}</p>
                          </div>
                        </td>
                        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                          <div className="flex items-center flex-row" >
                            <input
                              className="p-16 bg-white focus:outline-none focus:shadow-outline border border-gray-500 rounded-md py-2 px-2 block appearance-none leading-normal"
                              type="email"
                              placeholder="Gewichtung"
                              value={param.weight}
                              onChange={(e) => handleTitleChange(index, e.target.value)}
                            />
                            <p className="ml-2">%</p>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </form>
          <button
            onClick={saveChanges}
            className="bg-gray-700 text-white font-bold py-2 px-4 rounded"
          >Ausrechnen</button>
        </div>
      ) : (
        <>
          <button
            onClick={deleteList}
            className="bg-gray-700 text-white font-bold py-2 px-4 rounded mt-4"
          >Neu ausrechnen</button>
          <RentalProviderOverview rentalProvider={ratedRentalProvider} ></RentalProviderOverview>
        </>
      )}
    </div>
  );
};

export default UtilityAnalysisInteraction;
