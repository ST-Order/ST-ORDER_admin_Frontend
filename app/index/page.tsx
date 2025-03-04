"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState<boolean>(true);
  // 공통 스타일 상수로 정의
  const menuItemStyle =
    "w-56 gap-8 px-4 py-7 bg-gray1 rounded-[20px] border border-gray3 flex flex-col items-center";
  const menuTextStyle = "text-center text-black text-[28px] font-normal";

  return (
    <div className="flex flex-col items-center justify-start w-full h-screen py-8 overflow-y-auto">
      <div className="flex flex-col items-center justify-center gap-16 pb-32">
        {/* greeting */}
        <div className="flex flex-col items-center gap-4 ">
          <div className="flex items-center gap-4">
            <img
              className="w-24 h-24 rounded-3xl"
              src="https://placehold.co/96x96"
              alt="프로필 이미지"
            />
            <div className="text-black text-[80px] font-semibold leading-tight">
              바비든든
            </div>
            <div className="text-6xl font-normal text-black">사장님</div>
          </div>
          <div className="text-6xl text-center text-black">어서오세요!</div>
        </div>
        {/* open/close */}
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="text-black text-[28px]">현재</div>
            {open ? (
              <div className="text-storeOpen text-[28px] font-semibold">
                영업 중
              </div>
            ) : (
              <div className="text-storeClose text-[28px] font-semibold">
                영업 종료
              </div>
            )}
            <div className="text-black text-[28px]">상태입니다</div>
          </div>
          <button
            onClick={() => {
              const message = !open
                ? "영업을 시작하시겠습니까?\n영업을 시작하면 고객들이 메뉴를 주문할 수 있어요."
                : "영업을 종료하시겠습니까?\n영업을 종료하면 고객들이 메뉴를 주문할 수 없어요.";

              if (confirm(message)) {
                setOpen(!open);
              }
            }}
            className="w-[480px] text-white text-[22px] font-medium h-20 px-[135px] py-[21px] bg-blue2 rounded-[20px] flex items-center justify-center"
          >
            {open ? "영업 종료하기" : "영업 시작하기"}
          </button>
        </div>

        {/* menu bar */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          <Link href="/order" className={menuItemStyle}>
            <Image
              aria-hidden
              src="/graphics/home_orders.svg"
              alt="주문 처리 아이콘"
              width={140}
              height={140}
            />
            <div className={menuTextStyle}>주문 처리</div>
          </Link>

          <Link href="/menus" className={menuItemStyle}>
            <Image
              aria-hidden
              src="/graphics/home_menus.svg"
              alt="메뉴 관리 아이콘"
              width={140}
              height={140}
            />
            <div className={menuTextStyle}>메뉴 관리</div>
          </Link>

          <Link href="/soldout" className={menuItemStyle}>
            <Image
              aria-hidden
              src="/graphics/home_soldout.svg"
              alt="품절 메뉴 아이콘"
              width={140}
              height={140}
            />
            <div className={menuTextStyle}>품절 메뉴</div>
          </Link>

          <Link href="/notice" className={menuItemStyle}>
            <Image
              aria-hidden
              src="/graphics/home_notice.svg"
              alt="공지 등록 아이콘"
              width={140}
              height={140}
            />
            <div className={menuTextStyle}>공지 등록</div>
          </Link>

          <Link href="/order-history" className={menuItemStyle}>
            <Image
              aria-hidden
              src="/graphics/home_orderhistory.svg"
              alt="주문 처리 내역 아이콘"
              width={140}
              height={140}
            />
            <div className={menuTextStyle}>주문 처리 내역</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
