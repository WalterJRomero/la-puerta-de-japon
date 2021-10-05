import {useCartContext} from "../context/CartContext"
import {Button,Card,Container,Nav,Row,Col} from "react-bootstrap"
import {Link} from 'react-router-dom'
import {cartEmptyImg} from '../utils/mock'
import {getFirestore} from '../services/getFirebase'
import firebase from "firebase"
import 'firebase/firestore'
import {useState} from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import EndWindow from './EndWindow.jsx'

function Cart() {
    
    const {cartList,clearCart,removeItem,totalPrice,setId}= useCartContext()     
    const [formData,setFormData]=useState({
        name:'',
        surname:'',
        phone:'',
        email:'',
        email2:'',
    })
    
    const cartLength = cartList.length  

    const generateOrder=()=>{

        let order ={}
        order.date =firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer =formData
        order.total= totalPrice();
        order.items =cartList.map(cartItem=>{
            const id= cartItem.cartItem.title
            const title=cartItem.cartItem.title
            const price=cartItem.cartItem.price*cartItem.quantity

            return {id,title,price}
        })        
    }

    function handleOnChange(e){

        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleOnSubmit(e){

        e.preventDefault()

        let order={}
        order.date=firebase.firestore.Timestamp.fromDate(new Date());
        order.buyer=formData
        order.total=totalPrice()
        order.items=cartList.map(cartItem =>{
            const id=cartItem.cartItem.id;
            const title=cartItem.cartItem.title;
            const price=cartItem.quantity*cartItem.cartItem.price
            return {id,title,price}
        })

        const db = getFirestore()
        db.collection('orders').add(order)        
        .then(resp=>{
            setId(resp.id)                      
        })

        .catch(err=>console.log(err))
        .finally(()=>{
            setFormData({});          
        })
        

        //con un id especifico
        //db.collection('orders').doc(id).set(order)

        //   update  por ejemplo para admin
        //db.collection('orders').doc('asdCXADSDasdcESADSsad').update({
        //   stock:1223
        //})
        //.then(resp=>console.log(resp))
    
        //batch para atualizar el estado de todos los items 
        const itemsToUpdate = db.collection('items').where(
            firebase.firestore.FieldPath.documentId(),'in', cartList.map(i=>i.cartItem.id)
        )
            const batch=db.batch();
        itemsToUpdate.get()
        .then(collection=>{
            collection.docs.forEach(docSnapchot =>{
                batch.update(docSnapchot.ref,{
                    stock:docSnapchot.data().stock - cartList.find(item=> item.cartItem.id === docSnapchot.id).quantity
                })
            })

            batch.commit().then(res =>{
                console.log('resultado batch',res)
            })
        .catch(err=>console.log(err))
            
        })
    }

//-------- CODIGO DE PRUEBA PARA QUE NO DEJE INGRESAR DATOS SI UN ITEM SUPERA LA CANTIDAD QUE HAY EN STOCK, CODIGO A REVISAR-----------
    let prueba=true

    function cartOk(){        
        let arrayCart=[]
        cartList.forEach(item=>{ 
            if(item.cartItem.stock>=item.quantity){
                arrayCart.push(true)
                // console.log('hay stock')
                // console.log(arrayCart)              

            }else {
                arrayCart.push(false)
                // console.log('no hay stock') 
                // console.log(arrayCart)                  
            }
        
            if(arrayCart.includes(false)){
                 prueba=false
            } else{ console.log('verdadero')}            
            
        })}      
    
        cartOk()      
//-------------------------------------------------------------------------------------------------------------------------------------



    return (
        <>   
            <h1 className="mt-3" >Tu carrito de compras</h1>     
            {cartLength>0?               
                <Container fluid>
                    <Row>                                          
                    <Col xs={12} md={8}>                        
                            <Container fluid className='m-1 p-1'>
                                {cartList.map(item=>
                                    <Card className='m-2 p-1'key={item.cartItem.id} style={{ display:'flex' ,flexDirection:'row', alignItems:'center'}}>
                                        <Container style={{ display:'flex' ,flexDirection:'row',alignItems:'center', justifyContent:'space-between'}}>
                                            <Card.Img variant="top" src={item.cartItem.pictureUrl} style={{ height: '4rem',width:'5.2rem'}} />                            
                                            <Card.Title style={{ paddingLeft:'1rem'}} >{item.cartItem.title}</Card.Title>                                
                                            <Button onClick={()=>removeItem(item.cartItem.id)} variant="danger">
                                                <RiDeleteBin6Line className='h4' style={{justifyContent:"center"}}/>
                                            </Button>                                
                                        </Container>
                                        
                                        <Container key={item.cartItem.id} style={{ display:'flex' ,flexDirection:'row',  justifyContent:'space-between', alignItems:'center'}}>
                                            <Container style={{ display:'flex' ,flexDirection:'row',  justifyContent:'center', alignItems:'center'}}>
                                                <Card.Title className="m-1">Cantidad:</Card.Title>
                                                <Button variant="secondary" onClick={()=>console.log('restaria')} className="m-1 h6">-</Button>
                                                <Card.Title className="m-1">{item.quantity}</Card.Title>
                                                <Button variant="secondary" onClick={()=>console.log('sumaria')} className="m-1 h6">+</Button>
                                            </Container>
                                            <Container style={{ display:'flex' ,flexDirection:'row',  justifyContent:'end', alignItems:'center'}}>
                                                <Card.Title style={{fontSize:'1.5rem'}}  className="m-1">u$s</Card.Title>
                                                <Card.Title style={{fontSize:'1.5rem'}}  className="m-1"> {item.cartItem.price*item.quantity}</Card.Title>
                                            </Container>
                                        </Container> 
                                    </Card>                    
                                )} 
                            </Container>                                                                     
                        </Col>
                        <Col xs={6} md={4}>                   
                            <Card className='m-3 p-2' style={{ display:'flex' ,flexDirection:'row',justifyContent:'end'}}>                       
                                {prueba?
                                    <>
                                        <Container>
                                            <h5>Por favor completa tus datos para continuar la compra</h5>
                                            <form onSubmit={handleOnSubmit} onChange={handleOnChange}>
                                                <p>Nombre:</p>
                                                <input
                                                    type='text'
                                                    placeholder='Ingrese su nombre'
                                                    name='name'
                                                    defaultValue={formData.name}  
                                                    required
                                                    style={{width:"90%"}}
                                                />
                                                <p>Apellido:</p>
                                                <input
                                                    type='text'
                                                    placeholder='Ingrese su apellido'
                                                    name='surname'
                                                    defaultValue={formData.surname}  
                                                    required
                                                    style={{width:"90%"}}
                                                />
                                                <p>Telefono:</p>
                                                <input
                                                    type='number'
                                                    placeholder='Ingrese su telefono'
                                                    name='phone'   
                                                    defaultValue={formData.phone}                                     
                                                    required    
                                                    style={{width:"90%"}}
                                                />
                                                <p>Email:</p>
                                                <input
                                                    type='email'
                                                    placeholder='Ingrese su email'
                                                    name='email'
                                                    defaultValue={formData.email}
                                                    required      
                                                    style={{width:"90%"}}                                              
                                                />
                                                <p>Confirma tu email</p>
                                                <input
                                                    type='email'
                                                    placeholder='Confirme su email'
                                                    name='email2'
                                                    defaultValue={formData.email2}  
                                                    required     
                                                    style={{width:"90%"}}                                      
                                                />                      
                                                <div>
                                                    <h5 className="mt-2">Medios de Pago:</h5>
                                                    <label className="radio-inline m-1">
                                                        <input type="radio" name="movimiento" value="Venta" disabled/>Tarjeta de credito 
                                                    </label>
                                                    <label className="radio-inline m-1">
                                                        <input type="radio" name="movimiento" value="Renta" disabled/>Mercado Pago 
                                                    </label>
                                                    <label className="radio-inline m-1">
                                                        <input type="radio" name="movimiento" value="Traspaso" defaultChecked/>Efectivo 
                                                    </label>   
                                                </div>
                                                <Button onClick={clearCart} className='btn-danger mt-3' style={{width:"90%"}}>Vacíar carrito</Button>                                                      
                                               
                                                <EndWindow generateOrder={generateOrder} type="submit"/>                                           
                                                                                                   
                                                       {/* <EndWindow name={formData.name} id={idOrder} generateOrder={generateOrder}/>*/}
                                               
                                                {/* {buttonFinish?
                                                    <Button onClick={generateOrder} className='m-2' variant="success" type="submit" style={{width:"90%",height:'5vh'}}>                                                        
                                                       Continuar Compra
                                                    </Button>
                                                :
                                                <>
                                                    {idOrder?
                                                        <EndWindow name={formData.name} id={idOrder}/>                                                :
                                                        <>
                                                        </>
                                                    }                                                  
                                                </>
                                                } */}
                                                
                                            </form>                             
                                        </Container>                             
                                    </> 
                                    :
                                    <>                                      
                                        <Container>Un item supera la cantidad que tenemos disponible, por favor modifica la cantidad</Container>
                                        <Button onChange={()=>console.log('deshabilitado')} className='m-1' variant="success" disabled>Continuar Compra</Button>
                                    </>
                                }
                            </Card>                          
                            <Card className='m-3 p-2' style={{ display:'flex' ,flexDirection:'row',alignItems:'center', justifyContent:'end'}}>                        
                                <Container style={{ display:'flex' ,flexDirection:'row',alignItems:'center', justifyContent:'end',marginRight:'0.5rem'}}>                     
                                    <Card.Title size="sm" style={{ paddingLeft:'1rem'}} className="display-5 lead">Precio Total: u$s {totalPrice()} </Card.Title> 
                                </Container>                        
                            </Card>
                        </Col>                 
                    </Row>       
                </Container>
                :        
                <Container fluid className="mt-5 p-5">
                    <Card style={{ height: '18rem' , justifyContent:'center', alignItems:'center'}}>     
                        <Card.Img variant="top" src={cartEmptyImg} style={{ height: '10rem',width:'10rem'}}/>           
                        <Card.Title className=" h2 display-4 text-muted lead">Aún no tenes productos en tu carrito</Card.Title>
                        <Nav.Link as={Link} to="/">Acá podes ver todos los productos que tenemos para vos</Nav.Link>
                    </Card>
                </Container>
            }          
        </>
    )
}

export default Cart
