import { useParams} from "react-router";
import '../styles/style.css'

function CategoriesTitle(){

    const {idCategory}  = useParams()       
    const excursiones='Las mejores excursiones para conocer Japon!'
    const paquetes='Estas buscando paquetes de viajes? Aqui los mejores!'
    const pases='Te interesa viajar por todo Japon? aprovecha estos pases de transporte!'
    let title=''

    if (idCategory ==='excursiones'){
        title=excursiones
    }else if (idCategory ==='paquetes'){
        title=paquetes
    }else if (idCategory ==='pases'){
        title=pases
    }

    return (
        <>
            <h2 className='text-danger m-2 p-2 title'>{title}</h2>         
        </>
    )
}
export default CategoriesTitle