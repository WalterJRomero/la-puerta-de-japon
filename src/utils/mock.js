const datos = [
    {   id:1,
        category:'paquetes',
        title:'Tokyo 10 días',
        shortDescription:'Visita Tokyo, la capital del sol naciente',
        price:'1050',
        pictureUrl:'https://i.postimg.cc/zGWgfZ9F/ciudades-tokyo1.jpg'}, 

    {   id:2,
        category:'paquetes',
        title:'Tokyo 15 días',
        shortDescription:'Visita Tokyo, la capital del sol naciente',
        price:'1550',
        pictureUrl:'https://i.postimg.cc/7ZBFyWGK/ciudades-tokyo2.jpg'},

    {   id:3,
        category:'paquetes',
        title:'Tokyo 20 días',
        shortDescription:'Visita Tokyo, la capital del sol naciente',
        price:'2050',
        pictureUrl:'https://i.postimg.cc/jjLGq4yt/ciudades-tokyo3.jpg'},

    {   id:4,
        category:'paquetes',
        title:'Tokyo y Kyoto 10 días',
        shortDescription:'Recorre la antigua y la nueva capital de Japón',
        price:'1254',
        pictureUrl:'https://i.postimg.cc/130Fp99j/ciudades-kyoto1.jpg'},
    
    {   id:5,
        category:'paquetes',
        title:'Tokyo y Kyoto 15 días',
        shortDescription:'Recorre la antigua y la nueva capital de Japón',
        price:'1754',
        pictureUrl:'https://i.postimg.cc/FRS83FP6/ciudades-kyoto2.jpg'},
   
    {   id:6,
        category:'paquetes',
        title:'Tokyo y Kyoto 20 días',
        shortDescription:'Recorre la antigua y la nueva capital de Japón',
        price:'2254',
        pictureUrl:'https://i.postimg.cc/6p6kgX37/ciudades-kyoto3.jpg'},
    
    {   id:7,
        category:'paquetes',
        title:'Tokyo, Kyoto y Nara 10 días',
        shortDescription:'Conoce los centros turisticos mas importantes de Japón',
        price:'1276',
        pictureUrl:'https://i.postimg.cc/mZXCC3H0/ciudades-nara1.jpg'},
    
    {   id:8,
        category:'paquetes',
        title:'Tokyo, Kyoto y Nara 15 días',
        shortDescription:'Conoce los centros turisticos mas importantes de Japón',
        price:'1776',
        pictureUrl:'https://i.postimg.cc/pr6jvxv2/ciudades-nara2.jpg'},
   
    {   id:9,
        category:'paquetes',
        title:'Tokyo, Kyoto y Nara 20 días',
        shortDescription:'Conoce los centros turisticos mas importantes de Japón',
        price:'2276',
        pictureUrl:'https://i.postimg.cc/XJDtp2JK/ciervosnara.jpg'},
    
    {   id:10,
        category:'pases',
        title:'Standard Jr Pass 7 dias',
        shortDescription:'Viaja por todo Japón con un unico pase',
        price:'287',
        pictureUrl:'https://i.postimg.cc/nrgxWLG8/JRPass.jpg'},
    
    {   id:11,
        category:'pases',
        title:'Standard Jr Pass 14 dias',
        shortDescription:'Viaja por todo Japón con un unico pase',
        price:'456',
        pictureUrl:'https://i.postimg.cc/nrgxWLG8/JRPass.jpg'},
   
    {   id:12,
        category:'pases',
        title:'Standard Jr Pass 21 dias',
        shortDescription:'Viaja por todo Japón con un unico pase',
        price:'583',
        pictureUrl:'https://i.postimg.cc/nrgxWLG8/JRPass.jpg'},
    
    {   id:13,
        category:'excursiones',
        title:'Monte Fuji',
        shortDescription:'Descubri el monte mas importante de Japón',
        price:'400',
        pictureUrl:'https://i.postimg.cc/J0cgN4Yc/mountfuji.jpg'},
   
    {   id:14,
        category:'excursiones',
        title:'Gotemba Outlets',
        shortDescription:'Disfruta de comprar en el mejor outlet de Japón',
        price:'200',
        pictureUrl:'https://i.postimg.cc/90m3N77N/gotemba1.jpg'},
    
    {   id:15,
        category:'excursiones',
        title:'Gran Buda de Kamakura',
        shortDescription:'Preparate para conocer este increible lugar',
        price:'100',
        pictureUrl:'https://i.postimg.cc/4NnNLMVG/kamakura.jpg'},
    ];

    export const getFetch = new Promise((resolve,reject) =>{
        setTimeout(()=>resolve(datos),2000)        
    })   

const unoSolo = datos.filter((producto)=>producto.id===1);
    
    export const getUnoFetch = new Promise((resolve,reject) =>{
            setTimeout(()=>resolve(unoSolo),2000)        
        })  