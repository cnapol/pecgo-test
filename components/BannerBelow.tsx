export default function BannerBelow() {
  return (
    <div className="flex relative sm:h-[592px] h-[205px] w-full">
      <img src="/image/cat.png" className="object-contain object-left sm:-translate-x-0 -translate-x-10" />
      <img src="/image/Rectangle.png" className="absolute right-0 sm:h-[592px] h-[205px]" />
      <div className="absolute flex flex-col sm:w-[692px] w-[231px] sm:right-[53px] right-[12px] sm:top-[101px] top-[16px] items-center">
        <div className="flex flex-row">
          <div className="flex sm:w-[192px] w-[71px] bg-white rounded-[50px] sm:p-[10px] p-[4px] justify-center">
            <img
              src="image/Insurepaw.png"
              className="object-contain sm:h-[38px] h-[13px]"
            />
          </div>
          <p className="font-custom text-white sm:text-[33px] text-[11px] font-semibold italic sm:mx-[13px] mx-[8px] self-end">
            X
          </p>
          <div className="flex sm:w-[196px] w-[71px] bg-white rounded-[50px] sm:p-[10px] p-[4px] justify-center">
            <img
              src="image/logo.png"
              className="object-contain sm:h-[38px] h-[13px]"
            />
          </div>
        </div>
        <div className="sm:mt-[35px] mt-[18px] text-center">
          <p className="font-custom sm:text-[33px] text-[11px] text-white font-medium text-center">
            <span className="sm:text-[40px] text-[14px] font-semibold">
              สิทธิพิเศษ
            </span>
            สำหรับคนที่ซื้อประกันใน Pecgo
            <br />
            ได้รับส่วนลดพิเศษจาก Insurepaws ในราคาพิเศษ
          </p>
          <p className="font-sriracha sm:text-[50px] text-[20px] font-normal text-brown">
            เพียง 7,000 บาท/ปี
          </p>
          <p className="font-custom sm:text-[33px] text-[11px] font-normal text-white">
            จากปกติ 7,500 บาท/ปี
          </p>
        </div>
        <button className="sm:h-[66px] h-[29px] sm:w-[240px] w-[130px] sm:mt-[30px] mt-[15px] bg-white rounded-button shadow-button font-custom text-brown sm:text-[23px] text-[12px] font-bold">
          สมัครแผนคุ้มครอง
        </button>
      </div>
    </div>
  );
}
