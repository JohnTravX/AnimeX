import React from 'react';
import { CardPropType } from '../types';

const CardComponent = ({ title, episodes, image, type }: CardPropType) => {

  return (
    <div className='w-64 h-96 relative cursor-pointer group hover:scale-105 transition-all ease-linear'>
        <img src={image} alt={title} className='w-full h-full object-cover overflow-hidden rounded-lg shadow-lg group-hover:brightness-50' />
        <span className='absolute top-0 left-0 text-white font-bold z-10 bg-red-600 rounded-md p-1'>{type}</span>
        <span className='absolute bottom-0 left-0 text-white font-bold z-10 bg-gradient-to-tr from-blue-700 to-slate-950 bg-red-600 rounded-md p-1'>Episodes: {episodes}</span>
        <span className='absolute top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] font-bold text-2xl w-full hidden group-hover:flex group-hover:transition-all group-hover:ease-linear'>{title}</span>
    </div>
  )
}

export default CardComponent;