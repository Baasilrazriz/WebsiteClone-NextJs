"use client"
import React, { useState } from 'react';
function NavBar() {
  const [seachtext,setSeachText]=useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };


  return (
        <>
          <div className=' w-full fixed top-0 h-20  z-10  gap-20 flex justify-between  shadow   px-10'>
          <div className='flex flex-col justify-center'>
          <div className='flex '>
          <div className="h-12 overflow-hidden  ">
              <img className='w-full h-full object-cover '  src="data:image/png;base64,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" alt="" />
          </div>
          <h1 className='py-2 px-2 font-[ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji] text-2xl   font-bold'>ZinTools</h1>
          
          </div>
          
          </div>
          <div className='hidden  lg:flex flex-col justify-center'>
          <div className='flex h-12 bg-[#f2f2f2] w-[30rem] p-1 rounded-full overflow-hidden pl-5'>
            <input className='bg-[#f2f2f2] h-full w-[24.8rem] focus:border-none outline-none ' type="text" value={seachtext} placeholder="search..."  onChange={(e)=>{setSeachText(e.target.value)}} />
            <div className='h-full w-[1px] bg-gray-300'></div>
            <button className='bg-[#f2f2f2] h-full w-[3rem] px-4'>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20.004"><path d="m19.705 18.288-5.531-5.531a7.927 7.927 0 1 0-1.424 1.421l5.531 5.532a1.006 1.006 0 0 0 1.422-1.422ZM3.738 12.096a5.908 5.908 0 1 1 8.354 0 5.869 5.869 0 0 1-8.354 0Z"></path></svg>
            </button>
          </div>
          </div>
          <div className='flex flex-col justify-center'>
            <div className=''>
            <div className="xl:hidden flex items-center justify-center cursor-pointer">
              
        <div className="" onClick={toggleMenu}>
        <svg viewBox="0 0 100 80" width="40" height="40">
  <rect width="100" height="20" rx="10"></rect>
  <rect y="30" width="100" height="20" rx="10"></rect>
  <rect y="60" width="100" height="20" rx="10"></rect>
</svg>
        </div>
      </div>
            </div>
            {menuOpen && (
        <div className="fixed bg-gray-300 py-4  w-72 z-[999] top-0 right-0 h-full" onClick={toggleMenu}>
          <div className="flex flex-col  h-full">
            <div className="text-black flex flex-col">
              <div className='flex items-end justify-end px-3'>
              <svg viewBox="0 0 100 80" width="40" height="40">
  <rect width="100" height="20" rx="10"></rect>
  <rect y="30" width="100" height="20" rx="10"></rect>
  <rect y="60" width="100" height="20" rx="10"></rect>
</svg>
              </div>
<div className='my-6'>
<a href="#" className='py-2 flex justify-center text-lg font-bold hover:text-yellow-500'>Stock Video</a>
        <a href="#" className="py-2 flex justify-center text-lg font-bold hover:text-yellow-500">Video Templates</a>
        <a href="#" className="py-2 flex justify-center text-lg font-bold hover:text-yellow-500">Music</a>
        <a href="#" className="py-2 flex justify-center text-lg font-bold hover:text-yellow-500">Sound Effects</a>
        <a href="#" className="py-2 flex justify-center text-lg font-bold hover:text-yellow-500">Graphic Templates</a>
        <a href="#" className="py-2 flex justify-center text-lg font-bold hover:text-yellow-500">Graphics</a>
        <a href="#" className="py-2 flex justify-center text-lg font-bold hover:text-yellow-500">Presentation Templates</a>
        <a href="#" className="py-2 flex justify-center text-lg font-bold hover:text-yellow-500">Photos</a>
        <a href="#" className="py-2 flex justify-center text-lg font-bold hover:text-yellow-500">Fonts</a>
        <a href="#" className="py-2 flex justify-center text-lg font-bold hover:text-yellow-500">Add-ons</a>
        <a href="#" className="py-2 flex justify-center text-lg font-bold hover:text-yellow-500">Web Templates</a>
        <a href="#" className="py-2 flex justify-center text-lg font-bold hover:text-yellow-500">More</a>
        <a href="#" className="py-2 flex justify-center text-lg font-bold hover:text-yellow-500">Learn</a>
</div>
              
            </div>
          </div>
        </div>
      )}
          <div className='hidden xl:flex xl:shrink-0 gap-10 '>
            <button className='hover:scale-110 '>Log in</button>
            <button className='py-3 px-7 bg-blue-600 text-white h-fit rounded-full hover:scale-105 hover:bg-blue-500'>Sign up</button>
          </div>
          </div>
          </div>
        </>
          
        
    );
}

export default NavBar;