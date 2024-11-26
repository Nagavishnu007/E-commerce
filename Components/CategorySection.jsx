import React from 'react'
import kid from '../assets/Images/Kid.png'
import women from '../assets/Images/woman.png'
import man from '../assets/Images/man.png'

const CategorySection = () => {
    const Categories = [
        {
            title:'Men',
            imageUrl:man,
        },
        {
            title:'Women',
            imageUrl:women,
        },
        {
            title:'Men',
            imageUrl:kid,
        },
 
    ]
  return (
    <>
      <div className='container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6'>
         {Categories.map((Category,index)=>(
            <div key={index} className='relative h-96  transform transition-transform duration-300 hover:scale-105 '>
                 <img src={Category.imageUrl} alt='men-img' className='w-full h-full object-cover rounded-lg shadow-md'/>
                 <div className='absolute top-20 left-12'>
                    <p className='text-xl font-bold'>{Category.title}</p>
                    <p className='text-gray-600'>View All</p>
                </div>
            </div>  
         ))}
      </div>
    </>
  )
}

export default CategorySection
