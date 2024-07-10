import fb from '../../../public/fb-icon.svg'
import email from '../../../public/email-icon.svg'
import Image from "next/image";


export default function Information() {
    return (
        <div className="bg-[url('/information_bg.png')] h-[500px] max-md:h-[350px] bg-cover bg-center flex justify-between flex-col rounded-3xl p-10 m-10px">
            <div>
                <p className=" font-bold text-[40px] max-md:text-xl leading-10">Hello, I’m Abo, a product Designer With 7 years of experience.</p>
                <p className="mt-12 max-md:mt-2 max-md:text-sm">I care a lot about using design for positive impact. and enjoy creating user-centric, delightful, and human experiences.</p>
            </div>
            <div className="flex gap-3 font-semibold text-sm">
                <button className="bg-[#1D1D1D] max-md:px-6 px-12 py-4 rounded-full text-white hover:bg-slate-600 transition-all duration-500">Contact me</button>
                <button className='bg-white px-4 rounded-full hover:bg-blue-400 transition-all duration-500'><Image src={fb} /></button>
                <button className='bg-white px-4 rounded-full hover:bg-yellow-400 transition-all duration-500'><Image src={email} /></button>
            </div>
        </div>
    );
}