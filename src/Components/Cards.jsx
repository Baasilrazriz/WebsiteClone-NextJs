import React from 'react';

function Cards(props) {
    return (
        <div className='py-6 px-6 border rounded-lg h-56 w-64 shadow   border-gray-200 overflow-hidden hover:shadow-md hover:scale-105'>
         <div className="h-20 w-20 overflow-hidden  ">
              <img className='w-full h-full object-fill '  src={props.image} alt="" />
          </div>
<h1 className='pt-4 text-gray-700 text-2xl  font-extrabold'>{props.title}</h1>
<p className='pt-2 text-gray-400 line-clamp-2'>{props.description}</p>
        </div>
    );
}

export default Cards;