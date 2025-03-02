import Image from "next/image";
import Link from "next/link";
export default function Header({}) {
  return (
    <Link
      href="/index"
      className="flex justify-between w-full py-6 border-b border-gray3 px-14"
    >
      <Image
        aria-hidden
        src="/graphics/st-order-vertical.svg"
        alt="Logo"
        width={308}
        height={61}
      />
      <button className="py-5 text-xl leading-tight border px-14 border-blue2 text-blue2 rounded-xl">
        로그아웃
      </button>
    </Link>
    // todo: 로그인 되어있을때만 헤더의 홈 버튼 활성화
  );
}
