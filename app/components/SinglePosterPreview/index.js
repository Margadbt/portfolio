import Image from "next/image";

export default function SinglePosterPreview({imageSrc}){
    return(
        <div >          
            <Image className="rounded-2xl hover:scale-[180%] transition-all duration-500 cursor-pointer hover:shadow-2xl" width={400} height={400} src={imageSrc} />
        </div>
    );
}