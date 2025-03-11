"use client";

import Image from "next/image";
import { useState } from "react";

export default function Page() {
  const [category, setCategory] = useState<boolean>(false);
  const [selectedCat, setSelectedCat] = useState<string>();
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
          setSelectedCat(name);
          setCategory(false);
        }}
        className={`cursor-pointer w-full py-3 px-6 ${borderClass} hover:border-[#adb3c0] border-[#dee1e6] bg-[#f9f9fa] hover:bg-[#dee1e6] text-xl font-normal font-['Inter'] leading-tight`}
      >
        {name}
      </div>
    );
  };

  const OptionList = ({ categories }: { categories: string[] }) => {
    return (
      <div className="w-full rounded-xl border border-[#adb3c0] flex-col bg-white overflow-hidden">
        {categories.map((category, index) => (
          <OptionItem
            key={index}
            name={category}
            index={index}
            length={categories.length}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="flex flex-col w-full gap-5 px-10 lg:px-20 py-7">
      <div className="flex flex-col w-full gap-7">
        {/* title */}
        <div className="text-black text-4xl font-bold font-['Inter'] leading-9 ">
          공지사항 등록
        </div>
        {/* form */}
        <form className="flex flex-col items-start justify-start gap-7">
          {/* 1st row */}
          <div className="flex items-start w-full gap-10 lg:gap-40 lg:w-2/3">
            <div className="flex flex-col items-start justify-start flex-1 gap-4">
              <label className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
                제목
              </label>
              <input
                placeholder="공지사항의 제목을 입력해주세요."
                className="px-4 py-3 bg-[#ecedf0] rounded-xl border border-gray3 text-xl font-normal font-['Inter'] leading-tight w-full"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <label className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
                노출 기간
              </label>
              <div className="flex items-center gap-6 wrap max-w-96">
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    className="w-5 h-5"
                    value={1}
                    name="duration"
                  />
                  <div className="text-black text-xl font-normal font-['Inter'] leading-tight">
                    하루(24시간)
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    className="w-5 h-5"
                    value={2}
                    name="duration"
                  />
                  <div className="text-black text-xl font-normal font-['Inter'] leading-tight">
                    일주일(7일)
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="radio"
                    className="w-5 h-5"
                    value={3}
                    name="duration"
                  />
                  <div className="text-black text-xl font-normal font-['Inter'] leading-tight">
                    한 달(30일)
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 카테고리 */}
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
              카테고리
            </div>
            <div className="relative w-96">
              <div
                onClick={() => {
                  setCategory(!category);
                }}
                className="flex items-center justify-between w-full px-4 py-3 border cursor-pointer bg-gray1 rounded-xl border-gray4"
              >
                <div
                  className={`${
                    !selectedCat ? "text-gray5" : "text-black"
                  }  text-xl font-normal font-['Inter'] leading-tight`}
                >
                  {!selectedCat
                    ? "공지사항의 유형을 선택해주세요."
                    : selectedCat}
                </div>
                <Image
                  src="/icons/dropdown_down.svg"
                  width={14}
                  height={14}
                  alt=""
                />
              </div>
              {category && (
                <div className="absolute left-0 z-10 w-full mt-1 top-full">
                  <OptionList categories={["신메뉴 출시", "품절 안내"]} />
                </div>
              )}
            </div>
          </div>
          {/* 3rd row */}
          <div className="flex flex-col items-start justify-center h-40 gap-4">
            <div className="flex items-center justify-start gap-3">
              <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
                사진(선택)
              </div>
              <div className="text-gray5 text-base font-normal font-['Inter'] leading-none">
                이해를 도울 사진이 있다면 등록해주세요.
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
          {/* 4th row */}
          <div className="flex flex-col items-start justify-center w-2/3 gap-4">
            <div className="flex items-center justify-start gap-3">
              <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
                내용
              </div>
              <div className="text-gray5 text-base font-normal font-['Inter'] leading-none">
                (0/275자)
              </div>
            </div>
            <textarea
              maxLength={275}
              placeholder="공지사항의 내용을 입력해 주세요."
              className="px-6 py-5 h-44 bg-[#ecedf0] rounded-xl border border-gray3 text-xl font-normal font-['Inter'] leading-tight w-full"
            />
          </div>
        </form>
      </div>
      <div className="flex items-center justify-center gap-4">
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
