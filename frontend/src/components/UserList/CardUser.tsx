//Aca vamos a crear un componente que reciba por props los datos del usuario y cree una tarjeta del usuario
//Este componente mas adelante tendra los botones para modificar o eliminar el usuario
interface props {
    name:string,
    lastName:string,
    dni:number,    
}

const CardUser = ({name,lastName,dni}:props) =>{

    return(
        <div>{name} {lastName} - {dni}</div>
    )
}

export default CardUser;