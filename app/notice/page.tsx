import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full h-screen gap-4 px-20 bg-gray2 py-7">
      {/* title */}
      <div className="flex items-center justify-between w-full">
        <div className="text-black text-4xl font-bold font-['Inter'] leading-9">
          공지사항
        </div>
        <button className="px-6 py-3 bg-[#0e34c9] rounded-xl justify-center items-center gap-3 flex">
          <Image src="/icons/plus.svg" alt="plus" width={20} height={20} />
          <Link
            href="/notice/register"
            className="text-white text-[22px] font-medium font-['Inter'] leading-snug"
          >
            공지 등록
          </Link>
        </button>
      </div>
      {/* rows section */}
      <div className="flex flex-col flex-1 w-full gap-4 pt-4 pb-24 overflow-y-auto">
        {/* row */}
        <div className="w-full px-6 py-4 bg-white rounded-[20px] justify-between items-center flex">
          <div className="flex items-center justify-center gap-11">
            <div className="h-[88px] px-9 py-6 text-[40px] font-bold font-['Inter'] leading-10">
              1
            </div>
            <div className="flex flex-col items-start gap-6">
              <div className="h-8 px-4 py-1.5 bg-[#fcd7e3] rounded-lg text-noticeOutOfStockText text-xl font-medium font-['Inter'] leading-tight ">
                품절
              </div>
              <div className="text-black text-[28px] font-bold font-['Inter'] leading-7">
                오늘 삼겹덮밥 품절되었습니다
              </div>
              <div className="text-gray5 text-xl font-normal font-['Inter'] leading-tight">
                2025.03.20 17:09
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

// todo: 각 태그 설정
