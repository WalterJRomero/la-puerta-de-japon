const datos = [
    {   id:1,
        category:'paquetes',
        title:'Tokyo 10 días',
        shortDescription:'Visita Tokyo, la capital del sol naciente',
        longDescription:'Tokio, un megacentro empresarial y cultural en el que viven decenas de millones de personas, es también la encrucijada donde los japoneses interactúan con ciudadanos de todo el mundo. A los medios les encanta centrarse en la vibrante moda de Harajuku, los restaurantes de robots, los maid cafes y los apasionados superfans, conocidos como otaku. Además de la vertiginosa innovación de la ciudad de Tokio, la metrópolis está igualmente dedicada a la conservación de la tradición con sus jardines, santuarios y templos históricos.',
        price:1050,
        pictureUrl:'https://i.postimg.cc/zGWgfZ9F/ciudades-tokyo1.jpg'}, 

    {   id:2,
        category:'paquetes',
        title:'Tokyo 15 días',
        shortDescription:'Visita Tokyo, la capital del sol naciente',
        longDescription:'Tokio, un megacentro empresarial y cultural en el que viven decenas de millones de personas, es también la encrucijada donde los japoneses interactúan con ciudadanos de todo el mundo. A los medios les encanta centrarse en la vibrante moda de Harajuku, los restaurantes de robots, los maid cafes y los apasionados superfans, conocidos como otaku. Además de la vertiginosa innovación de la ciudad de Tokio, la metrópolis está igualmente dedicada a la conservación de la tradición con sus jardines, santuarios y templos históricos.',
        price:1550,
        pictureUrl:'https://i.postimg.cc/7ZBFyWGK/ciudades-tokyo2.jpg'},

    {   id:3,
        category:'paquetes',
        title:'Tokyo 20 días',
        shortDescription:'Visita Tokyo, la capital del sol naciente',
        longDescription:'Tokio, un megacentro empresarial y cultural en el que viven decenas de millones de personas, es también la encrucijada donde los japoneses interactúan con ciudadanos de todo el mundo. A los medios les encanta centrarse en la vibrante moda de Harajuku, los restaurantes de robots, los maid cafes y los apasionados superfans, conocidos como otaku. Además de la vertiginosa innovación de la ciudad de Tokio, la metrópolis está igualmente dedicada a la conservación de la tradición con sus jardines, santuarios y templos históricos.',
        price:2050,
        pictureUrl:'https://i.postimg.cc/jjLGq4yt/ciudades-tokyo3.jpg'},

    {   id:4,
        category:'paquetes',
        title:'Tokyo y Kyoto 10 días',
        shortDescription:'Recorre la antigua y la nueva capital de Japón',
        longDescription:'La ciudad de Kioto atrae a millones de visitantes, tanto locales como internacionales, deseosos de descubrir la tradicional cultura japonesa. Templos y santuarios, como los de Kiyomizu-dera o Kinkakuji, y los cercanos bosques de bambú de Arashiyama, suscitan el interés de multitud de turistas. Alójate en un ryokan pintoresco, date un baño en un onsen rejuvenecedor y admira el cambio de las estaciones con los cerezos en flor y el follaje brillante. Lo mejor de todo es que tardarás muy poco en llegar a la magia de Kioto en tren bala desde Tokio. Más allá de la ciudad, la prefectura de Kioto esconde innumerables tesoros rurales. Amanohashidate, en el norte de la prefectura, se ha considerado durante mucho tiempo uno de los tres paisajes más espectaculares de Japón. Miyama, caracterizada por su circundante paisaje montañoso, es una de las pocas ciudades del país en las que aún pueden apreciarse granjas con techos de paja, muchas de las cuales continúan habitadas. Disfruta de deliciosas verduras locales y el famoso té verde cultivado en Uji.',
        price:1254,
        pictureUrl:'https://i.postimg.cc/130Fp99j/ciudades-kyoto1.jpg'},
    
    {   id:5,
        category:'paquetes',
        title:'Tokyo y Kyoto 15 días',
        longDescription:'La ciudad de Kioto atrae a millones de visitantes, tanto locales como internacionales, deseosos de descubrir la tradicional cultura japonesa. Templos y santuarios, como los de Kiyomizu-dera o Kinkakuji, y los cercanos bosques de bambú de Arashiyama, suscitan el interés de multitud de turistas. Alójate en un ryokan pintoresco, date un baño en un onsen rejuvenecedor y admira el cambio de las estaciones con los cerezos en flor y el follaje brillante. Lo mejor de todo es que tardarás muy poco en llegar a la magia de Kioto en tren bala desde Tokio. Más allá de la ciudad, la prefectura de Kioto esconde innumerables tesoros rurales. Amanohashidate, en el norte de la prefectura, se ha considerado durante mucho tiempo uno de los tres paisajes más espectaculares de Japón. Miyama, caracterizada por su circundante paisaje montañoso, es una de las pocas ciudades del país en las que aún pueden apreciarse granjas con techos de paja, muchas de las cuales continúan habitadas. Disfruta de deliciosas verduras locales y el famoso té verde cultivado en Uji.',
        shortDescription:'Recorre la antigua y la nueva capital de Japón',
        price:1754,
        pictureUrl:'https://i.postimg.cc/FRS83FP6/ciudades-kyoto2.jpg'},
   
    {   id:6,
        category:'paquetes',
        title:'Tokyo y Kyoto 20 días',
        longDescription:'La ciudad de Kioto atrae a millones de visitantes, tanto locales como internacionales, deseosos de descubrir la tradicional cultura japonesa. Templos y santuarios, como los de Kiyomizu-dera o Kinkakuji, y los cercanos bosques de bambú de Arashiyama, suscitan el interés de multitud de turistas. Alójate en un ryokan pintoresco, date un baño en un onsen rejuvenecedor y admira el cambio de las estaciones con los cerezos en flor y el follaje brillante. Lo mejor de todo es que tardarás muy poco en llegar a la magia de Kioto en tren bala desde Tokio. Más allá de la ciudad, la prefectura de Kioto esconde innumerables tesoros rurales. Amanohashidate, en el norte de la prefectura, se ha considerado durante mucho tiempo uno de los tres paisajes más espectaculares de Japón. Miyama, caracterizada por su circundante paisaje montañoso, es una de las pocas ciudades del país en las que aún pueden apreciarse granjas con techos de paja, muchas de las cuales continúan habitadas. Disfruta de deliciosas verduras locales y el famoso té verde cultivado en Uji.',
        shortDescription:'Recorre la antigua y la nueva capital de Japón',
        price:2254,
        pictureUrl:'https://i.postimg.cc/6p6kgX37/ciudades-kyoto3.jpg'},
    
    {   id:7,
        category:'paquetes',
        title:'Tokyo, Kyoto y Nara 10 días',
        shortDescription:'Conoce los centros turisticos mas importantes de Japón',
        longDescription:'Desde Osaka y Kioto se puede llegar fácilmente a Nara, corazón político y religioso del Japón ancestral, que cuenta con algunos de los santuarios y templos sagrados más antiguos del país. En muchos de estos enclaves se han cultivado jardines de flores que realzan el entorno. El parque de Nara es famoso por sus ciervos domesticados que merodean libremente y está situado junto al templo Todaiji, que alberga la estatua de bronce de Buda más grande del mundo. En el monte Yoshino, Patrimonio Mundial y encrucijada de importantes rutas de peregrinaje, se observa la belleza de los cerezos en flor durante la temporada de primavera.',
        price:1276,
        pictureUrl:'https://i.postimg.cc/mZXCC3H0/ciudades-nara1.jpg'},
    
    {   id:8,
        category:'paquetes',
        title:'Tokyo, Kyoto y Nara 15 días',
        shortDescription:'Conoce los centros turisticos mas importantes de Japón',
        longDescription:'Desde Osaka y Kioto se puede llegar fácilmente a Nara, corazón político y religioso del Japón ancestral, que cuenta con algunos de los santuarios y templos sagrados más antiguos del país. En muchos de estos enclaves se han cultivado jardines de flores que realzan el entorno. El parque de Nara es famoso por sus ciervos domesticados que merodean libremente y está situado junto al templo Todaiji, que alberga la estatua de bronce de Buda más grande del mundo. En el monte Yoshino, Patrimonio Mundial y encrucijada de importantes rutas de peregrinaje, se observa la belleza de los cerezos en flor durante la temporada de primavera.',
        price:1776,
        pictureUrl:'https://i.postimg.cc/pr6jvxv2/ciudades-nara2.jpg'},
   
    {   id:9,
        category:'paquetes',
        title:'Tokyo, Kyoto y Nara 20 días',
        shortDescription:'Conoce los centros turisticos mas importantes de Japón',
        longDescription:'Desde Osaka y Kioto se puede llegar fácilmente a Nara, corazón político y religioso del Japón ancestral, que cuenta con algunos de los santuarios y templos sagrados más antiguos del país. En muchos de estos enclaves se han cultivado jardines de flores que realzan el entorno. El parque de Nara es famoso por sus ciervos domesticados que merodean libremente y está situado junto al templo Todaiji, que alberga la estatua de bronce de Buda más grande del mundo. En el monte Yoshino, Patrimonio Mundial y encrucijada de importantes rutas de peregrinaje, se observa la belleza de los cerezos en flor durante la temporada de primavera.',
        price:2276,
        pictureUrl:'https://i.postimg.cc/XJDtp2JK/ciervosnara.jpg'},
    
    {   id:10,
        category:'pases',
        title:'Standard Jr Pass 7 dias',
        shortDescription:'Viaja por todo Japón con un unico pase',
        longDescription:'El Japan Rail Pass (también conocido como JR Pass) es un billete multi-uso con descuento válido para viajeros en todos los trenes nacionales JR en Japón, incluyendo los trenes bala Shinkansen y el Narita Express. Puedes elegir entre periodos de validez de 7, 14 o 21 días consecutivos y entre estándar y Green Pass (1ª clase).',
        price:287,
        pictureUrl:'https://i.postimg.cc/nrgxWLG8/JRPass.jpg'},
    
    {   id:11,
        category:'pases',
        title:'Standard Jr Pass 14 dias',
        shortDescription:'Viaja por todo Japón con un unico pase',
        longDescription:'El Japan Rail Pass (también conocido como JR Pass) es un billete multi-uso con descuento válido para viajeros en todos los trenes nacionales JR en Japón, incluyendo los trenes bala Shinkansen y el Narita Express. Puedes elegir entre periodos de validez de 7, 14 o 21 días consecutivos y entre estándar y Green Pass (1ª clase).',
        price:456,
        pictureUrl:'https://i.postimg.cc/nrgxWLG8/JRPass.jpg'},
   
    {   id:12,
        category:'pases',
        title:'Standard Jr Pass 21 dias',
        shortDescription:'Viaja por todo Japón con un unico pase',
        longDescription:'El Japan Rail Pass (también conocido como JR Pass) es un billete multi-uso con descuento válido para viajeros en todos los trenes nacionales JR en Japón, incluyendo los trenes bala Shinkansen y el Narita Express. Puedes elegir entre periodos de validez de 7, 14 o 21 días consecutivos y entre estándar y Green Pass (1ª clase).',
        price:583,
        pictureUrl:'https://i.postimg.cc/nrgxWLG8/JRPass.jpg'},
    
    {   id:13,
        category:'excursiones',
        title:'Monte Fuji',
        shortDescription:'Descubri el monte mas importante de Japón',
        longDescription:'Nos reuniremos en la salida oeste de la estación Shinjuku. Viajaremos en autobús hasta la quinta estación del monte Fuji, donde queda su fastuoso mirador. En el lugar podrás degustar un almuerzo tipo picnic. Luego de avistar el hermoso paraje, tomaremos 20 minutos para descansar en la parada de carretera Mici-no-Eki (área de descanso), donde podrás adquirir productos en sus outles. Nos reuniremos nuevamente para observar el esplendor de las flores sobre todo en primavera en el parque Oishi ubicado a la orilla norte del lago Kawaguchi, y si la buena fortuna nos favorece y el día está despejado podremos ver el reflejo del monte Fuji en sus cristalinas aguas. Continuaremos la excursión en Oshino Hakkai: un atractivo pueblo tradicional agrícola con construcciones representativas de la zona, desde donde contemplarás el monte Fuji. ',
        price:400,
        pictureUrl:'https://i.postimg.cc/J0cgN4Yc/mountfuji.jpg'},
   
    {   id:14,
        category:'excursiones',
        title:'Gotemba Outlets',
        shortDescription:'Disfruta de comprar en el mejor outlet de Japón',
        longDescription:'En Gotemba Premium Outlets, dispondrás de 3 horas y media en el lugar para caminar por sus más de 100 establecimientos comerciales.',
        price:200,
        pictureUrl:'https://i.postimg.cc/90m3N77N/gotemba1.jpg'},
    
    {   id:15,
        category:'excursiones',
        title:'Gran Buda de Kamakura',
        shortDescription:'Preparate para conocer este increible lugar',
        longDescription:'Kamakura es una típica excursión de día desde Tokio, aunque con la gran cantidad de templos y santuarios que hay, además de rutas de senderismo y opciones de relax, bien podríamos quedarnos 2 días perfectamente, especialmente si nos gusta hacer rutas de senderismo o actividades de playa como surf. De todas formas, lo habitual es ir un único día para intentar ver los templos más importantes y populares. Por otro lado, si vamos en verano, la ciudad tiene también buenas playas y está conectado con el precioso tren Enoden con la vecina Enoshima, otro popular lugar para disfrutar de la playa y del mar. En este caso, podríamos considerar añadir un día más a nuestra estancia y así disfrutar del mar de Kamakura.',
        price:100,
        pictureUrl:'https://i.postimg.cc/4NnNLMVG/kamakura.jpg'},
    ];

    export const getFetch = new Promise((resolve,reject) =>{
        setTimeout(()=>resolve(datos),2000)        
    })   

const unoSolo = datos.filter((producto)=>producto.id===1);
    
    export const getUnoFetch = new Promise((resolve,reject) =>{
            setTimeout(()=>resolve(unoSolo),2000)        
        })  

export const cartEmptyImg = 'https://i.postimg.cc/G2hshRLx/carrito-Vacio.png'