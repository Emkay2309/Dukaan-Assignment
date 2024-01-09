import React from "react";
import Card from "./Card";

const PaymentOverview = () => {
  return (
    <div className="flex flex-col gap-[24px]">
      <div className=" flex justify-between">
        <span>
          <h1 className="text-xl font-medium"> Overview</h1>
        </span>
        <span className="flex w-[137px] h-[36px] radius-[4px] p-1 gap-3 items-center border border-[#dbdbdb] self-center align-middle justify-center rounded">
          <p> This Month</p>
          <svg
            width="12"
            height="8"
            viewBox="0 0 12 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.277478 0.777478C0.613814 0.441141 1.14013 0.410565 1.511 0.68575L1.61726 0.777478L6 5.15979L10.3827 0.777478C10.7191 0.441141 11.2454 0.410565 11.6163 0.68575L11.7225 0.777478C12.0589 1.11381 12.0894 1.64013 11.8142 2.011L11.7225 2.11726L6.66989 7.16989C6.33355 7.50623 5.80724 7.5368 5.43636 7.26162L5.33011 7.16989L0.277478 2.11726C-0.0924926 1.74729 -0.0924926 1.14745 0.277478 0.777478Z"
              fill="#4D4D4D"
            />
          </svg>
        </span>
      </div>
      <div className="flex w-[1152px] h-[154px] gap-[20px]">
        <Card className="bg-[#146EB4] h-[154px] text-[white]">
          <label htmlFor="" className="bg-blue-600">Next Payout</label>
          <span className="flex justify-between mb-[9px]">
            <h1 className="bg-[#146EB4] m-0 text-2xl font-bold ">₹{"2,312.23"}</h1>
            <p> 23 orders {">"} </p>
          </span>
          <span className="py-2 px-6 ml-[-20px]  h-[36px]  rounded-[8px] flex  w-[370.67px] justify-between bg-[#0E4F82]">
            <p> Next payout date: </p>
            <p>{"Today, 04:00PM"}</p>
          </span>
        </Card>
        <Card>
          <label htmlFor="">Amount Pending</label>
          <span className="flex justify-between">
            <h1 className="m-0 text-2xl font-bold">₹{"92,312.23"}</h1>
            <p className="text-[#146EB4] font-semibold flex gap-[3px]"><p className="underline">13 orders</p>{">"}</p>
          </span>
        </Card>
        <Card>
          <label htmlFor="">Amount Processed</label>
          <span className="flex justify-between">
            <h1 className="m-0 text-2xl font-bold">₹{"23,92,312.19"}</h1>
            {/* 23 orders {">"}  */}
          </span>
        </Card>
      </div>
    </div>
  );
};

export default PaymentOverview;
