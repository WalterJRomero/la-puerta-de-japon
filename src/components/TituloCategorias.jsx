import { useParams} from "react-router";

function TituloCategorias(){

    const {idCategoria}  = useParams()       
    const excursiones='Las mejores excursiones para conocer Japon!'
    const paquetes='Estas buscando paquetes de viajes? Aqui los mejores!'
    const pases='Te interesa viajar por todo Japon? aprovecha estos pases de transporte!'
    let cartel=''

    if (idCategoria ==='excursiones'){
        cartel=excursiones
    }else if (idCategoria ==='paquetes'){
        cartel=paquetes
    }else if (idCategoria ==='pases'){
        cartel=pases
    }

    return (
        <>
            <h2 className='text-danger m-2 p-2'>{cartel}</h2>         
        </>
    )
}
export default TituloCategorias



