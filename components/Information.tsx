export default function Information() {
  interface Company {
    logo: string;
    style: string;
    styleMb: string;
  }
  interface Data {
    logo: string;
    type: string;
    subtitle: string;
    price: string;
  }
  const company: Company[] = [
    {
      logo: "/image/Insurepaw.png",
      style:
        "flex p-[20px] h-[258px] w-[258px] border-[1px] border-insurePaw rounded-full",
      styleMb:
        "flex p-[7px] h-[102px] w-[102px] border-[1px] border-insurePaw rounded-full",
    },
    {
      logo: "/image/PetFriend.png",
      style:
        "flex p-[24px] h-[258px] w-[258px] border-[1px] border-petFriend rounded-full",
      styleMb:
        "flex p-[9px] h-[102px] w-[102px] border-[1px] border-petFriend rounded-full",
    },
    {
      logo: "/image/MuangThai.png",
      style: "flex p-[50px] h-[258px] w-[258px] bg-muangThai rounded-full",
      styleMb: "flex p-[19px] h-[102px] w-[102px] bg-muangThai rounded-full",
    },
    {
      logo: "/image/Falcon.png",
      style: "flex h-[258px] w-[258px] border-falcon rounded-full",
      styleMb: "flex h-[102px] w-[102px] border-falcon rounded-full",
    },
  ];
  const data: Data[] = [
    {
      logo: "/image/Insurepaw.png",
      type: "แผนคุ้มครองที่ 4",
      subtitle: "( แบบรายเดือน )",
      price: "625",
    },
    {
      logo: "/image/Falcon2.png",
      type: "แผนคุ้มครองที่ 1",
      subtitle: "( แบบมีไม่มีไมโครชิพ )",
      price: "3,200",
    },
    {
      logo: "/image/PetFriend.png",
      type: "แผนคุ้มครองที่ 2",
      subtitle: "( สุนัขพันธ์ุเล็ก )",
      price: "14,500",
    },
  ];

  return (
    <div className="w-full bg-white">
      <div className="hidden sm:flex">
        <div className="flex flex-col h-[1455px] pt-[61px] pl-[117px] pr-[115px] w-full bg-white font-custom">
          <div className="flex flex-col items-center">
            <h1 className="text-[50px] font-medium text-orange mb-[10px]">
              เลือกทำประกันสัตว์เลี้ยงเรา
            </h1>
            <span className="text-[30px] px-[12px] text-center font-normal text-black align-middle">
              เรารวบร่วมประกันสัตว์เลี้ยงจากทุกแบรนด์เพื่อให้ง่ายต่อการตัดสินใจของเหล่าคนรักสัตว์ทุกคน
              ไร้กังวลเมื่อสัตว์เลี้ยงแสนรักของ เจ็บป่วย หรือเกิดอุบัติเหตุ
              คุ้มค่าคุ้มราคา
            </span>
            <div className="flex justify-between w-full mt-[92px] mb-[148px]">
              {company.map((item, _) => (
                <div className={item.style}>
                  <img src={item.logo} className="object-contain" />
                </div>
              ))}
            </div>
          </div>
          <h1 className="text-[50px] font-medium text-gray">
            แผนคุ้มครองยอดนิยม
          </h1>
          <div className="flex w-full h-[2px] mt-[15px] bg-lineGray" />
          <div className="flex justify-between w-full mt-[66px]">
            {data.map((item, _) => (
              <div className="overflow-hidden h-[374px] w-[357px] rounded-m shadow-3xl bg-white">
                <div className="flex h-[84px] pt-[22px] pb-[20px] rounded-t-m shadow-top object-cover justify-center">
                  <img src={item.logo} className="object-contain" />
                </div>
                <div className="flex flex-col h-[290px] items-center pt-[30px] pb-[23px] justify-between">
                  <div className="flex flex-col items-center">
                    <h1 className="text-[33px] font-semibold leading-[40px] text-orange">
                      {item.type}
                    </h1>
                    <p className="text-[20px] font-light text-darkGray">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[20px] font-normal text-gray1">
                      ค่าเบี้ยประกัน
                    </span>
                    <div>
                      <span className="text-[45px] font-semibold text-red leading-[55px]">
                        {item.price}
                      </span>
                      <span className="text-[25px] font-semibold text-red">
                        {" "}
                        บาท/เดือน
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full px-[44px] self-end justify-between">
                    <button className="w-[133px] h-[38px] rounded-button bg-headerFocus text-white text-[23px] font-bold">
                      สมัคร
                    </button>
                    <button className="text-[13px] font-normal text-gray2 underline underline-offset-[3px]">
                      รายละเอียดเพิ่มเติม
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="font-custom">
          <h1 className="text-[20px] px-[28px] font-medium text-gray mb-[19px]">
            แผนคุ้มครองยอดนิยม
          </h1>
          <div className="overflow-auto px-[28px] pt-[30px] h-[300px] mb-[23px] grid grid-rows-1 grid-flow-col gap-x-[19px]">
            {data.map((item, _) => (
              <div className="overflow-hidden h-[232px] w-[203px] rounded-[17px] shadow-3xl bg-white">
                <div className="flex h-[47px] py-[12px] rounded-t-[17px] shadow-top object-cover justify-center">
                  <img src={item.logo} className="object-contain" />
                </div>
                <div className="flex flex-col h-[185px] items-center pt-[20px] pb-[15px] justify-between">
                  <div className="flex flex-col items-center">
                    <h1 className="text-[24px] font-semibold leading-[29px] text-orange">
                      {item.type}
                    </h1>
                    <p className="text-[18px] font-light text-darkGray">
                      {item.subtitle}
                    </p>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[14px] font-normal text-gray1">
                      ค่าเบี้ยประกัน
                    </span>
                    <div>
                      <span className="text-[30px] font-semibold text-red leading-[21px]">
                        {item.price}
                      </span>
                      <span className="text-[14px] font-semibold text-red">
                        {" "}
                        บาท/เดือน
                      </span>
                    </div>
                  </div>
                  <div className="flex w-full px-[22px] self-end justify-between">
                    <button className="w-[84px] h-[24px] rounded-button bg-headerFocus text-white text-[18px] font-bold">
                      สมัคร
                    </button>
                    <button className="text-[11px] font-normal text-gray2 underline underline-offset-[3px]">
                      รายละเอียด
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <h1 className="text-[20px] px-[28px] font-medium text-gray mb-[32px]">
            ค้นหาแผนคุ้มครองจากแบรนด์
          </h1>
          <div className="overflow-x-auto h-[115px] px-[28px] mb-[44px] grid grid-rows-1 grid-flow-col gap-x-[19px]">
            {company.map((item, _) => (
              <div className={item.styleMb}>
                <img src={item.logo} className="object-contain" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
