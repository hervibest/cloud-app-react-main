import React from 'react';

import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import {ChipIcon, SupportIcon} from '@heroicons/react/solid'

import supportImg from '../assets/test.jpg'

const Testimonial = () => {
  return (
  <div name='support' className='w-full mt-24'>
      
      
      <div className='max-w-[1240px] mx-auto text-white relative'>
          <div className='px-4 py-12'>
              <h2 className='text-5xl pt-8 font-bold text-black text-center'>Testimonial</h2>
          </div>

          <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
              <div className='bg-white justify-between items-center rounded-xl shadow-2xl'>
                  <div className='p-8 block mx-auto relative justify-between items-center text-center'>
                      <img src={supportImg} className="lg:max-w-[100px]  max-w-[250px] mx-auto items-center justify-between h-auto  relative"   >
                      </img>
                      <h3 className='font-bold text-2xl text-center my-6'>Seseorang</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  
              </div>
              <div className='bg-white justify-between items-center rounded-xl shadow-2xl'>
                  <div className='p-8 block mx-auto relative justify-between items-center text-center'>
                      <img src={supportImg} className="lg:max-w-[100px]  max-w-[250px] mx-auto items-center justify-between h-auto  relative"   >
                      </img>
                      <h3 className='font-bold text-2xl text-center my-6'>Seseorang</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  
              </div>
              <div className='bg-white justify-between items-center rounded-xl shadow-2xl'>
                  <div className='p-8 block mx-auto relative justify-between items-center text-center'>
                      <img src={supportImg} className="lg:max-w-[100px]  max-w-[250px] mx-auto items-center justify-between h-auto  relative"   >
                      </img>
                      <h3 className='font-bold text-2xl text-center my-6'>Seseorang</h3>
                      <p className='text-gray-600 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                  </div>
                  
              </div>
          </div>
      </div>
  </div>
  );
};

export default Testimonial;
