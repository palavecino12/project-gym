//Este va a ser el boton donde presionamos para mostrar el formulario
//Aqui tengo que recibir una funcion por props (del padre que es usersection) 
//esa funcion va a ser el encargado de cambiar el estado del formulario

interface props{
    onClick:()=>void;
    showFrom:boolean;
}

const ButtonForm =({onClick,showFrom}:props)=>{
    return (
        <button onClick={onClick}>
            {showFrom ? "Cancelar" : "Añadir"}
        </button>
    )
}

export default ButtonForm;