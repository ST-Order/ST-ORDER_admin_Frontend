import Image from "next/image";
export function Header({}) {
  return (
    <div className="w-full border-b border-gray3 px-14 py-6">
      <Image
        aria-hidden
        src="/graphics/st-order-vertical.svg"
        alt="Logo"
        width={308}
        height={61}
      />
    </div>
  );
}
