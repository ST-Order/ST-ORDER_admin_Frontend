import Image from "next/image";
import Link from "next/link";
export default function Header() {
  return (
    <header className="flex justify-between w-full py-6 border-b min-h-20 border-gray3 px-14">
      <Link href="/">
        <Image
          aria-hidden
          src="/graphics/st-order-vertical.svg"
          alt="Logo"
          width={308}
          height={61}
        />
      </Link>
      <button className="py-5 text-xl leading-tight border px-14 border-blue2 text-blue2 rounded-xl">
        로그아웃
      </button>
    </header>
    // todo: 로그인 되어있을때만 헤더의 홈 버튼 활성화
  );
}
