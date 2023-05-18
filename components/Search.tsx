export default function Search() {
  const menu: string[] = [
    "ค่าเบี้ยประกัน",
    "ประเภทการคุ้มครอง",
    "การคุ้มครอง",
    "ประเภทสัตว์เลี้ยง",
    "แบรนด์",
  ];

  return (
    <div className="pt-[78px] px-[115px] pb-[87px] w-full">
      <input
        className="bg-searchGray h-[72px] w-full rounded-[51px] px-[28px] font-custom text-[16px]"
        placeholder="🔍 ค้นหา"
      />
      <div className="flex flex-row mt-[57px] justify-between">
        {menu.map((item, _) => (
          <div className="flex relative">
            <select
              name={item}
              id={item}
              className="appearance-none bg-menuGray h-[40px] pl-[19px] pr-[64px] rounded-[20px] font-custom text-[20px]"
            >
              <option value={item}>{item}</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
            <svg
              width="22"
              height="12"
              viewBox="0 0 22 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute top-[15px] right-[15px]"
            >
              <path
                d="M1 1L11 11L21 1"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
}
