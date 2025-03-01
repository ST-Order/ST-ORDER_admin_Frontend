"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex items-center justify-center w-full pb-80">
      <div className="flex flex-col justify-center gap-7">
        <div className="text-4xl font-bold leading-9">로그인</div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                aria-hidden
                src="/icons/email.svg"
                alt="email icon"
                width={27}
                height={28}
              />
              <div className="text-xl font-normal leading-tight">이메일</div>
            </div>
            <div className="w-[480px] h-[72px] px-5 py-3 bg-white rounded-xl border border-[#adb3c0] items-center gap-3 inline-flex">
              <div className="text-[#80899d] text-xl font-normal leading-tight">
                이메일을 입력해주세요.
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Image
                aria-hidden
                src="/icons/password.svg"
                alt="password icon"
                width={26}
                height={28}
              />
              <div className="text-xl font-normal leading-tight">비밀번호</div>
            </div>
            <div className="w-[480px] h-[72px] px-5 py-3 bg-white rounded-xl border border-[#adb3c0] justify-between items-center inline-flex">
              <div className="text-[#80899d] text-xl font-normal leading-tight">
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
        {/* warning */}
        <div className="text-base font-normal leading-none text-red2">
          가입하지 않은 이메일이거나 잘못된 비밀번호입니다.
        </div>
        <div className="flex flex-col items-center w-full gap-5">
          <button className="w-full px-32 py-5 flex bg-blue2 rounded-[20px] justify-center items-center text-white text-[22px] font-medium leading-snug">
            로그인
          </button>
          <div
            className="text-base font-normal cursor-pointer text-gray5"
            onClick={() => alert("아이디/비밀번호 찾기")}
          >
            아이디/비밀번호 찾기
          </div>
        </div>
      </div>
    </div>
  );
}
