import Image from "next/image";

export default function Banner() {
  return (
    <div className="releative w-full h-[436px] items-center justify-between">
      <img
        src="/image/catdog.png"
        alt="Pegco Motto"
        className="w-full h-full object-cover"
      />
      <div className="absolute flex flex-col items-center font-custom w-full bottom-1/2 pt-[137px] ">
        <div className="inline-block align-bottom">
          <span className="text-[60px] font-semibold">เพราะ</span>
          <span className="text-[65px] font-bold">สัตว์เลี้ยง</span>
          <span className="text-[60px] font-semibold">ไม่ใช่แค่</span>
          <span className="text-[65px] font-bold">สัตว์เลี้ยง</span>
        </div>
        <div className="inline-block align-bottom">
          <span className="text-[80px] font-bold">แต่เขาคือ...</span>
          <span className="text-[80px] font-bold">ครอบครัว</span>
        </div>
      </div>
    </div>
  );
}
