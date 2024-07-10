import Image from "next/image";
import arrow from "../../../public/arrow.svg"
import Link from "next/link";

export default function PostersItem({image, title, description, link}){
    return(
        <div style={{backgroundImage: `url(${image})`}} className={`m-[10px] h-[500px] max-md:h-[300px] bg-cover bg-center rounded-3xl p-10 text-white flex justify-between`}>
            <div>
                <p className="font-semibold">{title}</p>
                <p className="text-[12px] text-slate-300">{description}</p>
            </div>
            <Link href={link} className="bg-white p-4 h-12 rounded-full hover:invert transition-all duration-500">
                <Image className="fill-white" src={arrow} />
            </Link>
        </div>
    );
}