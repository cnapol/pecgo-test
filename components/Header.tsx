import Image from "next/image";

export default function Header() {
  const headerMenu: string[] = [
    "สัตว์เลี้ยง",
    "ประกันสัตว์เลี้ยง",
    "เกี่ยวกับเรา",
    "ติดต่อ",
    "ช่วยเหลือ",
  ];

  return (
    <div className="w-full">
      <div className="hidden sm:flex">
        <div className="flex flex-row h-[135px] w-full pl-[117px] pr-[115px] bg-white justify-between">
          <div className="block h-[63px] w-[164px] mt-[24px]">
            <img src="/image/logo.png" alt="Pegco" />
          </div>
          <div className="grid grid-flow-col gap-x-[53px] items-center font-custom font-medium">
            {headerMenu.map((item, index) => (
              <div
                key={index}
                className={`${
                  item == "ประกันสัตว์เลี้ยง"
                    ? "text-headerFocus"
                    : "text-headerColor"
                } text-header cursor-pointer`}
              >
                {item}
              </div>
            ))}
          </div>
          <div className="flex flex-col pt-[33px] font-custom font-normal">
            <div className="flex flex-row text-black justify-end">
              <div className="cursor-pointer">เข้าสู่ระบบ</div>
              <div className="mx-[10px]">|</div>
              <div className="cursor-pointer">สมัครสมาชิก</div>
            </div>
            <input
              className="bg-lightGray rounded mt-[7px] p-[8px] font-light text-gray"
              placeholder="🔍 ค้นหา"
            />
          </div>
        </div>
      </div>
      <div className="sm:hidden"/>
    </div>
  );
}
