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

    export const getFetch = new Promise((resolve,reject) =>{
        setTimeout(()=>resolve(datos),2000)        
    })   


const unoSolo = {id:8,title:'Tokyo, Kyoto y Nara 15 días',description:'descripcion de la promesa de un solo item',price:'1776',pictureUrl:'https://i.postimg.cc/pr6jvxv2/ciudades-nara2.jpg'}
    
    export const getUnoFetch = new Promise((resolve,reject) =>{
            setTimeout(()=>resolve(unoSolo),2000)        
        })  