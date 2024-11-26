import React from 'react'
import { useSelector } from 'react-redux'
import ProductCart from '../Components/ProductCart'
import notFound from '../assets/Images/not_found.png'

const FilterData = () => {
    const filterProducts = useSelector(state => state.product.filterData)
  return (
    <>
       <div className=' mx-auto py-12 px-4 md:px-16 lg:px-24'>
           {filterProducts.length > 0 ?
             <div>
                       
                       <h2 className='text-2xl font-bold mb-6 text-center'>Shop</h2>
                      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols:4 lg:grid-cols-5 gap-6 cursor-pointer'>
                            {filterProducts.map((product)=>(
                             <ProductCart product={product}/>
                            ))}
                       </div>

                
            </div>:
              <div className='flex justify-center'>
                  <img src={notFound} alt='not-found-img'/>
             </div>
             }
                  
            </div>
    </>
  )
}

export default FilterData
