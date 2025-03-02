import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col  w-full px-20 py-7 gap-5">
      <div className="flex flex-col w-full gap-7">
        {/* title */}
        <div className="text-black text-4xl font-bold font-['Inter'] leading-9 ">
          품절 메뉴
        </div>
        <div className="flex flex-col items-start justify-start gap-7">
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
              메뉴 이름
            </div>
            <div className="flex gap-4 justify-center items-center">
              <div className="w-96 justify-between items-center px-4 py-3 bg-gray1 rounded-xl border border-gray4 flex ">
                <div className="text-gray5 text-xl font-normal font-['Inter'] leading-tight">
                  품절된 메뉴를 선택해주세요.
                </div>
                <Image
                  src="/icons/dropdown_down.svg"
                  width={14}
                  height={14}
                  alt=""
                />
              </div>
              <button className="px-5 h-full bg-blue2 rounded-2xl text-white text-[22px] font-medium font-['Inter'] leading-snug">
                등록
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start justify-center h-40 gap-4">
            <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
              품절 메뉴 관리
            </div>
            <div className="w-[737px] h-[108px] px-4 py-3 bg-gray1 rounded-xl border border-[#dee1e6] justify-between items-center flex">
              <div className="justify-start items-center gap-6 flex">
                <img
                  className="w-[108px] h-[84px] rounded-lg border border-[#dee1e6]"
                  src="https://placehold.co/108x84"
                />
                <div className="justify-start items-center gap-8 flex">
                  <div className="justify-start items-center gap-2 flex">
                    <div className="text-black text-xl font-semibold font-['Inter'] leading-tight">
                      스팸마요덮밥
                    </div>
                    <div className="px-3 py-1 bg-[#f8c047] rounded-xl text-white text-base font-semibold font-['Inter'] leading-none">
                      Popular
                    </div>
                  </div>
                  <div className="text-black text-xl font-normal font-['Inter'] leading-tight">
                    3,500원
                  </div>
                </div>
              </div>
              <button className="text-center p-5 bg-red1 rounded-[10.67px] text-white text-base font-medium font-['Inter'] leading-[18.67px]">
                해제
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
