"use client";

import { useState } from "react";

type OrderStatus = "pending" | "preparing" | "completed";

interface OrderData {
  id: number;
  time: string;
  itemCount: number;
  totalPrice: number;
  items: MenuItem[];
}

interface MenuItem {
  name: string;
  quantity: number;
  options: string[];
}

const SAMPLE_ORDERS: OrderData[] = [
  {
    id: 1,
    time: "12:55",
    itemCount: 3,
    totalPrice: 28500,
    items: [
      {
        name: "삼겹덮밥",
        quantity: 1,
        options: ["없음"],
      },
      {
        name: "참치마요덮밥",
        quantity: 1,
        options: ["곱배기(+1,000)"],
      },
      {
        name: "불고기덮밥",
        quantity: 1,
        options: [],
      },
    ],
  },
  {
    id: 2,
    time: "13:10",
    itemCount: 2,
    totalPrice: 20000,
    items: [
      {
        name: "돼지덮밥",
        quantity: 1,
        options: ["매운맛"],
      },
      {
        name: "제육덮밥",
        quantity: 1,
        options: ["곱배기(+1,000)"],
      },
    ],
  },
  {
    id: 3,
    time: "13:45",
    itemCount: 4,
    totalPrice: 38000,
    items: [
      {
        name: "치킨덮밥",
        quantity: 2,
        options: ["간장소스"],
      },
      {
        name: "삼겹덮밥",
        quantity: 2,
        options: ["없음"],
      },
    ],
  },
];

