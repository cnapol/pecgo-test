export default function Plan() {
  interface Plan {
    name: string,
    logo: string,
    style: string,
    type: string,
    subtitle: string,
    price: string,
    cover: string,
    sickness?: string[],
    case?: string[],
  }

  const plan: Plan[] = [
    {
      name: "เมืองไทยประกันภัย",
      logo: "/image/MuangThai.png",
      style: 'bg-muangThai',
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
      style: 'border-[1px] border-falcon',
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
      style: 'border-[1px] border-petFriend',
      type: "แผนการคุ้มครองที่ 2",
      subtitle: "สัตว์เลี้ยงที่ฝังไมโครซิพ",
      price: "300",
      cover: "อุบัติเหตุ",
      case: ["งานศพ", "เสียชีวิต", "สูญหาย"],
    },
    {
      name: "InsurePaws",
      logo: "/image/Insurepaw.png",
      style: 'border-[1px] border-insurePaw',
      type: "แผนการคุ้มครองที่ 3",
      subtitle: "สัตว์เลี้ยงที่ฝังไมโครซิพ",
      price: "7,600",
      cover: "สุขภาพ",
      sickness: ["อุบัติเหตุ", "โรคผิวหนัง", "เจ็บป่วย", "ฉัดวัคซีน"],
    },
    {
      name: "Pet Friend insurance",
      logo: "/image/PetFriend.png",
      style: 'border-[1px] border-petFriend',
      type: "แผนการคุ้มครองที่ 2",
      subtitle: "สัตว์เลี้ยงที่ฝังไมโครซิพ",
      price: "300",
      cover: "อุบัติเหตุ",
      case: ["งานศพ", "เสียชีวิต", "สูญหาย"],
    },
    {
      name: "InsurePaws",
      logo: "/image/Insurepaw.png",
      style: 'border-[1px] border-insurePaw',
      type: "แผนการคุ้มครองที่ 3",
      subtitle: "สัตว์เลี้ยงที่ฝังไมโครซิพ",
      price: "7,600",
      cover: "สุขภาพ",
      sickness: ["อุบัติเหตุ", "โรคผิวหนัง", "เจ็บป่วย", "ฉัดวัคซีน"],
    },
  ];
  return (
    <div className="w-full px-[115px] font-custom">
      <h1 className="text-[50px] font-medium text-gray">แผนคุ้มครองทั้งหมด</h1>
      <div className="flex w-full h-[2px] mt-[15px] bg-lineGray" />
      <div className="grid grid-cols-2 gap-y-[50px] justify-end mt-[50px] mb-[91px]">
        {plan.map((item, index) => (
          <div className={`flex flex-col relative w-[558px] h-[482px] px-[24px] pt-[20px] pb-[37px] rounded-[10px] bg-white shadow-plan ${index%2 == 0 ? "justify-self-start" : "justify-self-end"}`}>
            <div className="flex flex-row items-center justify-between">
              <p className="text-[18px] font-normal text-insuranceName underline underline-offset-1 italic">
                {item.name}
              </p>
              <div className={`flex h-[54px] w-[73px] ${item.style} rounded-[12px] px-[5px] justify-center`}>
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
            <div className={`flex absolute ${index === 0 || index === 1 ? "bottom-[37px]" : "bottom-[58px]"}`}>
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
  );
}
