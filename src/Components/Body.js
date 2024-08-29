import { useState,useEffect } from 'react';
import img1 from '../assets/header_img.avif';
import pizza_img from '../assets/pizza_img.png';
import samosa_img from '../assets/samosa_img.png';
import Cards_body from './Cards_body.js';

const Body = () => {
    const [showImage2, setShowImage2] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
          setShowImage2(prevShowImage2 => !prevShowImage2);
        }, 5000); 
    
        return () => clearInterval(interval); 
      }, []);

    return (
        <>
            <div className="w-full">
                <img src={img1}  className='w-full h-96  object-cover'></img>
                <div className="absolute inset-0 bg-black opacity-75 h-96 "></div>
            </div>
            <div className='grid grid-cols-2 absolute inset-0 flex flex-row m-auto'>
                    <div className='m-auto grid w-full p-12 ml-10'>
                        <h1 className='lg:text-6xl text-5xl  font-semibold italic font-serif text-gray-200'>" Your New Favorite Dining Destination Awaits. "</h1>  
                        <button className='w-40 border py-2 text-xl mt-10 text-white font-semibold hover:border-gray-300 hover:text-gray-300'>
                            Explore
                        </button>                  
                    </div>
                    {/* <div className=' m-auto '></div> */}
                    <div className=' m-auto grid pr-20 pl-20 hidden md:block lg:block '> 
                        <img src={samosa_img} 
                            className={`transition-opacity duration-1000 ease-in`}
                        />    
                    </div>
                </div>

                <div className='w-full bg-gray-800 h-96 lg:h-96 md:h-96'>
                </div>
                <Cards_body/>         
        </>
    );
}

export default Body;