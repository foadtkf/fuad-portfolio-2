import React from 'react';
import { Fade } from 'react-reveal';

const CaseStudies = () => {
    return (
        <div className='mt-20 min-h-screen lg:ml-20 lg:mr-20'>
             <h1 class="text-5xl font-bold mb-5">
      Case Studies<span style={{color:"blue"}}>+</span></h1>
      <Fade bottom cascade>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 '>
      <div class="card relative w-full bg-base-100 shadow-xl image-full">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" className='hover:opacity-5 opacity-80'/></figure>
  <div class="card-body">
    <h2 class="card-title text-5xl">Soovu</h2>
  </div>
</div>
<div class="card relative w-full bg-base-100 shadow-xl image-full">
  <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
  <div class="card-body">
    <h2 class="card-title text-5xl">FirstBankQuest</h2>
  </div>
</div>
      </div>
      </Fade>
        </div>
    );
};

export default CaseStudies;