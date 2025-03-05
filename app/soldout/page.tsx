"use client";

import Image from "next/image";
import { DUMMY_DATA } from "./dummy";
import { Menu, SoldoutMenu } from "@/types/types";
import { DUMMY_DATA as DUMMY_MENU } from "../menus/dummy";
import { useEffect, useState } from "react";

const SAMPLE_DATA: SoldoutMenu[] = DUMMY_DATA.menus;
const SAMPLE_DATA2: Menu[] = DUMMY_MENU.menus;

export default function Page() {
  const [menuDown, setMenuDown] = useState<boolean>(false);
  const [selectedMenu, setSelectedMenu] = useState<string>("");

  const OptionList = ({ menus }: { menus: Menu[] }) => {
    return (
      <div className="w-full rounded-xl border border-[#adb3c0] flex-col bg-white overflow-hidden">
        {menus.map((menu, index) => (
          <OptionItem
            key={index}
            name={menu.menuName}
            index={index}
            length={menus.length}
          />
        ))}
      </div>
    );
  };

  // const OptionItem = ({
  //   name,
  //   index,
  //   length,
  // }: {
  //   name: string;
  //   index: number;
  //   length: number;
  // }) => (
  //   <div
  //     className={`w-full py-3 px-6 ${
  //       index === length - 1
  //         ? "hover:border-t"
  //         : index === 0
  //         ? "border-b hover:border-b"
  //         : "border-b hover:border-b hover:border-t"
  //     } bg-[#f9f9fa] hover:bg-[#dee1e6] border-[#dee1e6] hover:border-[#adb3c0] text-xl font-normal font-['Inter'] leading-tight`}
  //   >
  //     {name}
  //     {index}
  //   </div>
  // );

  const OptionItem = ({
    name,
    index,
    length,
  }: {
    name: string;
    index: number;
    length: number;
  }) => {
    // 테두리 클래스 로직
    let borderClass = "";

    if (index === length - 1) {
      // 마지막 항목: hover 시에만 위쪽 테두리
      borderClass = "hover:border-t";
    } else if (index === 0) {
      // 첫 번째 항목: 항상 아래쪽 테두리
      borderClass = "border-b";
    } else {
      // 중간 항목: 항상 아래쪽 테두리, hover 시 위쪽 테두리 추가
      borderClass = "border-b hover:border-t";
    }

    return (
      <div
        onClick={() => {
          setSelectedMenu(name);
          setMenuDown(false);
        }}
        className={`cursor-pointer w-full py-3 px-6 ${borderClass} hover:border-[#adb3c0] border-[#dee1e6] bg-[#f9f9fa] hover:bg-[#dee1e6] text-xl font-normal font-['Inter'] leading-tight`}
      >
        {name}
      </div>
    );
  };
  useEffect(() => {
    console.log(selectedMenu);
  }, [selectedMenu]);
  return (
    <div className="flex flex-col w-full px-20 py-7 gap-5">
      <div className="flex flex-col w-full gap-7">
        {/* title */}
        <div className="text-black text-4xl font-bold font-['Inter'] leading-9 ">
          품절 메뉴
        </div>
        {/* body */}
        <div className="flex flex-col gap-20">
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
              품절 메뉴 등록
            </div>
            <div className="flex gap-4 justify-center items-center">
              <div className="relative w-96">
                <div
                  onClick={() => {
                    setMenuDown(!menuDown);
                  }}
                  className="cursor-pointer w-full justify-between items-center px-4 py-3 bg-gray1 rounded-xl border border-gray4 flex"
                >
                  <div
                    className={`${
                      !selectedMenu ? "text-gray5" : "text-black"
                    }  text-xl font-normal font-['Inter'] leading-tight`}
                  >
                    {!selectedMenu
                      ? "품절된 메뉴를 선택해주세요."
                      : selectedMenu}
                  </div>
                  <Image
                    src="/icons/dropdown_down.svg"
                    width={14}
                    height={14}
                    alt=""
                  />
                </div>
                {menuDown && (
                  <div className="absolute w-full left-0 top-full mt-1 z-10">
                    <OptionList menus={SAMPLE_DATA2} />
                  </div>
                )}
              </div>
              <button className="px-5 h-full bg-blue2 rounded-2xl text-white text-[22px] font-medium font-['Inter'] leading-snug">
                등록
              </button>
            </div>
          </div>
          {/* 메뉴관리 */}
          <div className="flex flex-col items-start justify-center gap-4">
            <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
              품절 메뉴 관리
            </div>
            <div className="flex flex-col gap-3">
              {SAMPLE_DATA.length > 0 ? (
                SAMPLE_DATA.map((item, index) => (
                  <MenuItem item={item} key={index} />
                ))
              ) : (
                <div className="w-[737px] h-[108px] px-4 py-3 rounded-xl border-4 border-[#adb3c0] border-dotted justify-center items-center flex">
                  <div className="text-right text-[#adb3c0] text-xl font-normal font-['Inter'] leading-tight">
                    품절 메뉴가 존재하지 않습니다.
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const MenuItem = ({ item }: { item: SoldoutMenu }) => (
  <div className="w-[737px] h-[108px] px-4 py-3 bg-gray1 rounded-xl border border-[#dee1e6] justify-between items-center flex">
    <div className="justify-start items-center gap-6 flex">
      <img
        className="w-[108px] h-[84px] rounded-lg border border-[#dee1e6]"
        src="https://placehold.co/108x84"
      />
      <div className="justify-start items-center gap-8 flex">
        <div className="text-black text-xl font-semibold font-['Inter'] leading-tight">
          {item.menuName}
        </div>
        <div className="text-black text-xl font-normal font-['Inter'] leading-tight">
          {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
        </div>
      </div>
    </div>
    <button className="text-center p-5 bg-red1 rounded-[10.67px] text-white text-base font-medium font-['Inter'] leading-[18.67px]">
      해제
    </button>
  </div>
);
