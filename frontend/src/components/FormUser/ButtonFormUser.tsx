//Este va a ser el boton donde presionamos para mostrar el formulario
//Aqui tengo que recibir una funcion por props (del padre que es usersection) 
//esa funcion va a ser el encargado de cambiar el estado del formulario
import { UserRoundPlus } from "lucide-react"

interface props{
    onClick:()=>void;
}

const ButtonForm =({onClick}:props)=>{
    return (
        <button 
        className="p-4 m-5 bg-white rounded-full shadow-lg hover:outline-1 outline-black/20 hover:-translate-y-1 
        hover:shadow-2xl transition-all duration-200 cursor-pointer active:bg-gray-200 active:shadow-inner"
        onClick={onClick}><UserRoundPlus size={35} strokeWidth={2} color="gray"/></button>
    )
}

export default ButtonForm;