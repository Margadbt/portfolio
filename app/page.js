import Image from "next/image";
import Information from "./components/Information";
import BannerImage from "../public/me.JPG"
import Item from "./components/Item";

export default function Home() {
  return (
    <main className="">
      <div className="flex max-md:flex-col-reverse">
        <Information />
        <Image className="w-img md:min-w-img md:max-w-img object-cover rounded-3xl m-10px max-md:h-64 max-md:w-auto" src={BannerImage} />
      </div>

      
      <section id="#works" className="grid grid-cols-2 max-md:grid-cols-1">
        <Item image={"/poster.png"} title={"Social Media Poster Design"} description={"Social Media Content Poster Designs"} link={"/works/posters"} />
        <Item image={"/poster.png"} title={"Social Media Poster Design"} description={"Social Media Content Poster Designs"} link={"/works/posters"} />
        <Item image={"/poster.png"} title={"Social Media Poster Design"} description={"Social Media Content Poster Designs"} link={"/works/posters"} />
      </section>
    </main>
  );
}