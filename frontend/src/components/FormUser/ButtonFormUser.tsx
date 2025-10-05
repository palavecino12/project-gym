//Este va a ser el boton donde presionamos para mostrar el formulario
//Aqui tengo que recibir una funcion por props (del padre que es usersection) 
//esa funcion va a ser el encargado de cambiar el estado del formulario
import "./buttonFormUser.css"

interface props{
    onClick:()=>void;
}

const ButtonForm =({onClick}:props)=>{
    return (
        <button onClick={onClick}>Añadir</button>
    )
}

export default ButtonForm;