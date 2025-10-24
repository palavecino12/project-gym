interface props{
    onClick:()=>void;
    text:string
}


export const ButtonCardUser = ({onClick,text}:props)=>{
    return (
        <button 
        className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-xl shadow-md
        hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 
        active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-600"
        onClick={onClick}>{text}</button>
    )
}