export default function OrderManagementPage() {
  const [activeTab, setActiveTab] = useState<OrderStatus>("pending");

  return (
    <div className="flex flex-col items-center w-full h-screen min-h-0 bg-gray2">
      {/* Tab Navigation */}
      <div className="flex items-center justify-center w-full gap-px">
        <button
          onClick={() => setActiveTab("pending")}
          className={`flex-1 py-4 ${
            activeTab === "pending"
              ? `bg-[#1756ea] font-semibold`
              : `bg-gray4 font-medium`
          } text-white text-4xl  font-['Inter'] leading-9`}
        >
          결제 완료 04
        </button>
        <button
          onClick={() => setActiveTab("preparing")}
          className={`flex-1 py-4 ${
            activeTab === "preparing"
              ? `bg-[#1756ea] font-semibold`
              : `bg-gray4 font-medium`
          } text-white text-4xl  font-['Inter'] leading-9`}
        >
          조리중 00
        </button>
        <button
          onClick={() => setActiveTab("completed")}
          className={`flex-1 py-4 ${
            activeTab === "completed"
              ? `bg-[#1756ea] font-semibold`
              : `bg-gray4 font-medium`
          } text-white text-4xl  font-['Inter'] leading-9`}
        >
          조리 완료 00
        </button>
      </div>
      {/* Content section */}
      {activeTab === "pending" ? (
        <PendingOrders orders={SAMPLE_ORDERS} />
      ) : activeTab === "preparing" ? (
        <PreparingOrders orders={SAMPLE_ORDERS} />
      ) : (
        <CompletedOrders orders={SAMPLE_ORDERS} />
      )}
    </div>
  );
}

interface OrderDetailsModalProps {
  onClose: React.Dispatch<React.SetStateAction<boolean>>;
  order: OrderData;
}

const OrderDetailsModal = ({ onClose, order }: OrderDetailsModalProps) => {
  return (
    <div className="flex flex-col items-center justify-center p-8 bg-white rounded-3xl gap-7">
      <div className="text-center text-[#1756ea] text-4xl font-semibold font-['Inter'] leading-9">
        주문번호 101
      </div>
      <div className="max-w-[720px] px-5 py-6 bg-[#f9f9fa] rounded-[20px] border border-[#ecedf0] justify-center items-start gap-3 flex flex-wrap">
        {order.items.map((item, index) => (
          <OrderItemDetail
            key={index}
            name={item.name}
            option={item.options.join(", ") || "없음"}
          />
        ))}
      </div>
      <button
        onClick={() => {
          onClose(false);
        }}
        className="px-20 py-3 bg-[#1756ea] rounded-2xl text-white text-[22px] font-medium font-['Inter'] leading-snug"
      >
        닫기
      </button>
    </div>
  );
};

const PendingOrders = ({ orders }: { orders: OrderData[] }) => (
  <div className="flex flex-col flex-1 w-full gap-4 px-20 pt-8 overflow-y-auto pb-36 ">
    {orders.map((order) => (
      <OrderCard key={order.id} order={order} status={"pending"} />
    ))}
  </div>
);

const PreparingOrders = ({ orders }: { orders: OrderData[] }) => (
  <div className="flex flex-col flex-1 w-full gap-4 px-20 pt-8 overflow-y-auto pb-36 ">
    {orders.map((order) => (
      <OrderCard key={order.id} order={order} status={"preparing"} />
    ))}
  </div>
);

const CompletedOrders = ({ orders }: { orders: OrderData[] }) => (
  <div className="flex flex-col flex-1 w-full gap-4 px-20 pt-8 overflow-y-auto pb-36 ">
    {orders.map((order) => (
      <OrderCard key={order.id} order={order} status={"completed"} />
    ))}
  </div>
);

const Divider = () => (
  <div data-svg-wrapper>
    <svg
      width="2"
      height="24"
      viewBox="0 0 2 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M1 0V24" stroke="black" />
    </svg>
  </div>
);

const OrderItemDetail = ({
  name,
  option,
}: {
  name: string;
  option: string;
}) => (
  <>
    <div className="flex items-center justify-start gap-2">
      <div className="text-black text-2xl font-medium font-['Inter'] leading-normal">
        {name}
      </div>
      <div className="text-[#80899d] text-xl font-normal font-['Inter'] leading-tight">
        옵션: {option}
      </div>
      <Divider />
    </div>
  </>
);

const OrderCard = ({
  order,
  status,
}: {
  order: OrderData;
  status: OrderStatus;
}) => {
  const [isDetailsOpen, setIsDetailsOpen] = useState<boolean>(false);
  return (
    <div className=" bg-white rounded-[20px] justify-start items-center flex">
      {isDetailsOpen && (
        <div className="absolute bg-[#00000080] z-50 top-0 left-0 w-full h-screen flex items-center justify-center">
          <OrderDetailsModal onClose={setIsDetailsOpen} order={order} />
        </div>
      )}
      {/* Order Number */}
      <div className="px-5 py-8 bg-[#0e34c9] rounded-tl-[20px] rounded-bl-[20px] flex-col justify-center items-center gap-9 flex h-full">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="text-center text-[#a6c4f7] text-xl font-normal font-['Inter'] leading-tight">
            주문번호
          </div>
          <div className="text-white text-[56px] font-semibold font-['Inter'] leading-[56px]">
            {order?.id || 0}
          </div>
        </div>
        <div className="text-white text-xl font-normal font-['Inter'] leading-tight whitespace-nowrap">
          주문 시각 | {order?.time || "00:00"}
        </div>
      </div>
      {/* Order Info */}
      <div className="flex flex-col justify-between flex-1 gap-4 pt-5 min-h-52">
        <div className="flex flex-wrap items-center justify-start gap-3 px-10 ">
          {order.items.map((item, index) => (
            <OrderItemDetail
              key={index}
              name={item.name}
              option={item.options.join(", ") || "없음"}
            />
          ))}
          <div className="text-black text-2xl font-medium font-['Inter'] leading-normal">
            ...외 4개
          </div>
        </div>
        {/* View All Button */}
        <div className="w-full px-10 ">
          <button
            onClick={() => {
              setIsDetailsOpen(true);
            }}
            className="text-[#0e34c9] text-xl font-normal font-['Inter'] underline leading-tight"
          >
            전체보기
          </button>
        </div>
        {/* Order Summary */}
        <div className="flex items-center justify-between px-10 pt-3 pb-5 border-t-2 border-t-gray3">
          <div className="flex items-center gap-4">
            <div className="text-black text-[28px] font-normal font-['Inter'] leading-7">
              [메뉴 {order.itemCount}개]
            </div>
            <div className="text-black text-[28px] font-bold font-['Inter'] leading-7">
              {order?.totalPrice?.toLocaleString() || "0"}원
            </div>
          </div>
          {status === "pending" ? (
            <button className="px-10 py-3 bg-red1 rounded-xl text-white text-[22px] font-medium font-['Inter'] leading-snug ">
              접수하기
            </button>
          ) : status === "preparing" ? (
            <button className="px-10 py-3 bg-red1 rounded-xl text-white text-[22px] font-medium font-['Inter'] leading-snug ">
              조리 완료
            </button>
          ) : (
            <button className="px-10 py-3 bg-gray2 rounded-xl text-blue3 text-[22px] font-medium font-['Inter'] leading-snug ">
              전달 완료
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
