import Link from "next/link";

interface Params {
  params: { id: string };
}

export default function Page({ params }: Params) {
  const { id } = params;

  return (
    <div className="flex flex-col gap-40 px-20 py-7 items-center">
      <div className="flex flex-col gap-12 ">
        {/* title */}
        <div className="text-black text-4xl font-bold font-['Inter'] leading-9">
          공지사항 상세보기
        </div>
        {/* body */}
        <div className="px-7 py-8 bg-[#f9f9fa] rounded-[20px] border border-[#dee1e6] flex-col  gap-6 flex">
          <div className=" gap-7 flex">
            <div className="text-[#80899d] text-2xl font-normal font-['Inter'] leading-normal">
              2025.03.18 11:27(게시)
            </div>
            <div className="text-[#80899d] text-2xl font-normal font-['Inter'] leading-normal">
              2025.03.19 16:40(수정)
            </div>
          </div>
          <div className="justify-start items-center gap-4 flex">
            <div className=" text-black text-[28px] font-semibold font-['Inter'] leading-7">
              신메뉴 오삼불고기덮밥 출시
            </div>
            <div className="px-4 py-1.5 bg-[#fbeccd] rounded-lg text-[#b38012] text-xl font-medium font-['Inter'] leading-tight">
              신메뉴 출시
            </div>
          </div>
          <div className=" justify-start items-center gap-6 flex">
            <img
              className="w-[496px] h-[386px] rounded-2xl border border-[#dee1e6]"
              src="https://placehold.co/496x386"
            />
            <div className="w-[705px] h-full p-7 bg-white rounded-2xl border border-[#dee1e6] text-black text-[22.95px] font-normal font-['Inter'] leading-[34.42px] whitespace-pre-line flex items-center justify-center text-center">
              {`
      매콤달콤! 쫄깃~ 오삼불고기덮밥 출시!!!
      
      2025년 3월 신메뉴! <오삼불고기덮밥>을 출시합니다~!
      오징어의 쫄깃함과 삼겹살의 육즙이 일품이에요^^
      든든한 한 끼 드시고 싶으면 시도해보세요~
    `}
            </div>
          </div>
        </div>
      </div>
      {/* button */}
      <Link
        href="/notice"
        className="py-5 text-center text-white text-[22px] font-medium font-['Inter'] leading-snug w-[268px] bg-[#1756ea] rounded-2xl"
      >
        공지사항 목록으로
      </Link>
    </div>
  );
}
