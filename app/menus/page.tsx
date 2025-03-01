import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full h-screen gap-4 px-20 bg-gray2 py-7">
      {/* title */}
      <div className="flex items-center justify-between w-full">
        <div className="text-black text-4xl font-bold font-['Inter'] leading-9">
          메뉴 관리
        </div>
        <button className="px-6 py-3 bg-[#0e34c9] rounded-xl justify-center items-center gap-3 flex">
          <Image src="/icons/plus.svg" alt="plus" width={20} height={20} />
          <div className="text-white text-[22px] font-medium font-['Inter'] leading-snug">
            메뉴 등록
          </div>
        </button>
      </div>
      {/* rows section */}
      <div className="flex flex-col w-full gap-4 overflow-y-auto flex-1 pb-24 pt-4">
        {/* row */}
        <div className="w-full px-6 py-4 bg-white rounded-[20px] justify-between items-center flex">
          <div className="flex items-center justify-center gap-11">
            <img
              className="w-[190px]  rounded-xl border border-[#dee1e6]"
              src="https://placehold.co/190x148"
            />
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <div className="text-black text-[28px] font-bold font-['Inter'] leading-7">
                    삼겹덮밥
                  </div>
                  <div className="px-3 py-1 bg-menuBest rounded-[14px]  text-white text-base font-semibold font-['Inter'] leading-none">
                    Best
                  </div>
                  <div className="px-3 py-1 bg-menuPopular rounded-[14px] text-white text-base font-semibold font-['Inter'] leading-none">
                    Popular
                  </div>
                </div>
                <div className="text-black text-[28px] font-normal font-['Inter'] leading-7">
                  3,500원
                </div>
              </div>
              <div className=" text-black text-xl font-normal font-['Inter'] leading-tight">
                맛난 삼겹살과 쌈장으로 만든 덮밥
              </div>
              <div className=" text-[#80899d] text-xl font-normal font-['Inter'] leading-tight">
                옵션: 곱배기(+1,000) / 밥 추가(+1,000)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className=" p-7 bg-blue2 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              수정
            </button>
            <button className=" p-7 bg-red1 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              삭제
            </button>
          </div>
        </div>
        {/* row */}
        <div className="w-full px-6 py-4 bg-white rounded-[20px] justify-between items-center flex">
          <div className="flex items-center justify-center gap-11">
            <img
              className="w-[190px]  rounded-xl border border-[#dee1e6]"
              src="https://placehold.co/190x148"
            />
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <div className="text-black text-[28px] font-bold font-['Inter'] leading-7">
                    삼겹덮밥
                  </div>
                  <div className="px-3 py-1 bg-menuBest rounded-[14px]  text-white text-base font-semibold font-['Inter'] leading-none">
                    Best
                  </div>
                  <div className="px-3 py-1 bg-menuPopular rounded-[14px] text-white text-base font-semibold font-['Inter'] leading-none">
                    Popular
                  </div>
                </div>
                <div className="text-black text-[28px] font-normal font-['Inter'] leading-7">
                  3,500원
                </div>
              </div>
              <div className=" text-black text-xl font-normal font-['Inter'] leading-tight">
                맛난 삼겹살과 쌈장으로 만든 덮밥
              </div>
              <div className=" text-[#80899d] text-xl font-normal font-['Inter'] leading-tight">
                옵션: 곱배기(+1,000) / 밥 추가(+1,000)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className=" p-7 bg-blue2 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              수정
            </div>
            <div className=" p-7 bg-red1 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              삭제
            </div>
          </div>
        </div>
        {/* row */}
        <div className="w-full px-6 py-4 bg-white rounded-[20px] justify-between items-center flex">
          <div className="flex items-center justify-center gap-11">
            <img
              className="w-[190px]  rounded-xl border border-[#dee1e6]"
              src="https://placehold.co/190x148"
            />
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <div className="text-black text-[28px] font-bold font-['Inter'] leading-7">
                    삼겹덮밥
                  </div>
                  <div className="px-3 py-1 bg-menuBest rounded-[14px]  text-white text-base font-semibold font-['Inter'] leading-none">
                    Best
                  </div>
                  <div className="px-3 py-1 bg-menuPopular rounded-[14px] text-white text-base font-semibold font-['Inter'] leading-none">
                    Popular
                  </div>
                </div>
                <div className="text-black text-[28px] font-normal font-['Inter'] leading-7">
                  3,500원
                </div>
              </div>
              <div className=" text-black text-xl font-normal font-['Inter'] leading-tight">
                맛난 삼겹살과 쌈장으로 만든 덮밥
              </div>
              <div className=" text-[#80899d] text-xl font-normal font-['Inter'] leading-tight">
                옵션: 곱배기(+1,000) / 밥 추가(+1,000)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className=" p-7 bg-blue2 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              수정
            </div>
            <div className=" p-7 bg-red1 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              삭제
            </div>
          </div>
        </div>
        {/* row */}
        <div className="w-full px-6 py-4 bg-white rounded-[20px] justify-between items-center flex">
          <div className="flex items-center justify-center gap-11">
            <img
              className="w-[190px]  rounded-xl border border-[#dee1e6]"
              src="https://placehold.co/190x148"
            />
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <div className="text-black text-[28px] font-bold font-['Inter'] leading-7">
                    삼겹덮밥
                  </div>
                  <div className="px-3 py-1 bg-menuBest rounded-[14px]  text-white text-base font-semibold font-['Inter'] leading-none">
                    Best
                  </div>
                  <div className="px-3 py-1 bg-menuPopular rounded-[14px] text-white text-base font-semibold font-['Inter'] leading-none">
                    Popular
                  </div>
                </div>
                <div className="text-black text-[28px] font-normal font-['Inter'] leading-7">
                  3,500원
                </div>
              </div>
              <div className=" text-black text-xl font-normal font-['Inter'] leading-tight">
                맛난 삼겹살과 쌈장으로 만든 덮밥
              </div>
              <div className=" text-[#80899d] text-xl font-normal font-['Inter'] leading-tight">
                옵션: 곱배기(+1,000) / 밥 추가(+1,000)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className=" p-7 bg-blue2 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              수정
            </div>
            <div className=" p-7 bg-red1 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              삭제
            </div>
          </div>
        </div>
        {/* row */}
        <div className="w-full px-6 py-4 bg-white rounded-[20px] justify-between items-center flex">
          <div className="flex items-center justify-center gap-11">
            <img
              className="w-[190px]  rounded-xl border border-[#dee1e6]"
              src="https://placehold.co/190x148"
            />
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <div className="text-black text-[28px] font-bold font-['Inter'] leading-7">
                    삼겹덮밥
                  </div>
                  <div className="px-3 py-1 bg-menuBest rounded-[14px]  text-white text-base font-semibold font-['Inter'] leading-none">
                    Best
                  </div>
                  <div className="px-3 py-1 bg-menuPopular rounded-[14px] text-white text-base font-semibold font-['Inter'] leading-none">
                    Popular
                  </div>
                </div>
                <div className="text-black text-[28px] font-normal font-['Inter'] leading-7">
                  3,500원
                </div>
              </div>
              <div className=" text-black text-xl font-normal font-['Inter'] leading-tight">
                맛난 삼겹살과 쌈장으로 만든 덮밥
              </div>
              <div className=" text-[#80899d] text-xl font-normal font-['Inter'] leading-tight">
                옵션: 곱배기(+1,000) / 밥 추가(+1,000)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className=" p-7 bg-blue2 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              수정
            </div>
            <div className=" p-7 bg-red1 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              삭제
            </div>
          </div>
        </div>
        {/* row */}
        <div className="w-full px-6 py-4 bg-white rounded-[20px] justify-between items-center flex">
          <div className="flex items-center justify-center gap-11">
            <img
              className="w-[190px]  rounded-xl border border-[#dee1e6]"
              src="https://placehold.co/190x148"
            />
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <div className="text-black text-[28px] font-bold font-['Inter'] leading-7">
                    삼겹덮밥
                  </div>
                  <div className="px-3 py-1 bg-menuBest rounded-[14px]  text-white text-base font-semibold font-['Inter'] leading-none">
                    Best
                  </div>
                  <div className="px-3 py-1 bg-menuPopular rounded-[14px] text-white text-base font-semibold font-['Inter'] leading-none">
                    Popular
                  </div>
                </div>
                <div className="text-black text-[28px] font-normal font-['Inter'] leading-7">
                  3,500원
                </div>
              </div>
              <div className=" text-black text-xl font-normal font-['Inter'] leading-tight">
                맛난 삼겹살과 쌈장으로 만든 덮밥
              </div>
              <div className=" text-[#80899d] text-xl font-normal font-['Inter'] leading-tight">
                옵션: 곱배기(+1,000) / 밥 추가(+1,000)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className=" p-7 bg-blue2 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              수정
            </button>
            <button className=" p-7 bg-red1 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              삭제
            </button>
          </div>
        </div>
        {/* row */}
        <div className="w-full px-6 py-4 bg-white rounded-[20px] justify-between items-center flex">
          <div className="flex items-center justify-center gap-11">
            <img
              className="w-[190px]  rounded-xl border border-[#dee1e6]"
              src="https://placehold.co/190x148"
            />
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <div className="text-black text-[28px] font-bold font-['Inter'] leading-7">
                    삼겹덮밥
                  </div>
                  <div className="px-3 py-1 bg-menuBest rounded-[14px]  text-white text-base font-semibold font-['Inter'] leading-none">
                    Best
                  </div>
                  <div className="px-3 py-1 bg-menuPopular rounded-[14px] text-white text-base font-semibold font-['Inter'] leading-none">
                    Popular
                  </div>
                </div>
                <div className="text-black text-[28px] font-normal font-['Inter'] leading-7">
                  3,500원
                </div>
              </div>
              <div className=" text-black text-xl font-normal font-['Inter'] leading-tight">
                맛난 삼겹살과 쌈장으로 만든 덮밥
              </div>
              <div className=" text-[#80899d] text-xl font-normal font-['Inter'] leading-tight">
                옵션: 곱배기(+1,000) / 밥 추가(+1,000)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className=" p-7 bg-blue2 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              수정
            </button>
            <button className=" p-7 bg-red1 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              삭제
            </button>
          </div>
        </div>
        {/* row */}
        <div className="w-full px-6 py-4 bg-white rounded-[20px] justify-between items-center flex">
          <div className="flex items-center justify-center gap-11">
            <img
              className="w-[190px]  rounded-xl border border-[#dee1e6]"
              src="https://placehold.co/190x148"
            />
            <div className="flex flex-col items-start gap-6">
              <div className="flex items-center gap-12">
                <div className="flex items-center gap-3">
                  <div className="text-black text-[28px] font-bold font-['Inter'] leading-7">
                    삼겹덮밥
                  </div>
                  <div className="px-3 py-1 bg-menuBest rounded-[14px]  text-white text-base font-semibold font-['Inter'] leading-none">
                    Best
                  </div>
                  <div className="px-3 py-1 bg-menuPopular rounded-[14px] text-white text-base font-semibold font-['Inter'] leading-none">
                    Popular
                  </div>
                </div>
                <div className="text-black text-[28px] font-normal font-['Inter'] leading-7">
                  3,500원
                </div>
              </div>
              <div className=" text-black text-xl font-normal font-['Inter'] leading-tight">
                맛난 삼겹살과 쌈장으로 만든 덮밥
              </div>
              <div className=" text-[#80899d] text-xl font-normal font-['Inter'] leading-tight">
                옵션: 곱배기(+1,000) / 밥 추가(+1,000)
              </div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button className=" p-7 bg-blue2 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              수정
            </button>
            <button className=" p-7 bg-red1 rounded-2xl text-white text-2xl font-medium font-['Inter'] leading-7">
              삭제
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
