import React from 'react';

const Hello = () => {
    return (
        <div>
          <div class="hero min-h-screen lg:block hidden">
  <div class="hero-content grid grid-cols-2">
    
    <div>
    <h1 class="text-3xl font-bold">Hello, it's me</h1>
      <h1 class="text-7xl font-bold">
Ojieame <span style={{color:"blue"}}>.</span></h1>
      <p class="py-6">An enthusiastic product designer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data. While traveling around the world.</p>
      <button class="btn btn-ghost">Scroll for more</button>
    </div>
    <img src="https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80" class="shadow-2xl"  alt=''/>
  </div>
</div>
<div class="hero min-h-screen block lg:hidden" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80)'}}>
  <div class="hero-content text-center text-black">
  <div style={{marginTop:'61%'}}>
    <h1 class="text-3xl font-bold">Hello, it's me</h1>
      <h1 class="text-5xl font-bold">
Ojieame <span style={{color:"blue"}}>.</span></h1>
      <p class="py-6">An enthusiastic product designer currently shaping the future of software development by designing smooth user-interfaces that promote user interaction with information and data. While traveling around the world.</p>
      <button class="btn btn-ghost">Scroll for more</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Hello;