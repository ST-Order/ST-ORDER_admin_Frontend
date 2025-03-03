import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col items-center w-full h-screen px-20 gap-9 bg-gray2 py-7">
      {/* title */}
      <div className="relative flex items-center justify-center w-full">
        {/* 제목 - 왼쪽에 absolute로 배치 */}
        <div className="absolute left-0 text-black text-4xl font-bold font-['Inter'] leading-9">
          주문 처리 내역
        </div>

        {/* date - 중앙 정렬 */}
        <div className="flex items-center justify-center gap-4">
          <div className="h-[60px] px-4 py-2 bg-[#f9f9fa] rounded-xl border border-[#dee1e6] justify-start items-center gap-9 flex">
            <Image alt="" src="/icons/back.svg" width={20} height={20} />
            <div className="text-black text-[28px] font-normal font-['Inter'] leading-7">
              2025-03-12
            </div>
            <Image alt="" src="/icons/next.svg" width={20} height={20} />
          </div>
          <div className="h-[60px] p-5 bg-[#1756ea] rounded-2xl text-white text-[22px] font-medium font-['Inter'] leading-snug flex items-center justify-center">
            조회
          </div>
        </div>
      </div>
      {/* rows section */}
      <div className="flex flex-col flex-1 w-full min-h-0 gap-7">
        <div className="flex items-center justify-start gap-5">
          <div className="text-black text-[28px] font-normal font-['Inter'] leading-7">
            총 매출액
          </div>
          <div className="text-[#1756ea] text-[28px] font-normal font-['Inter'] leading-7">
            760,000원
          </div>
        </div>
        <div className="flex flex-col flex-1 w-full gap-4 pt-4 pb-24 overflow-y-auto">
          {/* row */}
          <MenuRow />
          <MenuRow />
          <MenuRow />
          <MenuRow />
          <MenuRow />
          <MenuRow />
          <MenuRow />
          <MenuRow />
          <MenuRow />
          <MenuRow />
          <MenuRow />
          <MenuRow />
          <MenuRow />
          <MenuRow />
        </div>
      </div>
    </div>
  );
}

const Bar = () => (
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

const Option = ({ title, option }: { title: string; option: string }) => (
  <>
    <div className="flex items-center justify-start gap-2">
      <div className="text-black text-2xl font-medium font-['Inter'] leading-normal">
        {title}
      </div>
      <div className="text-[#80899d] text-xl font-normal font-['Inter'] leading-tight">
        옵션: {option}
      </div>
    </div>
    <Bar />
  </>
);
const MenuRow = () => {
  return (
    <div className=" bg-white rounded-[20px] justify-start items-center flex">
      {/* Order Number */}
      <div className="px-5 py-8 bg-[#0e34c9] rounded-tl-[20px] rounded-bl-[20px] flex-col justify-center items-center gap-9 flex h-full">
        <div className="flex flex-col items-center justify-center gap-3">
          <div className="text-center text-[#a6c4f7] text-xl font-normal font-['Inter'] leading-tight">
            주문번호
          </div>
          <div className="text-white text-[56px] font-semibold font-['Inter'] leading-[56px]">
            101
          </div>
        </div>
        <div className="text-white text-xl font-normal font-['Inter'] leading-tight whitespace-nowrap">
          주문 시각 | 12:55
        </div>
      </div>
      {/* Order Info */}
      <div className="flex flex-col gap-4 pt-5">
        <div className="flex flex-wrap items-center justify-start gap-3 px-10 ">
          <Option title="삼겹덮밥" option="없음" />
          <Option title="참치마요덮밥(2)" option="곱배기(+1,000)" />
          <Option title="삼겹덮밥" option="없음" />
          <Option title="참치마요덮밥(2)" option="곱배기(+1,000)" />
          <Option title="삼겹덮밥" option="없음" />
          <Option title="참치마요덮밥(2)" option="곱배기(+1,000)" />
          <Option title="삼겹덮밥" option="없음" />
          <Option title="참치마요덮밥(2)" option="곱배기(+1,000)" />
          <Option title="삼겹덮밥" option="없음" />
          <Option title="참치마요덮밥(2)" option="곱배기(+1,000)" />
          <div className="text-black text-2xl font-medium font-['Inter'] leading-normal">
            ...외 4개
          </div>
        </div>
        {/* 전체보기 */}
        <div className="text-[#0e34c9] text-xl font-normal font-['Inter'] underline leading-tight px-10">
          전체보기
        </div>
        {/* 전달완료 */}
        <div className="flex items-center justify-between px-10 pt-3 pb-5 border-t-2 border-t-gray3">
          <div className="flex items-center gap-4">
            <div className="text-black text-[28px] font-normal font-['Inter'] leading-7">
              [메뉴 11개]
            </div>
            <div className="text-black text-[28px] font-bold font-['Inter'] leading-7">
              41,500원
            </div>
          </div>
          <div className="px-10 py-3 bg-[#ecedf0] rounded-xl text-[#0e34c9] text-[22px] font-medium font-['Inter'] leading-snug ">
            전달 완료
          </div>
        </div>
      </div>
    </div>
  );
};
