import Image from "next/image";
import { DUMMY_DATA } from "./dummy";
import Link from "next/link";

interface MenuOption {
  optionId: number; // Long을 number로 변환
  optionName: string;
  optionPrice: number; // Integer를 number로 변환
  optionAvailable: boolean;
}

interface Menu {
  menuId: number; // Long을 number로 변환
  menuName: string;
  isBest: boolean;
  isPopular: boolean;
  menuImage: string;
  description: string;
  price: number; // Integer를 number로 변환
  isSoldOut: boolean;
  isAvailable: boolean;
  options: MenuOption[];
}
export default function Page() {
  const SAMPLE_DATA: Menu[] = DUMMY_DATA.menus;

  return (
    <div className="flex flex-col items-center w-full h-screen gap-4 px-20 bg-gray2 py-7">
      {/* title */}
      <div className="flex items-center justify-between w-full">
        <div className="text-black text-4xl font-bold font-['Inter'] leading-9">
          메뉴 관리
        </div>
        <button className="px-6 py-3 bg-[#0e34c9] rounded-xl justify-center items-center gap-3 flex">
          <Image src="/icons/plus.svg" alt="plus" width={20} height={20} />
          <Link
            href={"/menus/register"}
            className="text-white text-[22px] font-medium font-['Inter'] leading-snug"
          >
            메뉴 등록
          </Link>
        </button>
      </div>
      {/* rows section */}
      <div className="flex flex-col flex-1 w-full gap-4 pt-4 pb-24 overflow-y-auto">
        {/* row */}
        {SAMPLE_DATA.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

const MenuItem = ({ item }: { item: Menu }) => {
  const options = item.options.map(
    (i) =>
      `${i.optionName}(+${i.optionPrice
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ",")})`
  );
  return (
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
                {item.menuName}
              </div>
              {item.isBest && (
                <div className="px-3 py-1 bg-menuBest rounded-[14px]  text-white text-base font-semibold font-['Inter'] leading-none">
                  Best
                </div>
              )}

              {item.isPopular && (
                <div className="px-3 py-1 bg-menuPopular rounded-[14px] text-white text-base font-semibold font-['Inter'] leading-none">
                  Popular
                </div>
              )}
            </div>
            <div className="text-black text-[28px] font-normal font-['Inter'] leading-7">
              {item.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}원
            </div>
          </div>
          <div className=" text-black text-xl font-normal font-['Inter'] leading-tight">
            {item.description}
          </div>
          <div className=" text-gray5 text-xl font-normal font-['Inter'] leading-tight">
            옵션: {options.length > 0 ? options.join(" / ") : "없음"}
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
  );
};
