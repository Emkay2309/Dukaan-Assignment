const ListOfTransactions = () => {
  const transactions = [
    {
      id: "#281209",
      status: "Processing",
      transactionId: "131634496747",
      orderAmount: "10,125.00",
      transactionFees: "1,125.00",
      total: "9,312",
      refundDate: "Today,08:45 PM",
    },
    {
      id: "#281208",
      status: "Successful",
      transactionId: "131634496747",
      orderAmount: "10,125.00",
      transactionFees: "1,125.00",
      total: "9,312",
      refundDate: "Yesterday,3:00 PM",
    },
    {
      id: "#281207",
      status: "Successful",
      transactionId: "131634496747",
      orderAmount: "10,125.00",
      transactionFees: "1,125.00",
      total: "9,312",
      refundDate: "12 Jul 2023,3:00 PM",
    },
    {
      id: "#281206",
      status: "Processing",
      transactionId: "131634496747",
      orderAmount: "10,125.00",
      transactionFees: "1,125.00",
      total: "9,312",
      refundDate: "12 Jul 2023,3:00 PM",
    },
    {
      id: "#281205",
      status: "Successful",
      transactionId: "131634496747",
      orderAmount: "10,125.00",
      transactionFees: "1,125.00",
      total: "9,312",
      refundDate: "12 Jul 2023,3:00 PM",
    },
    {
      id: "#281204",
      status: "Successful",
      transactionId: "131634496747",
      orderAmount: "10,125.00",
      transactionFees: "1,125.00",
      total: "9,312",
      refundDate: "12 Jul 2023,3:00 PM",
    },
    {
      id: "#281203",
      status: "Processing",
      transactionId: "131634496747",
      orderAmount: "10,125.00",
      transactionFees: "1,125.00",
      total: "9,312",
      refundDate: "12 Jul 2023,3:00 PM",
    },
  ];
  return (
    <div className=" w-[1128px] h-[40px]  leading-5 font-medium  text-end rounded-[4px] py-[10px] px-[12px] flex list-[none] flex-col justify-between">
      {/* <h2>Hello</h2> */}
      {transactions.map((transaction, index) => {
        return (
          <section
            key={index + transaction.transactionId}
            className="flex justify-between w-[1128px] h-[48px]  text-end border-b-[1px] border-[#efeeee]  py-[14px] px-[12px]"
          >
            <li className="w-[150.67px] h-[20px] text-[#146EB4] size-[14px]">
              {transaction.id}
            </li>
            <li className="w-[150.67px] h-[20px] flex justify-end gap-[8px] items-center">
              {transaction.status === "Successful" ? (
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5.33594" cy="5" r="5" fill="#17B31B" />
                </svg>
              ) : (
                <svg
                  width="11"
                  height="10"
                  viewBox="0 0 11 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="5.33594" cy="5" r="5" fill="#999999" />
                </svg>
              )}
              {transaction.status}
            </li>
            <li className="w-[150.67px] h-[20px]">
              {transaction.transactionId}
            </li>

            <li className="w-[150.67px] h-[20px]">{transaction.refundDate}</li>
            <li className="w-[150.67px] h-[20px]">
              ₹ {transaction.transactionFees}
            </li>
          </section>
        );
      })}
    </div>
  );
};

export default ListOfTransactions;
