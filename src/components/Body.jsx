import React from 'react';
import PaymentOverview from './PaymentOverview';
import Transactions from './Transactions';

const Body = () => {
  return (
    <div className='w-[1152px] bg-[#fafafa] h-[694px] mt-12 ml-8 m-8 gap-8  '>
        <PaymentOverview/>
        <Transactions/>
    </div>
  )
}

export default Body