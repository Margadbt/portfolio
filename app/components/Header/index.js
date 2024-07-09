export default function Header() {
    return (
        <div className="flex justify-between py-3 font-medium text-sm">
            <div className="flex justify-center items-center">
                <div className="w-5 h-5 bg-purple-600 rounded-full mr-1"></div>
                <p>Margad</p>
            </div>
            <div className="flex space-x-4">
                <p>Home</p>
                <p>Works</p>
                <p>Contact</p>
            </div>
        </div>
    );
}