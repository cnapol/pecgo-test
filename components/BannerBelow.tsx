export default function BannerBelow() {
  return (
    <div className="flex relative h-[592px] w-full">
      <img src="/image/cat.png" className="object-contain" />
      <img src="/image/Rectangle.png" className="absolute right-0" />
      <div className="absolute flex flex-col w-[692px] right-[53px] top-[101px] items-center">
        <div className="flex flex-row">
          <div className="flex w-[192px] bg-white rounded-[50px] p-[10px] justify-center">
            <img
              src="image/Insurepaw.png"
              className="object-contain h-[38px]"
            />
          </div>
          <p className="font-custom text-white text-[33px] font-semibold italic mx-[13px] self-end">
            X
          </p>
          <div className="flex w-[196px] bg-white rounded-[50px] p-[10px] justify-center">
            <img src="image/logo.png" className="object-contain h-[38px]" />
          </div>
        </div>
        <div className="mt-[35px] text-center">
          <p className="font-custom text-[33px] text-white font-medium text-center">
            <span className="text-[40px] font-semibold">สิทธิพิเศษ</span>
            สำหรับคนที่ซื้อประกันใน Pecgo
            <br />
            ได้รับส่วนลดพิเศษจาก Insurepaws ในราคาพิเศษ
          </p>
          <p className="font-sriracha text-[50px] font-normal text-brown">
            เพียง 7,000 บาท/ปี
          </p>
          <p className="font-custom text-[33px] font-normal text-white">
            จากปกติ 7,500 บาท/ปี
          </p>
        </div>
        <button className="h-[66px] w-[240px] mt-[30px] bg-white rounded-button shadow-button font-custom text-brown text-[23px] font-bold">
          สมัครแผนคุ้มครอง
        </button>
      </div>
    </div>
  );
}
