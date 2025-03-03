import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col  w-full px-20 py-7 gap-5">
      <div className="flex flex-col w-full gap-7">
        {/* title */}
        <div className="text-black text-4xl font-bold font-['Inter'] leading-9 ">
          공지사항 등록
        </div>
        {/* form */}
        <form className="flex flex-col items-start justify-start gap-7">
          {/* 1st row */}
          <div className="flex items-start gap-40 w-2/3">
            <div className="flex flex-col items-start justify-start gap-4 flex-1">
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
              <div className="h-5 justify-start items-center gap-6 inline-flex">
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-5 h-5 relative  overflow-hidden">
                    <div className="w-[18px] h-[18px] left-[1px] top-[1px] absolute rounded-full border border-[#1756ea]" />
                    <div className="w-2.5 h-2.5 left-[5px] top-[5px] absolute bg-[#1756ea] rounded-full" />
                  </div>
                  <div className="text-black text-xl font-normal font-['Inter'] leading-tight">
                    하루(24시간)
                  </div>
                </div>
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-5 h-5 relative  overflow-hidden">
                    <div className="w-[18px] h-[18px] left-[1px] top-[1px] absolute bg-white rounded-full border border-[#adb3c0]" />
                  </div>
                  <div className="text-black text-xl font-normal font-['Inter'] leading-tight">
                    일주일(7일)
                  </div>
                </div>
                <div className="justify-start items-center gap-2 flex">
                  <div className="w-5 h-5 relative  overflow-hidden">
                    <div className="w-[18px] h-[18px] left-[1px] top-[1px] absolute bg-white rounded-full border border-[#adb3c0]" />
                  </div>
                  <div className="text-black text-xl font-normal font-['Inter'] leading-tight">
                    한 달(30일)
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 2nd row */}
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
              카테고리
            </div>
            <div className="flex gap-4 justify-center items-center">
              <div className="w-96 justify-between items-center px-4 py-3 bg-gray1 rounded-xl border border-gray4 flex ">
                <div className="text-gray5 text-xl font-normal font-['Inter'] leading-tight">
                  공지사항의 유형을 선택해주세요.
                </div>
                <Image
                  src="/icons/dropdown_down.svg"
                  width={14}
                  height={14}
                  alt=""
                />
              </div>
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
