import React from 'react';

function Menu() {
    return (
        <>
           <div className='flex flex-col justify-center w-full fixed top-[5.2rem]  h-12   gap-20  shadow   px-10'>
       <ul className='hidden xl:flex h-full gap-[2.1rem] font-[ -apple-system, BlinkMacSystemFont, "Segoe UI", "Fira Sans", "Helvetica Neue", Arial, sans-serif] text-[14px]'>
        <li><a className='hover:scale-105 hover:border-blue-700 hover:border-b-2 h-full flex flex-col justify-center' href="#">Stock Video</a></li>
        <li><a className='hover:scale-105 hover:border-blue-700 hover:border-b-2 h-full flex flex-col justify-center' href="#">Video Templates</a></li>
        <li><a className='hover:scale-105 hover:border-blue-700 hover:border-b-2 h-full flex flex-col justify-center' href="#">Music</a></li>
        <li><a className='hover:scale-105 hover:border-blue-700 hover:border-b-2 h-full flex flex-col justify-center' href="#">Sound Effects</a></li>
        <li><a className='hover:scale-105 hover:border-blue-700 hover:border-b-2 h-full flex flex-col justify-center' href="#">Graphic Templates</a></li>
        <li><a className='hover:scale-105 hover:border-blue-700 hover:border-b-2 h-full flex flex-col justify-center' href="#">Graphics</a></li>
        <li><a className='hover:scale-105 hover:border-blue-700 hover:border-b-2 h-full flex flex-col justify-center' href="#">Presentation Templates</a></li>
        <li><a className='hover:scale-105 hover:border-blue-700 hover:border-b-2 h-full flex flex-col justify-center' href="#">Photos</a></li>
        <li><a className='hover:scale-105 hover:border-blue-700 hover:border-b-2 h-full flex flex-col justify-center' href="#">Fonts</a></li>
        <li><a className='hover:scale-105 hover:border-blue-700 hover:border-b-2 h-full flex flex-col justify-center' href="#">Add-ons</a></li>
        <li><a className='hover:scale-105 hover:border-blue-700 hover:border-b-2 h-full flex flex-col justify-center' href="#">Web Templates</a></li>
        <li><a className='hover:scale-105 hover:border-blue-700 hover:border-b-2 h-full flex flex-col justify-center' href="#">More</a></li>
        <li><a className='hover:scale-105 text-gray-300 hover:border-blue-700 hover:border-b-2 h-full flex flex-col justify-center' href="#">|</a></li>
        <li><a className='hover:scale-105 hover:border-blue-700 hover:border-b-2 h-full flex flex-col justify-center' href="#">Learn</a></li>
       </ul>
          </div>
        </>
    );
}

export default Menu;