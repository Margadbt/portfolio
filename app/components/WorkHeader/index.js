export default function WorkHeader({title, description}){
    return(
        <div className="mt-10">
            <div>
                <p className="font-semibold text-4xl">{title}</p>
                <p>{description}</p>
            </div>
            <div className=" border-b-[0.5px] border-solid border-header my-10"></div>
        </div>
    );
}