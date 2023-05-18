import Header from "@/components/Header";
import Banner from "@/components/Banner";
import Information from "@/components/Information";
import BannerBelow from "@/components/BannerBelow";
import Search from "@/components/Search";
import Plan from "@/components/Plan";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center">
      <Header/>
      <Banner/>
      <Information/>
      <BannerBelow/>
      <Search/>
      <Plan/>
    </div>
  );
}
