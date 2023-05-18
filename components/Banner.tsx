export default function Banner() {
  return (
    <div className="w-full">
      <div className="hidden sm:flex">
        <div className="releative w-full h-[436px] items-center justify-between">
          <img
            src="/image/catdog.png"
            alt="Pegco Motto"
            className="w-full h-full object-cover"
          />
          <div className="absolute flex flex-col items-center font-custom w-full bottom-1/2 pt-[137px] text-white">
            <div className="inline-block align-bottom">
              <span className="text-[60px] font-semibold">เพราะ</span>
              <span className="text-[65px] font-bold">สัตว์เลี้ยง</span>
              <span className="text-[60px] font-semibold">ไม่ใช่แค่</span>
              <span className="text-[65px] font-bold">สัตว์เลี้ยง</span>
            </div>
            <div className="inline-block align-bottom">
              <span className="text-[80px] font-bold">แต่เขาคือ...</span>
              <span className="text-[100px] font-bold">ครอบครัว</span>
            </div>
          </div>
        </div>
      </div>
      <div className="sm:hidden bg-white">
        <div className="relative h-[250px]">
          <div className="releative w-full h-[185px] items-center justify-between rounded-b-[30px] bg-white">
            <img
              src="/image/catdog.png"
              alt="Pegco Motto"
              className="w-full h-full object-cover rounded-b-[30px]"
            />
            <div className="absolute flex flex-col items-center font-custom w-full top-[59px] text-white">
              <div className="inline-block align-bottom">
                <span className="text-[24px] font-normal">เพราะ</span>
                <span className="text-[25px] font-bold">สัตว์เลี้ยง</span>
                <span className="text-[24px] font-normal">ไม่ใช่แค่</span>
                <span className="text-[25px] font-bold">สัตว์เลี้ยง</span>
              </div>
              <div className="inline-block align-bottom">
                <span className="text-[24px] font-normal">แต่เขาคือ...</span>
                <span className="text-[25px] font-bold">ครอบครัว</span>
              </div>
            </div>
          </div>
          <div className="absolute top-[154px] w-full flex flex-row px-[28px] place-content-between	 font-custom">
            <input
              className="bg-searchMobile h-[52px] mr-[6px] w-full rounded-[10px] pl-[13px] pr-[6px] font-custom text-[18px] font-light"
              placeholder="🔍 ค้นหา"
            />
            <div className="flex flex-col h-[52px] w-[66px] bg-headerFocus text-white rounded-[10px] justify-center items-center text-[10px]">
              <svg
                width="19"
                height="19"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="stroke-1"
              >
                <path
                  d="M3.33331 2H24.6664C25.4028 2 25.9997 2.59684 25.9997 3.33314L26 5.44753C26.0001 5.80123 25.8596 6.14044 25.6095 6.39053L17.0569 14.9426C16.8069 15.1926 16.6664 15.5318 16.6664 15.8854V24.2919C16.6664 25.1594 15.8512 25.7959 15.0098 25.5855L12.3432 24.9188C11.7496 24.7704 11.3332 24.2371 11.3332 23.6252V15.8854C11.3332 15.5318 11.1927 15.1926 10.9427 14.9426L2.39051 6.39045C2.14046 6.14041 2 5.80127 2 5.44766V3.33331C2 2.59695 2.59694 2 3.33331 2Z"
                  stroke="white"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              ตัวกรอง
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
