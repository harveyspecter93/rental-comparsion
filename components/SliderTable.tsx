import React from 'react';
import Slider from '@mui/material/Slider';
import { Criteria, CriteriaLabels } from '@/interfaces/types';

type SliderTableProps = {
  params: Criteria[];
  handleSliderChange: (index: number, newValue: number) => void;
};

const SliderTable: React.FC<SliderTableProps> = ({ params, handleSliderChange }) => {
  return (
    <div className="flex flex-col space-y-6">
      <div className="flex flex-col sm:flex-row items-center sm:space-x-4">
        <div className="flex-1">
          <p className="text-lg font-semibold text-gray-700">Kriterium</p>
        </div>
        <div className="flex-1 w-full sm:w-auto">
          <p className="text-lg font-semibold text-gray-700">Gewichtung</p>
        </div>
      </div>
      {params.map((param, index) => (
        <div
          key={index}
          className={`p-4 rounded-lg shadow-md flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 ${param.weight === 0 ? 'bg-gray-100' : 'bg-white'}`}
        >
          <div className={`flex-1 ${param.weight === 0 ? 'text-gray-400' : 'text-gray-700'}`}>
            <p className="text-lg font-medium">{CriteriaLabels[param.criteria as keyof typeof CriteriaLabels]}</p>
          </div>
          <div className="flex-1 w-full sm:w-auto">
            <Slider
              value={param.weight}
              onChange={(event, value) => handleSliderChange(index, value as number)}
              step={10}
              min={0}
              max={100}
              aria-labelledby={`slider-${index}`}
              className="w-full"
            />
            <div className="flex justify-between text-sm mt-2">
              <span className="text-gray-600">Irrelevant</span>
              <span className="text-gray-600">Sehr wichtig</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SliderTable;
