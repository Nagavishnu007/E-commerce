import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaSearch,FaShoppingCart,FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import Modal from './Modal';
import Login from './Login';
import Register from './Register';
import { setSearchTerm } from '../redux/ProductSlice';


const Nav = () => {
     const[isModal,setIsModal] = useState(false)
     const[isLogin,setIsLogin] = useState(true)
     const[search,setSearch]=useState('')
     const dispatch = useDispatch()
     const navigate = useNavigate()

     const handleForm = (e)=>{
            e.preventDefault()
            dispatch(setSearchTerm(search))
            navigate('/filter-data')
     }

     const openSignUp =()=>{
          setIsLogin(false)
          setIsModal(true)
     }

     const openLogin =()=>{
          setIsLogin(true)
          setIsModal(false)
     }

     const products = useSelector(state=>state.cart.products)

  return (
    <>
      <nav className='bg-white shadow-lg'>

            <div className='container flex justify-between items-center mx-auto px-4 py-4 md:px-16 lg:px-24 '>
                     
                     <div className='text-lg font-bold'>
                            <Link to='/'>e-SHOP</Link>
                     </div>

                     <div className='relative bg-slate-600 flex-1 mx-4'>
                          <form onSubmit={handleForm}>
                              <input className='w-full border py-2 px-4' type='text' placeholder='Search Product' onChange={(e)=>setSearch(e.target.value)}/>
                              <FaSearch className='absolute top-3 right-3 text-red-500' />
                          </form>
                     </div>

                     <div className='flex items-center space-x-4 '>
                          <Link to='/cart' className='relative'>
                                <FaShoppingCart className='text-lg' />
                                {products.length > 0 && <span className='absolute top-0 left-3 text-xs w-3 bg-red-600
                                                       flex justify-center items-center text-white rounded-full'>{products.length}</span>}
                          </Link>
                          <button className='hidden md:block' onClick={()=>setIsModal(true)}>
                               Login | Register
                          </button>
                          <button className='block md:hidden'>
                               <FaUser />
                          </button>

                     </div>
            </div>

           <div className='flex justify-center items-center space-x-10 py-2 text-sm font-bold'>
                     <Link to='/' className='hover:underline'>Home</Link>
                     <Link to='/shop' className='hover:underline'>Shop</Link>
                     <Link className='hover:underline'>Contact</Link>
                     <Link className='hover:underline'>About</Link>
           </div> 
          <Modal isModal={isModal} setIsModal={setIsModal}>
                {isLogin?<Login openSignUp={openSignUp}/>:<Register openLogin={openLogin}/>}
          </Modal>
      </nav>
    </>
  )
}

export default Nav
