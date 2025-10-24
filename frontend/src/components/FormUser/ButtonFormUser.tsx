//Este va a ser el boton donde presionamos para mostrar el formulario
//Aqui tengo que recibir una funcion por props (del padre que es usersection) 
//esa funcion va a ser el encargado de cambiar el estado del formulario

interface props{
    onClick:()=>void;
    text:string;
}

const ButtonForm =({onClick,text}:props)=>{
    return (
        <button 
        className="px-5 py-2.5 bg-blue-600 text-white font-semibold rounded-full shadow-md
        hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300 
        active:scale-95 dark:bg-blue-500 dark:hover:bg-blue-600 cursor-pointer"
        onClick={onClick}>{text}</button>
    )
}

export default ButtonForm;