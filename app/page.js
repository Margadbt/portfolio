import Image from "next/image";
import Information from "./components/Information";
import BannerImage from "../public/me.JPG"

export default function Home() {
  return (
    <main className="">
      <div className="flex max-md:flex-col-reverse">
        <Information />
        <Image className="w-img md:min-w-img md:max-w-img object-cover rounded-3xl m-10px max-md:h-64 max-md:w-screen" src={BannerImage} />
      </div>
    </main>
  );
}