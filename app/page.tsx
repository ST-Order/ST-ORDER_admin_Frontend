"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Home from "./Home";

interface LogInRequest {
  email: string;
  password: string;
}
export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  return <>{!isLoggedIn ? <LogIn /> : <Home />}</>;
}
const LogIn = () => {
  const baseUrl = "";
  const [visible, setVisible] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<LogInRequest>();

  const onSubmit: SubmitHandler<LogInRequest> = (data) => {
    console.log(data);
    mutate(data);
  };

  const signIn = async (data: LogInRequest) => {
    const response = await axios.post(baseUrl, data);
  };

  const { mutate, isPending, isError, error, isSuccess } = useMutation({
    mutationFn: (data: LogInRequest) => signIn(data),
    onSuccess: () => {
      alert("로그인 되었습니다.");
    },
    onError: (error) => {
      alert("로그인에 실패하였습니다." + error.message);
      setError("root", {
        type: "server",
        message: error.message,
      });
    },
  });

  return (
    <div className="flex items-center justify-center w-full pb-80">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center gap-7"
      >
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
            <input
              {...register("email", {
                required: "이메일은 필수입니다.",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "유효한 이메일 주소를 입력하세요",
                },
              })}
              placeholder="이메일을 입력해주세요."
              className="w-[480px] h-[72px] px-5 py-3 bg-white rounded-xl border border-[#adb3c0] text-xl font-normal leading-tight "
            />
            {errors.email?.message && (
              <div className="text-base font-normal leading-none text-red2">
                {errors.email?.message}
              </div>
            )}
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
            <div className="relative">
              <input
                {...register("password", {
                  required: "비밀번호는 필수입니다.",
                })}
                type={`${visible ? "text" : "password"}`}
                placeholder="비밀번호를 입력해주세요."
                className="w-[480px] h-[72px] px-5 py-3 bg-white rounded-xl border border-[#adb3c0] justify-between items-center inline-flex overflow-hidden text-xl font-normal leading-tight"
              />

              <div className="absolute inset-y-0 right-5 flex items-center">
                <Image
                  aria-hidden
                  src={`${
                    visible ? `/icons/eyes-open.svg` : `/icons/eyes-closed.svg`
                  }`}
                  alt="eyes_closed icon"
                  width={20}
                  height={20}
                  className="z-20 cursor-pointer"
                  onClick={() => {
                    setVisible(!visible);
                    console.log(visible);
                  }}
                />
              </div>
            </div>
            {errors.password?.message && (
              <div className="text-base font-normal leading-none text-red2">
                {errors.password?.message}
              </div>
            )}
          </div>
        </div>
        {/* warning */}
        {errors.root && (
          <div className="text-base font-normal leading-none text-red2">
            가입하지 않은 이메일이거나 잘못된 비밀번호입니다.
          </div>
        )}
        <div className="flex flex-col items-center w-full gap-5">
          <button
            type="submit"
            className="w-full px-32 py-5 flex bg-blue2 rounded-[20px] justify-center items-center text-white text-[22px] font-medium leading-snug"
          >
            {isPending ? "로그인 중..." : "로그인"}
          </button>
          <div
            className="text-base font-normal cursor-pointer text-gray5"
            onClick={() =>
              alert("관리자 측으로 연락해주세요\nContact: 010-1234-5678")
            }
          >
            아이디/비밀번호 찾기
          </div>
        </div>
      </form>
    </div>
  );
};
