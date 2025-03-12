"use client";

import { RegisterNotice } from "@/types/types";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";

export default function Page() {
  const [category, setCategory] = useState<boolean>(false);
  const [selectedCat, setSelectedCat] = useState<string>();
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterNotice>();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const onSubmit: SubmitHandler<RegisterNotice> = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col w-full gap-5 px-10 overflow-y-scroll lg:px-20 py-7"
    >
      <div className="flex flex-col w-full gap-7">
        {/* title */}
        <div className="text-black text-4xl font-bold font-['Inter'] leading-9 ">
          공지사항 등록
        </div>
        {/* form */}
        <div className="flex flex-col items-start justify-start gap-7">
          {/* 1st row */}
          <div className="flex items-start w-full gap-10 lg:gap-40 lg:w-2/3">
            <div className="flex flex-col items-start justify-start flex-1 gap-4">
              <label className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
                제목
              </label>
              <input
                {...register("title", { required: true })}
                placeholder="공지사항의 제목을 입력해주세요."
                className="px-4 py-3 bg-[#ecedf0] rounded-xl border border-gray3 text-xl font-normal font-['Inter'] leading-tight w-full"
              />
            </div>
            <div className="flex flex-col items-start justify-start gap-4">
              <label className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
                노출 기간
              </label>
              <div className="flex items-center gap-6 wrap max-w-96">
                <div className="flex items-center gap-2">
                  <input
                    {...register("visibilityPeriod", { required: true })}
                    type="radio"
                    className="w-5 h-5"
                    value="day"
                  />
                  <div className="text-black text-xl font-normal font-['Inter'] leading-tight">
                    하루(24시간)
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    {...register("visibilityPeriod", { required: true })}
                    type="radio"
                    className="w-5 h-5"
                    value="week"
                  />
                  <div className="text-black text-xl font-normal font-['Inter'] leading-tight">
                    일주일(7일)
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    {...register("visibilityPeriod", { required: true })}
                    type="radio"
                    className="w-5 h-5"
                    value="month"
                  />
                  <div className="text-black text-xl font-normal font-['Inter'] leading-tight">
                    한 달(30일)
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 카테고리 */}
          <div className="flex flex-col items-start justify-start gap-4">
            <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
              카테고리
            </div>
            <Controller
              name="category"
              control={control}
              rules={{ required: "카테고리를 선택해주세요" }}
              render={({ field }) => (
                <div className="relative w-96">
                  <div
                    onClick={() => {
                      setCategory(!category);
                    }}
                    className="flex items-center justify-between w-full px-4 py-3 border cursor-pointer bg-gray1 rounded-xl border-gray4"
                  >
                    <div
                      className={`${
                        !field.value ? "text-gray5" : "text-black"
                      }  text-xl font-normal font-['Inter'] leading-tight`}
                    >
                      {!field.value
                        ? "공지사항의 유형을 선택해주세요."
                        : field.value}
                    </div>
                    <Image
                      src="/icons/dropdown_down.svg"
                      width={14}
                      height={14}
                      alt=""
                    />
                  </div>
                  {category && (
                    <div className="absolute left-0 z-10 w-full mt-1 top-full">
                      <div className="w-full rounded-xl border border-[#adb3c0] flex-col bg-white overflow-hidden">
                        {["신메뉴 출시", "품절 안내"].map((cat, index, arr) => {
                          let borderClass = "";
                          if (index === arr.length - 1) {
                            borderClass = "hover:border-t";
                          } else if (index === 0) {
                            borderClass = "border-b";
                          } else {
                            borderClass = "border-b hover:border-t";
                          }

                          return (
                            <div
                              key={index}
                              onClick={() => {
                                field.onChange(cat);
                                setCategory(false);
                              }}
                              className={`cursor-pointer w-full py-3 px-6 ${borderClass} hover:border-[#adb3c0] border-[#dee1e6] bg-[#f9f9fa] hover:bg-[#dee1e6] text-xl font-normal font-['Inter'] leading-tight`}
                            >
                              {cat}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              )}
            />
          </div>
          {/* 사진 */}
          <div className="flex flex-col items-start justify-center h-40 gap-4">
            <div className="flex items-center justify-start gap-3">
              <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
                사진(선택)
              </div>
              <div className="text-gray5 text-base font-normal font-['Inter'] leading-none">
                이해를 도울 사진이 있다면 등록해주세요.
              </div>
            </div>
            <label
              htmlFor="image"
              className="border-gray3 bg-gray2 w-[155px] h-[120px] border flex justify-center items-center rounded-xl cursor-pointer overflow-hidden"
            >
              {!imagePreview ? (
                <Image
                  src="/icons/plus_black.svg"
                  width={20}
                  height={20}
                  alt=""
                />
              ) : (
                <Image
                  src={imagePreview}
                  alt="미리보기"
                  className="object-cover w-full h-full"
                  width={155}
                  height={120}
                  layout="responsive"
                />
              )}
              <input
                type="file"
                className="hidden"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
              />
            </label>
          </div>
          {/* 4th row */}
          <div className="flex flex-col items-start justify-center w-2/3 gap-4">
            <div className="flex items-center justify-start gap-3">
              <div className="text-black text-2xl font-semibold font-['Inter'] leading-normal">
                내용
              </div>
              <div className="text-gray5 text-base font-normal font-['Inter'] leading-none">
                (0/275자)
              </div>
            </div>
            <textarea
              {...register("content", { required: true })}
              maxLength={275}
              placeholder="공지사항의 내용을 입력해 주세요."
              className="px-6 py-5 h-44 bg-[#ecedf0] rounded-xl border border-gray3 text-xl font-normal font-['Inter'] leading-tight w-full"
            />
          </div>
        </div>
      </div>
      {errors.category && (
        <div className="text-base font-normal leading-none text-red2">
          카테고리 선택은 필수입니다.
        </div>
      )}
      <div className="flex items-center justify-center gap-4">
        <button className="w-[268px] py-4 bg-red1 rounded-2xl text-[22px] font-medium leading-snug text-white text-center">
          취소
        </button>
        <button
          type="submit"
          className="w-[268px] py-4 bg-blue2 rounded-2xl text-[22px] font-medium leading-snug text-white text-center"
        >
          등록완료
        </button>
      </div>
    </form>
  );
}
