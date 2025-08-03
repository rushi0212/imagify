import React, { useContext } from 'react'
import { assets, plans } from '../assets/assets'
import { AppContext } from '../context/AppContext'
import {motion} from 'framer-motion'

const BuyCredit = () => {

  const {user} =useContext(AppContext)
  return (
    <div className='min-h-[80vh] text-center pt-5 mb-10'
    initial={{opacity:0.2, y:100}}
    transition={{duration:1}}
    whileInView={{opacity:1,y:0}}
    viewport={{once:true}}
    >
      <button className='border border-gray-800 px-10 py-2 rounded-full mb-6'>Our Plan</button>
      <h1 className='text-center text-3xl font-medium mb-6 sm:mb-10'>Choose the plan</h1>
      
      <div className='flex gap-6 flex-wrap justify-center text-center'>
        {plans.map((plan,index)=>(
        <div key={index} className='bg-white drop-shadow-sm border rounded-lg py-12 px-8 text-gray-600 hover:scale-105 transition-all duration-500'>
          <p className='mt-3 mb-1 font-semibold text-black'>{plan.id}</p>
          <p className='text-sm mt-2'>{plan.desc}</p>
          <p className='mt-6'><span className='text-3xl font-medium'>${plan.price}</span>/ {plan.credits} credits</p>
          <button className='w-full bg-gray-800 text-white mt-8 text-sm rounded-md py-2.5 min-w-52'>{user ? 'Purchase' : 'Get Started'}</button>
        </div>
      ))}
      </div>
      
    </div>
  )
}

export default BuyCredit
