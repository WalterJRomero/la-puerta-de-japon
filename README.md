-Proyecto Ecommerce, Coderhouse Camada 16935

-Alumno: Walter Romero

-Descripción: Esta pagína se diseño con la tematíca de venta de servicios y productos sobre Japón. Se continuó el tema elegido en los cursos anteriores de Desarrollo Web y Javascript ( https://walterjromero.github.io/La_puerta_de_Japon/ ). 

-Utils/mock: se generó una pequeña base de datos para poder utilizarla en las diferentes categorías. Se añade una descripción corta para que sea previsualizada en el itemlistcontainer, luego se añadirá una descripción mas extensa para poder mostrarla en "detalle". Se crea la función getFetch para generar la promesa y poder devolver los valores del array, con setTimeOut se retrasa 2 segundos la carga.

-Componentes

NavBar: se renderiza junto a CartWidget, es la barra de navegacion del sitio. Utiliza React Bootstrap

CartWidget: botón con la imagen de un carrito, se utilizó react-icons para que renderice el carrito elegido "io5"

Item: recibe por prop un objeto item, luego hago destructuring para poder utilizarlo de forma mas sencilla en la "card" que genere para renderizarlo. 

ItemCount: este componente recibe por prop un valor de stock, al momento de intentar superar ese stock no se lo permite al usuario.

ItemDetail: utilicé los componentes de react-bootstrap para renderizar los detalles. se agrega el itemcount en el cuerpo del detalle para que se visualice los botones de - o + y agregar al carrito.

ItemDetailContainer: con useParams se toma el valor del item que se esta intentando buscar. Luego con useffect se analiza la base de datos ficticia cargada en mock, comparando el item obtenido con params, si tenemos un valor definido lo buscamos dentro del array mock utilizando un filter, luego lo seteamos con setUnItem (guarda el valor del item buscado como un objeto), en caso de no encontrar el item que nos solicitaron, devuelve todo el array de esa categoria. Se comprueba tambien que de existir el item que estan solicitando se renderice correctamente a travez de ItemDetail. Si no existe no renderiza un objeto indefinido.

ItemList: Es un contendor de items. Por medio de una prop items, se renderizan todos los objetos que se pasan al componente Item. En este caso mostrará todos los items encontrados de una categoria.

ItemListContainer: componente contenedor de todas las categorias, si necesitamos encontrar una categoria en especial la obtenemos por medio de useParams, el valor lo pasamos desde app.js por "/categoria/:idCategoria". Se simula una espera de 2 segundos, mientras se visualiza la leyenda "por favor espere". Si no tenemos una categoria que buscar el contenedor devuelve/muestra todos los item dentro de la base de datos.

TituloCategorias: se muestra como titulo h2 la categoria que es capturada por useParams, la categoria se obtiene desde "/categoria/:idCategoria" en app.js

-Estilos:

item.css:se genero un estilo para que las fotos tengan la misma altura en la vista de categorias