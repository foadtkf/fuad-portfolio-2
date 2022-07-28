import React from 'react';
import img from '../assets/bg.png'
const Process = () => {
    const process =[
        {
            'id':1,
            'name': 'Pre-Process',
            'details': ['Collect Informations', 'Persons', 'Setup Goals' ,'Project Folder + Moodboard'],
            'img' :'https://images.unsplash.com/photo-1621440318464-72633426377b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bnVtYmVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80'
        },
        {
            'id':2,
            'name': 'Low Fidelity',
            'details': ['Whiteboard', 'Maps Screen Info', 'Possible States' ,'First Diagram'],
            'img' :'https://images.unsplash.com/photo-1621440318431-b720cd358375?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bnVtYmVyJTIwMnxlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            'id':3,
            'name': 'Work/ Design',
            'details': ['Moodboard', 'First Diagram', 'Setup Goals' ,'Project Folder + Moodboard'],
            'img' :'https://images.unsplash.com/photo-1621440318357-3e3c94221a1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bnVtYmVyJTIwM3xlbnwwfHwwfHw%3D&w=1000&q=80'
        },
        {
            'id':4,
            'name': 'Assets & Delivery',
            'details': ['Specifications', 'Persons', 'Setup Goals' ,'Project Folder + Moodboard'],
            'img' :'https://cutewallpaper.org/21/number-4-wallpapers/Best-Number-4-Stock-Photos-Pictures-and-Royalty-Free-Images-.jpg'
        },
        {
            'id':5,
            'name': 'Final & Test',
            'details': ['Inspectlet x hotjar', 'Persons', 'Setup Goals' ,'Project Folder + Moodboard'],
            'img' :'https://media.istockphoto.com/photos/five-white-wooden-isolated-red-background-with-copy-space-new-5-picture-id1296505549?b=1&k=20&m=1296505549&s=170667a&w=0&h=S_ChDnSLyT48JkO2J_mENLjsuKblqsdtu4tbGC7NaSs='
        },
        {
            'id':6,
            'name': 'After Design',
            'details': ['Collect Informations', 'Persons'],
            'img' :'https://c4.wallpaperflare.com/wallpaper/826/545/259/number-6-black-white-hd-wallpaper-preview.jpg'
        },
    ]
    return (
        <div className='min-h-screen lg:ml-40 lg:mr-40' >
        <h1 class="text-4xl font-bold my-5">
      Process <span style={{color:"blue"}}>+</span></h1>

          <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
          {
            process.map(pr=>
                <div class="hero hover:shadow-lg hover:shadow-red-700" style={{backgroundImage: `url(${pr.img})`}}>
  <div class="hero-overlay bg-opacity-80"></div>
  <div class="hero-content text-center text-neutral-content">
    <div>
      <h1 class="mb-5 text-3xl font-bold">{pr.name}</h1>
      {
        pr.details.map(d=><p>{d}</p>)
      }
    </div>
  </div>
</div>
            )
          }
          </div>  
        </div>
    );
};

export default Process;