"use client";

import Image from "next/image";
import React, { useState } from "react";

export default function Page() {
  const [menuPrice, setMenuPrice] = useState<number | null>(null);

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const value = rawValue.replace(/,/g, "");
    if (value === "") {
      setMenuPrice(null);
    } else if (/^\d{1,6}$/.test(value)) {
      setMenuPrice(Number(value));
    }
  };

  const onMinusClick = () => {
    if (menuPrice && menuPrice > 0) {
      setMenuPrice(Number(menuPrice) - 100);
    }
  };
  const onPlusClick = () => {
    setMenuPrice(Number(menuPrice) + 100);
  };

  return (
    <div className="flex flex-col  w-full px-20 py-7 gap-5 overflow-y-auto">
      <div className="flex flex-col w-full gap-7">
        {/* title */}
        <div className="text-black text-4xl font-bold font-['Inter'] leading-9 ">
          메뉴 등록
        </div>
        {/* form */}
        <form className="flex flex-col items-start justify-start gap-7">
          <div className="flex flex-col items-start justify-start w-2/3 gap-4">
            <label className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
              메뉴 이름
            </label>
            <input
              placeholder="메뉴 이름을 입력해주세요."
              className="px-4 py-3 bg-[#ecedf0] rounded-xl border border-gray3  text-xl font-normal font-['Inter'] leading-tight w-full"
            ></input>
          </div>
          <div className="flex flex-col items-start justify-center h-40 gap-4">
            <div className="flex items-center justify-start gap-3">
              <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
                메뉴 사진
              </div>
              <div className="text-gray5 text-base font-normal font-['Inter'] leading-none">
                메뉴 사진을 등록해주세요.
              </div>
            </div>
            <div className="border-gray3 bg-gray2 w-[155px] h-[120px] border flex justify-center items-center rounded-xl">
              <Image
                src="/icons/plus_black.svg"
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className="flex flex-col items-start justify-center w-2/3 gap-4">
            <label className=" text-black text-2xl font-semibold font-['Inter'] leading-normal">
              메뉴 설명
            </label>
            <input
              placeholder="메뉴 설명을 입력해주세요."
              className="px-4 py-3 bg-[#ecedf0] rounded-xl border border-gray3  text-xl font-normal font-['Inter'] leading-tight w-full"
            />
          </div>
          <div className="flex flex-col items-start justify-center gap-4 ">
            <div className="flex items-center justify-start gap-3">
              <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
                메뉴 옵션(선택)
              </div>
              <div className="text-gray5 text-base font-normal font-['Inter'] leading-none">
                추가로 제공할 옵션을 선택해주세요.
              </div>
            </div>
            <div className="flex items-center justify-start gap-6 flex-wrap">
              {/* 곱배기 */}
              <MenuOption name="곱배기" />
              <MenuOption name="밥 추가" />
              <MenuOption name="면 추가" />

              {/* 직접 입력 */}
              <CustomOption />
            </div>
          </div>
          {/* 메뉴 태그 */}
          <div className=" flex-col justify-start items-start gap-4 flex">
            <div className="flex items-center justify-start gap-3">
              <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
                메뉴 태그(선택)
              </div>
              <div className="text-gray5 text-base font-normal font-['Inter'] leading-none">
                베스트, 인기 등 메뉴에 해당하는 태그를 선택해주세요. (인기
                태그는 앱 ‘인기메뉴’ 항목에 노출됩니다.)
              </div>
            </div>
            <div className="flex items-center justify-start gap-6">
              <div className="flex items-center justify-start gap-2">
                <div className="relative w-5 h-5 overflow-hidden">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] left-[1px] top-[1px] absolute bg-white rounded-sm border border-[#adb3c0]"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-1">
                  <div className="text-black text-xl font-medium font-['Inter'] leading-tight">
                    대표(Best)
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-start gap-2">
                <div className="relative w-5 h-5 overflow-hidden">
                  <input
                    type="checkbox"
                    className="w-[18px] h-[18px] left-[1px] top-[1px] absolute bg-white rounded-sm border border-[#adb3c0]"
                  />
                </div>
                <div className="flex flex-col items-start justify-center gap-1">
                  <div className="text-black text-xl font-medium font-['Inter'] leading-tight">
                    인기(Popular)
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" flex-col justify-start items-start gap-4 flex">
            <div className="flex items-center justify-start gap-3">
              <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
                메뉴 가격
              </div>
              <div className="text-gray5 text-base font-normal font-['Inter'] leading-none">
                판매 가격을 설정해주세요.
              </div>
            </div>
            {/* counter */}
            <div className="w-[164px] h-11 justify-start items-center flex">
              <input
                placeholder="가격"
                className="w-[126px] h-11 px-5 py-3 bg-[#ecedf0] rounded-tl-xl rounded-bl-xl border border-gray3 text-center text-xl font-normal font-['Inter'] leading-none"
                value={menuPrice === null ? "" : menuPrice.toLocaleString()}
                onChange={onPriceChange}
              />
              <div className="h-full px-3 py-1 bg-gray3 rounded-tr-lg rounded-br-lg border border-gray3 flex flex-col justify-center items-center">
                <Image
                  src="/icons/dropdown_up.svg"
                  width={15}
                  height={15}
                  alt=""
                  onClick={onPlusClick}
                />
                <Image
                  src="/icons/dropdown_down.svg"
                  width={15}
                  height={15}
                  alt=""
                  onClick={onMinusClick}
                />
              </div>
            </div>
          </div>
        </form>
      </div>
      <div className="justify-center items-center gap-4 flex">
        <button className="w-[268px] py-4 bg-red1 rounded-2xl text-[22px] font-medium leading-snug text-white text-center">
          취소
        </button>
        <button className="w-[268px] py-4 bg-blue2 rounded-2xl text-[22px] font-medium leading-snug text-white text-center">
          등록완료
        </button>
      </div>
    </div>
  );
}

