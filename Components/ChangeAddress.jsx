import React, { useState } from 'react'

const ChangeAddress = ({setAddress,setIsModal}) => {
       const [newAddress, setNewAddress] = useState('')
       const onClose = ()=> {
        setAddress(newAddress)
        setIsModal(false)
       }

  return (
    <>
       <div>
          <input type='text' placeholder='Enter new address ' className='border border-slate-400 w-3/4 outline-none mb-4 font-medium p-1'
                  onChange={(e)=>setNewAddress(e.target.value)}/>
          <div className='flex justify-end'>
               <button className='bg-gray-500 text-white py-2 px-4 rounded mr-2 ' onClick={()=>setIsModal(false)}>Cancel</button>
               <button className='bg-blue-500 text-white py-2 px-4 rounded' onClick={onClose}>Save Address</button>
          </div>
       </div>
    </>
  )
}

export default ChangeAddress
