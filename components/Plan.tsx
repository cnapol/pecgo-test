export default function Plan() {
  interface Plan {
    name: string;
    logo: string;
    style: string;
    type: string;
    subtitle: string;
    price: string;
    cover: string;
    sickness?: string[];
    case?: string[];
  }

  const plan: Plan[] = [
    {
      name: "เมืองไทยประกันภัย",
      logo: "/image/MuangThai.png",
      style: "bg-muangThai",
      type: "แผนการคุ้มครองที่ 1",
      subtitle: "สัตว์เลี้ยงที่ฝังไมโครซิพ",
      price: "13,200",
      cover: "อุบัติเหตุและสุขภาพ",
      sickness: ["อุบัติเหตุ", "โรคผิวหนัง", "เจ็บป่วย", "ฉัดวัคซีน"],
      case: ["งานศพ", "เสียชีวิต", "สูญหาย", "ฉัดวัคซีน"],
    },
    {
      name: "ฟอลคอนประกันภัย",
      logo: "/image/Falcon.png",
      style: "border-[1px] border-falcon",
      type: "แผนการคุ้มครองที่ 4",
      subtitle: "สัตว์เลี้ยงที่ฝังไมโครซิพ",
      price: "13,200",
      cover: "อุบัติเหตุและสุขภาพ",
      sickness: ["อุบัติเหตุ", "โรคผิวหนัง", "ฉัดวัคซีน"],
      case: ["งานศพ", "สูญหาย", "ฉัดวัคซีน"],
    },
    {
      name: "Pet Friend insurance",
      logo: "/image/PetFriend.png",
      style: "border-[1px] border-petFriend",
      type: "แผนการคุ้มครองที่ 2",
      subtitle: "สัตว์เลี้ยงที่ฝังไมโครซิพ",
      price: "300",
      cover: "อุบัติเหตุ",
      case: ["งานศพ", "เสียชีวิต", "สูญหาย"],
    },
    {
      name: "InsurePaws",
      logo: "/image/Insurepaw.png",
      style: "border-[1px] border-insurePaw",
      type: "แผนการคุ้มครองที่ 3",
      subtitle: "สัตว์เลี้ยงที่ฝังไมโครซิพ",
      price: "7,600",
      cover: "สุขภาพ",
      sickness: ["อุบัติเหตุ", "โรคผิวหนัง", "เจ็บป่วย", "ฉัดวัคซีน"],
    },
    {
      name: "Pet Friend insurance",
      logo: "/image/PetFriend.png",
      style: "border-[1px] border-petFriend",
      type: "แผนการคุ้มครองที่ 2",
      subtitle: "สัตว์เลี้ยงที่ฝังไมโครซิพ",
      price: "300",
      cover: "อุบัติเหตุ",
      case: ["งานศพ", "เสียชีวิต", "สูญหาย"],
    },
    {
      name: "InsurePaws",
      logo: "/image/Insurepaw.png",
      style: "border-[1px] border-insurePaw",
      type: "แผนการคุ้มครองที่ 3",
      subtitle: "สัตว์เลี้ยงที่ฝังไมโครซิพ",
      price: "7,600",
      cover: "สุขภาพ",
      sickness: ["อุบัติเหตุ", "โรคผิวหนัง", "เจ็บป่วย", "ฉัดวัคซีน"],
    },
  ];
  const planMb: Plan[] = [
    {
      name: "เมืองไทยประกันภัย",
      logo: "/image/MuangThai.png",
      style: "bg-muangThai",
      type: "แผนการคุ้มครองที่ 1",
      subtitle: "สัตว์เลี้ยงที่ฝังไมโครซิพ",
      price: "13,200",
      cover: "อุบัติเหตุและสุขภาพ",
      sickness: ["อุบัติเหตุ", "โรคผิวหนัง", "เจ็บป่วย", "ฉัดวัคซีน"],
      case: ["งานศพ", "เสียชีวิต", "สูญหาย"],
    },
    {
      name: "เมืองไทยประกันภัย",
      logo: "/image/MuangThai.png",
      style: "bg-muangThai",
      type: "แผนการคุ้มครองที่ 2",
      subtitle: "สัตว์เลี้ยงที่ฝังไมโครซิพ",
      price: "8,200",
      cover: "อุบัติเหตุและสุขภาพ",
      sickness: ["อุบัติเหตุ", "โรคผิวหนัง", "เจ็บป่วย", "ฉัดวัคซีน"],
      case: ["งานศพ", "เสียชีวิต"],
    },
    {
      name: "เมืองไทยประกันภัย",
      logo: "/image/MuangThai.png",
      style: "bg-muangThai",
      type: "แผนการคุ้มครองที่ 3",
      subtitle: "สัตว์เลี้ยงที่ฝังไมโครซิพ",
      price: "4,200",
      cover: "สุขภาพ",
      sickness: ["โรคผิวหนัง", "เจ็บป่วย", "ฉัดวัคซีน"],
    },
    {
      name: "เมืองไทยประกันภัย",
      logo: "/image/MuangThai.png",
      style: "bg-muangThai",
      type: "แผนการคุ้มครองที่ 4",
      subtitle: "สัตว์เลี้ยงที่ฝังไมโครซิพ",
      price: "2,200",
      cover: "อุบัติเหตุ",
      case: ["งานศพ", "เสียชีวิต", "สูญหาย"],
    },
  ];
  return (
    <div className="w-full bg-white">
      <div className="hidden sm:flex">
        <div className="w-full px-[115px] bg-white font-custom">
          <h1 className="text-[50px] font-medium text-gray">
            แผนคุ้มครองทั้งหมด
          </h1>
          <div className="flex w-full h-[2px] mt-[15px] bg-lineGray" />
          <div className="grid grid-cols-2 gap-y-[50px]  mt-[50px] mb-[91px]">
            {plan.map((item, index) => (
              <div
                className={`flex flex-col relative w-[558px] h-[482px] px-[24px] pt-[20px] pb-[37px] rounded-[10px] bg-white shadow-plan ${
                  index % 2 == 0 ? "justify-self-start" : "justify-self-end"
                }`}
              >
                <div className="flex flex-row items-center justify-between">
                  <p className="text-[18px] font-normal text-insuranceName underline underline-offset-1 italic">
                    {item.name}
                  </p>
                  <div
                    className={`flex h-[54px] w-[73px] ${item.style} rounded-[12px] px-[5px] justify-center`}
                  >
                    <img src={item.logo} className="object-contain" />
                  </div>
                </div>
                <p className="text-[35px] font-semibold text-orange leading-[42px] mt-[25px]">
                  {item.type}
                </p>
                <p className="text-[24px] font-normal text-black leading-[29px] mt-[8px]">
                  {item.subtitle}
                </p>
                <p className="text-[16px] font-semibold text-red leading-[25px] my-[18px]">
                  ค่าเบี้ยประกัน{" "}
                  <span className="text-[35px] mx-[10px]">{item.price}</span>{" "}
                  บาท/ปี
                </p>
                <p className="text-[18px] fomt-normal text-insuranceName">
                  ประเภทการคุ้มครอง :{" "}
                  <span className="text-black">{item.cover}</span>
                </p>
                <div className="flex flex-row items-center mt-[30px]">
                  {item.sickness?.map((item, _) => (
                    <div className="text-[16px] font-normal text-black bg-green rounded-[32px] leading-[11px] p-[10px] mr-[10px]">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-row items-center mt-[11px]">
                  {item.case?.map((item, _) => (
                    <div className="text-[16px] font-normal text-black bg-blue rounded-[32px] leading-[11px] p-[10px] mr-[10px]">
                      {item}
                    </div>
                  ))}
                </div>
                <div
                  className={`flex absolute ${
                    index === 0 || index === 1
                      ? "bottom-[37px]"
                      : "bottom-[58px]"
                  }`}
                >
                  <button className="rounded-button bg-headerFocus text-white text-[23px]  font-bold leading-[16px] py-[10px] px-[16px] mr-[20px]">
                    รายละเอียด
                  </button>
                  <button className="text-[13px] font-normal text-detail underline underline-offset-[3px]">
                    เปรียบเทียบ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sm:hidden">
        <div className="mt-[53px] px-[28px] font-custom">
          <h1 className="text-[20px] font-medium text-gray leading-[24px] mb-[32px]">
            แผนคุ้มครองทั้งหมด
          </h1>
          <div className="grid grid-cols-2 gap-y-[20px] gap-x-[10px] justify-end mb-[47px]">
            {planMb.map((item, index) => (
              <div
                className={`flex flex-col relative w-[181px] h-[301px] px-[10px] pt-[10px] pb-[20px] rounded-[10px] bg-white shadow-plan ${
                  index % 2 == 0 ? "justify-self-start" : "justify-self-end"
                }`}
              >
                <div className="flex flex-row items-center justify-between">
                  <p className="text-[11px] font-normal text-insuranceName underline underline-offset-1 italic">
                    {item.name}
                  </p>
                  <div
                    className={`flex h-[26px] w-[36px] ${item.style} rounded-[5px] px-[5px] justify-center`}
                  >
                    <img src={item.logo} className="object-contain" />
                  </div>
                </div>
                <p className="text-[17px] font-semibold text-orange leading-[12px] mt-[15px]">
                  {item.type}
                </p>
                <p className="text-[13px] font-normal text-black leading-[9px] mt-[9px]">
                  {item.subtitle}
                </p>
                <p className="text-[16px] font-semibold text-red leading-[20px] my-[8px]">
                  ค่าเบี้ยประกัน <br />
                  {`${item.price} บาท/ปี`}
                </p>
                <p className="text-[11px] fomt-normal text-insuranceName">
                  ประเภทการคุ้มครอง <br />
                  <span className="text-black ml-[15px]">{item.cover}</span>
                </p>
                <div className="flex flex-wrap items-center mt-[8px]">
                  {item.sickness?.map((item, _) => (
                    <div className="text-[8px] h-[16px] font-normal text-black bg-green rounded-[32px] leading-[6px] py-[5px] px-[10px] mr-[3px] mb-[5px]">
                      {item}
                    </div>
                  ))}
                  {item.case?.map((item, _) => (
                    <div className="text-[8px] h-[16px] font-normal text-black bg-blue rounded-[32px] leading-[6px] py-[5px] px-[10px] mr-[3px] mb-[5px]">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-row absolute bottom-[20px] justify-between">
                  <button className="rounded-button bg-headerFocus text-white text-[10px] font-bold leading-[7px] py-[10px] px-[16px] mr-[40px]">
                    รายละเอียด
                  </button>
                  <button className="text-[8px] font-normal text-detail underline underline-offset-[3px]">
                    เปรียบเทียบ
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
