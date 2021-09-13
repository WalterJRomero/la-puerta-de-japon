import React from "react"
import ItemCount from "./ItemCount"
import {useState, useEffect} from "react"
import {Spinner,Button} from "react-bootstrap"
import ItemList from "./ItemList"

const datos = [
{id:1,title:'Tokyo 10 días',description:'.',price:'1050',pictureUrl:'https://i.postimg.cc/k5zL2Ry8/ciudades-tokyo1.jpg'},
{id:2,title:'Tokyo 15 días',description:'.',price:'1550',pictureUrl:'https://i.postimg.cc/7ZBFyWGK/ciudades-tokyo2.jpg'},
{id:3,title:'Tokyo 20 días',description:'.',price:'2050',pictureUrl:'https://i.postimg.cc/jjLGq4yt/ciudades-tokyo3.jpg'},
{id:4,title:'Tokyo y Kyoto 10 días',description:'.',price:'1254',pictureUrl:'https://i.postimg.cc/130Fp99j/ciudades-kyoto1.jpg'},
{id:5,title:'Tokyo y Kyoto 15 días',description:'.',price:'1754',pictureUrl:'https://i.postimg.cc/FRS83FP6/ciudades-kyoto2.jpg'},
{id:6,title:'Tokyo y Kyoto 20 días',description:'.',price:'2254',pictureUrl:'https://i.postimg.cc/6p6kgX37/ciudades-kyoto3.jpg'},
{id:7,title:'Tokyo, Kyoto y Nara 10 días',description:'.',price:'1276',pictureUrl:'https://i.postimg.cc/mZXCC3H0/ciudades-nara1.jpg'},
{id:8,title:'Tokyo, Kyoto y Nara 15 días',description:'.',price:'1776',pictureUrl:'https://i.postimg.cc/pr6jvxv2/ciudades-nara2.jpg'},
{id:9,title:'Tokyo, Kyoto y Nara 20 días',description:'.',price:'2276',pictureUrl:'https://i.postimg.cc/NfKT4y8L/ciudades-nara3.jpg'}
];

//-----------------------------------------------------------------------------------------------------------------------
function ItemListContainer({greeting}) {

    const [stock,setStock] = useState(5)    
    const [initial,setInitial] = useState(1)
    const [productos,setProductos] =useState([])
    const [loading,setLoading]=useState(true)
    
//funcion asincronica-------------------------------------
    const getFetch = new Promise((resolve,reject) =>{
        let respuesta ='200'
        if (respuesta==='200'){
        setTimeout(()=>resolve(datos),2000)
        }else{
        reject('404')
        }
    })   

//----------------------------------------------------------------
    useEffect(() => {     
        getFetch
        .then(respuesta =>{setProductos(respuesta)})    
        .catch(error=>console.log(error))
        .finally(()=>setLoading(false))    
    },[()=>setLoading(!loading)])
    
//------------------------------------------------------------------
    const onAdd =(cant)=>{
        console.log(cant)
    }

    return (
    <>
        <h1 className='text-danger'>{greeting}</h1> 
        {loading ?  
                <Button variant="danger" disabled>
                    <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true"/>Por favor espere...
                </Button>:             
                <ItemList items={productos}/>           
        }           
        <ItemCount stock={stock} initial={initial} onAdd={onAdd}/>            
    </>
    )
}

export default ItemListContainer
