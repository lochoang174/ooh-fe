"use client"
import BillboardGrid from '@/components/BillboardGrid'
import DisplayBooking from '@/components/DisplayBooking'
import React from 'react'
import { useAccount } from 'wagmi'

const page = () => {
  const account = useAccount();
  if(!account.isConnected){
    return <div className='w-full min-h-screen flex justify-center items-center'>You need to connect your wallet</div>
  }
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>

    <DisplayBooking />

  </div>

  )
}

export default page
