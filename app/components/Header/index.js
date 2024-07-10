import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-between p-3 pt-5 font-semibold text-sm">
            <div className="flex justify-center items-center">
                <div className="w-5 h-5 bg-purple-600 rounded-full mr-1"></div>
                <Link href="/">Margad</Link>
            </div>
            <div className="flex space-x-12">
                <a href="/" className=" cursor-pointer">Home</a>
                <a href="#works" className="text-slate-400 cursor-pointer">Works</a>
                <a href="#contact" className="text-slate-400 cursor-pointer">Contact</a>
            </div>
        </div>
    );
}