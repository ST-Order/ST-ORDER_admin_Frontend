import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full pb-[284px] bg-white flex-col items-center gap-[164px] inline-flex overflow-hidden">
      {/* header */}
      <div className="w-full border-b border-gray3 px-14 py-6">
        <Image
          aria-hidden
          src="/graphics/st-order-vertical.svg"
          alt="Logo"
          width={308}
          height={61}
        />
      </div>

      <div className="flex-1 justify-center items-center">
        <div className="flex flex-col justify-center  gap-7">
          <div className="text-4xl font-bold font-['Inter'] leading-9">
            로그인
          </div>

          <div className="flex-col gap-5 flex">
            <div className="flex-col gap-2 flex">
              <div className="flex gap-2 items-center">
                <Image
                  aria-hidden
                  src="/icons/email.svg"
                  alt="email icon"
                  width={27}
                  height={28}
                />
                <div className="text-xl font-normal font-['Inter'] leading-tight">
                  이메일
                </div>
              </div>
              <div className="w-[480px] h-[72px] px-5 py-3 bg-white rounded-xl border border-[#adb3c0] items-center gap-3 inline-flex">
                <div className="text-[#80899d] text-xl font-normal font-['Inter'] leading-tight">
                  이메일을 입력해주세요.
                </div>
              </div>
            </div>
            <div className="flex-col gap-2 flex">
              <div className="flex gap-2 items-center">
                <Image
                  aria-hidden
                  src="/icons/password.svg"
                  alt="password icon"
                  width={26}
                  height={28}
                />
                <div className="text-xl font-normal font-['Inter'] leading-tight">
                  비밀번호
                </div>
              </div>
              <div className="w-[480px] h-[72px] px-5 py-3 bg-white rounded-xl border border-[#adb3c0] justify-between items-center inline-flex">
                <div className="text-[#80899d] text-xl font-normal font-['Inter'] leading-tight">
                  비밀번호를 입력해주세요.
                </div>
                <Image
                  aria-hidden
                  src="/icons/eyes-closed.svg"
                  alt="eyes_closed icon"
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
          <div className="flex-col items-center gap-5 flex w-full">
            <button className="w-full px-32 py-5 flex bg-blue2 rounded-[20px] justify-center items-center text-white text-[22px] font-medium font-['Inter'] leading-snug">
              로그인
            </button>
            <div className="text-gray5 text-base font-normal font-['Inter']">
              아이디/비밀번호 찾기
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
