import React, { useEffect } from 'react'
import {Categories,mockData} from '../assets/mockData.jsx'
import HomePage from '../assets/Images/hero-page.png'
import InfoSection from '../Components/InfoSection.jsx'
import CategorySection from '../Components/CategorySection.jsx'
import { useDispatch, useSelector } from 'react-redux'
import { setProduct } from '../redux/ProductSlice.jsx'
import ProductCart from '../Components/ProductCart.jsx'
import Shop from './Shop.jsx'


const Home = () => {
        const dispatch = useDispatch()
        const products = useSelector((state)=>state.product)
        useEffect(()=>{
            dispatch(setProduct(mockData))
        },[])
  return (
    <>
    <div>
      
      <div className='bg-white mt-2 px-4 md:px-16 lg:24'>

         <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-2'>

              <div className='w-full md:w-3/12'>
                  <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>SHOP BY CATEGORIES</div>  
                    <ul className='space-y-4 bg-gray-100 p-3 '>
                       {Categories.map((Category,index)=>(
                          <li className='flex items-center text-sm font-medium ' key={index}><div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>{Category}</li>
                       ))}
                   </ul>
               </div>

               <div className='w-full md:w-9/12 mt-8 md:mt-0 h-96 relative'>
                  <img src={HomePage} alt='home-img' className='w-full h-full'/>
                  <div className='absolute top-16 left-8'>
                     <p className='text-gray-600 mb-4 '>Code with Vishnu</p>
                     <h2 className='text-sm font-bold md:text-2xl'>WELCOME TO E-SHOP</h2>
                     <p className='text-sm mt-2.5 font-bold text-gray-800 md:text-xl'>MILLONS + PRODUCTS</p>
                     <button className='bg-red-600 px-3 py-2 text-white mt-4 hover:bg-red-700 
                                         transform transition-transform duration-300 hover:scale-105 md:px-8 '>Shop Now</button>
                  </div>
               </div>

         </div>

          <InfoSection/>
          <CategorySection/>

          <div className='container mx-auto py-12'>

             <h2 className='text-2xl font-bold mb-6 text-center'>Top Products</h2>
              <div className='grid grid-cols-1 sm:grid-cols-2 mg:grid-cols:4 lg:grid-cols-5 gap-6 cursor-pointer'>
              {products.products.slice(0,5).map((product)=>(
                    <ProductCart product={product}/>
              ))}
              </div>

         </div>   
           
           
            
      </div>
           <Shop/>
      </div>
    </>
  )
}

export default Home
