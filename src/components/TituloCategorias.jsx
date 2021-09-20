import { useParams} from "react-router";

function TituloCategorias(){
    const {idCategoria}  = useParams()    

    return (
        <>
            <h2 className='text-danger m-1 p-1'>Estas en la categoría: {idCategoria}</h2>             
        </>
    )
}
export default TituloCategorias