const CustomOption = () => {
  const [price, setPrice] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [name, setName] = useState<string>("");

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const value = rawValue.replace(/,/g, "");
    if (value === "") {
      setPrice(null);
    } else if (/^\d{1,6}$/.test(value)) {
      setPrice(Number(value));
    }
  };
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const onMinusClick = () => {
    if (price && price > 0) {
      setPrice(Number(price) - 100);
    }
  };
  const onPlusClick = () => {
    setPrice(Number(price) + 100);
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative w-5 h-5 overflow-hidden">
        <input
          type="checkbox"
          className="w-[18px] h-[18px] left-[1px] top-[1px] absolute bg-white rounded-sm border border-[#adb3c0]"
          onChange={() => {
            if (isChecked) {
              setIsChecked(false);
              setPrice(null);
            } else {
              setIsChecked(true);
            }
          }}
        />
      </div>
      <input
        type="text"
        className=" text-xl font-medium border-b-2 border-b-gray4"
        placeholder="직접 입력"
        disabled={!isChecked ? true : false}
        value={name}
        onChange={onNameChange}
      />
      {/* counter */}
      <div className="w-[124px] h-8 justify-start items-center flex">
        <input
          type="text"
          placeholder="가격"
          value={price === null ? "" : price.toLocaleString()}
          onChange={onPriceChange}
          className="w-24 h-8 px-5 py-1 bg-[#ecedf0] rounded-tl-lg rounded-bl-lg border border-gray3 text-center text-base font-normal font-['Inter'] leading-none"
          disabled={!isChecked ? true : false}
        />
        <div className="h-full px-2 py-1 bg-gray3 rounded-tr-lg rounded-br-lg border border-gray3 flex flex-col justify-center">
          <Image
            src="/icons/dropdown_up.svg"
            width={12}
            height={12}
            alt=""
            onClick={onPlusClick}
          />
          <Image
            src="/icons/dropdown_down.svg"
            width={12}
            height={12}
            alt=""
            onClick={onMinusClick}
          />
        </div>
      </div>
    </div>
  );
};
const MenuOption = ({ name }: { name: string }) => {
  const [price, setPrice] = useState<number | null>(null);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const onPriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;
    const value = rawValue.replace(/,/g, "");
    if (value === "") {
      setPrice(null);
    } else if (/^\d{1,6}$/.test(value)) {
      setPrice(Number(value));
    }
  };

  const onMinusClick = () => {
    if (price && price > 0) {
      setPrice(Number(price) - 100);
    }
  };
  const onPlusClick = () => {
    setPrice(Number(price) + 100);
  };

  return (
    <div className="flex items-center justify-start gap-2">
      <div className="relative w-5 h-5 overflow-hidden">
        <input
          type="checkbox"
          className="w-[18px] h-[18px] left-[1px] top-[1px] absolute bg-white rounded-sm border border-[#adb3c0]"
          onChange={() => {
            if (isChecked) {
              setIsChecked(false);
              setPrice(null);
            } else {
              setIsChecked(true);
            }
          }}
        />
      </div>
      <div className="flex flex-col items-start justify-center gap-1">
        <div className="text-black text-xl font-medium font-['Inter'] leading-tight border-b-2 border-b-gray4">
          {name}
        </div>
      </div>
      {/* counter */}
      <div className="w-[124px] h-8 justify-start items-center flex">
        <input
          type="text"
          placeholder="가격"
          value={price === null ? "" : price.toLocaleString()}
          onChange={onPriceChange}
          className="w-24 h-8 px-5 py-1 bg-[#ecedf0] rounded-tl-lg rounded-bl-lg border border-gray3 text-center text-base font-normal font-['Inter'] leading-none"
          disabled={!isChecked ? true : false}
        />
        <div className="h-full px-2 py-1 bg-gray3 rounded-tr-lg rounded-br-lg border border-gray3 flex flex-col justify-center">
          <Image
            src="/icons/dropdown_up.svg"
            width={12}
            height={12}
            alt=""
            onClick={onPlusClick}
          />
          <Image
            src="/icons/dropdown_down.svg"
            width={12}
            height={12}
            alt=""
            onClick={onMinusClick}
          />
        </div>
      </div>
    </div>
  );
};
