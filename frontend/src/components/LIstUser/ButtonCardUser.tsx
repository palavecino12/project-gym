interface props{
    onClick:()=>void;
    children:React.ReactNode
}


export const ButtonCardUser = ({onClick,children}:props)=>{
    return (
        <button 
        className="p-2 rounded-2xl bg-white hover:drop-shadow-lg hover:-translate-y-1 hover:outline-1 outline-black/20 transition-all duration-200
        active:bg-gray-200 active:shadow-inner cursor-pointer"
        onClick={onClick}>
        {children}
        </button>
    )
}