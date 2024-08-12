import React from "react";
import { CardProps } from "../../types";
const Card: React.FC<CardProps> = ({
  courseName,
  schoolName,
  marksObtained,
  outOf,
}) => {
  return (
    <a
      href='#'
      className='block rounded-lg p-4 shadow-buttons bg-slate-800/80 bg-opacity-65'
    >
      <div className='mt-2'>
        <div className='border-b border-opacity-20 mb-3 pb-2 border-gray-300'>
          <dt className='sr-only z-50 bg-red-500'>Address</dt>

          <dd className='font-medium'>{courseName}</dd>
          <dd className='text-xs text-opacity-10 font-poppin pt-0.5 leading-loose'>
            {schoolName}
          </dd>
        </div>

        <div className=' flex items-center gap-5 flex-wrap text-xs'>
          <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
            <div className='mt-1.5 sm:mt-0 text-center'>
              <p className='text-gray-500 mb-2'>Marks</p>

              <p className='font-medium'>{marksObtained}</p>
            </div>
          </div>

          <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
            <div className='mt-1.5 sm:mt-0 text-center '>
              <p className='text-gray-500 mb-2'>OutOf</p>

              <p className='font-medium'>{outOf}</p>
            </div>
          </div>

          <div className='sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2'>
            <div className='mt-1.5 sm:mt-0 text-center w-full'>
              <p className='text-gray-500 mb-2'>%age</p>

              <p className='font-medium'>
                {((parseInt(marksObtained) / parseInt(outOf)) * 100).toFixed(2)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
