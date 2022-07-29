import React from 'react';

const Footer = () => {
    return (
        <footer class="footer items-center p-4 text-neutral-content bg-black"  style={{justifyContent:'space-around'}}>
  <div class="items-center grid">
    <p>All rights reserved by <strong>MD Fakhrul Islam Fuad</strong></p>
  </div> 
  <div class="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
  <img src="https://uploads-ssl.webflow.com/5b32655069229148933e1636/5b33702221d4b3baba40e16a_Asset%203.svg" className='w-10 lg:ml-52' alt="" />
  </div>
</footer>
    );
};

export default Footer;