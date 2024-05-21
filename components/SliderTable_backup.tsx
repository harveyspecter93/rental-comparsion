import React from 'react';
import Slider from '@mui/material/Slider';
import { Criteria, CriteriaLabels } from '@/interfaces/types';

type SliderTableProps = {
  params: Criteria[];
  handleSliderChange: (index: number, newValue: number) => void;
};

const SliderTable: React.FC<SliderTableProps> = ({ params, handleSliderChange }) => {
  return (
    <div className="-mx-4 sm:-mx-8 px-10 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Kriterium
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Gewichtung
              </th>
            </tr>
          </thead>
          <tbody>
            {params.map((param, index) => (
              <tr key={index}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <p className="ml-2">{CriteriaLabels[param.criteria as keyof typeof CriteriaLabels]}</p>
                  </div>
                </td>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <Slider
                    value={param.weight}
                    onChange={(event, value) => handleSliderChange(index, value as number)}
                    step={10}
                    min={0}
                    max={100}
                    aria-labelledby={`slider-${index}`}
                  />
                  <div className="flex justify-between mt-2">
                    <span className="text-sm text-gray-600">Irrelevant</span>
                    <span className="text-sm text-gray-600">Sehr wichtig</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SliderTable;
