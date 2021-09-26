-Proyecto Ecommerce, Coderhouse Camada 16935

-Alumno: Walter Romero

-Descripción: Esta pagína se diseño con la tematíca de venta de servicios y productos sobre Japón. Se continuó el tema elegido en los cursos anteriores de Desarrollo Web y Javascript ( https://walterjromero.github.io/La_puerta_de_Japon/ ). 

-Utils/mock: se generó una pequeña base de datos para poder utilizarla en las diferentes categorías. Se añade una descripción corta para que sea previsualizada en el itemlistcontainer, luego se añadirá una descripción mas extensa para poder mostrarla en "detalle". Se crea la función getFetch para generar la promesa y poder devolver los valores del array, con setTimeOut se retrasa 2 segundos la carga. Se cargo la imagen de un carrito de compras, se utiliza en el componente Cart cuando el usuario aún no tiene productos guardados.

-Componentes

NavBar: se renderiza junto a CartWidget, es la barra de navegacion del sitio. Utiliza React Bootstrap

CartWidget: botón con la imagen de un carrito, se utilizó react-icons para que renderice el carrito elegido "io5"

Item: recibe por prop un objeto item, luego hago destructuring para poder utilizarlo de forma mas sencilla en la "card" que genere para renderizarlo. 

ItemCount: este componente recibe por prop un valor de stock, al momento de intentar superar ese stock no se lo permite al usuario.

ItemDetail: utilicé los componentes de react-bootstrap para renderizar los detalles. se agrega el itemcount en el cuerpo del detalle para que se visualice los botones de - o + y agregar al carrito.Contiene la funcion onAdd que agrega items al carrito de compras, esta funcion se toma del useContext que creamos. Tanto la funcion como valores de stock e inicial los pasamos como props a Itemcount.

ItemDetailContainer: con useParams se toma el valor del item que se esta intentando buscar. Luego con useffect se analiza la base de datos ficticia cargada en mock, comparando el item obtenido con params, si tenemos un valor definido lo buscamos dentro del array mock utilizando un filter, luego lo seteamos con setUnItem (guarda el valor del item buscado como un objeto), en caso de no encontrar el item que nos solicitaron, devuelve todo el array de esa categoria. Se comprueba tambien que de existir el item que estan solicitando se renderice correctamente a travez de ItemDetail. Si no existe no renderiza un objeto indefinido.

ItemList: Es un contendor de items. Por medio de una prop items, se renderizan todos los objetos que se pasan al componente Item. En este caso mostrará todos los items encontrados de una categoria.

ItemListContainer: componente contenedor de todas las categorias, si necesitamos encontrar una categoria en especial la obtenemos por medio de useParams, el valor lo pasamos desde app.js por "/categoria/:idCategoria". Se simula una espera de 2 segundos, mientras se visualiza la leyenda "por favor espere". Si no tenemos una categoria que buscar el contenedor devuelve/muestra todos los item dentro de la base de datos.

TituloCategorias: se muestra como titulo h2 la categoria que es capturada por useParams, la categoria se obtiene desde "/categoria/:idCategoria" en app.js

CartContext: Este componente es el encargado de guardar los items que se seleccionan, por medio de useContext compartimos el contexto con el resto de los componentes, los items se guardan con "cartList" que es utilizado con useState, en cada posicion del array se guarda un objeto item y su cantidad. Este array es donde se agregan y se borran (luego se modificaran) los items del carrito de compras. Se crea la funcion addToCart, es la encargada de agregar items al cartList cuando el usuario presiona "agregar al carrito" del itemCount. 
->AddToCartrecibe un objeto, dentro tiene un item y su cantidad. Utiliza un find index para buscar en el posicion del array se encuentra el item.id que estamos buscando.
Si no lo encuentra retorna un -1, significa que no encontró el id que le enviamos (id es unico, por eso se busca) y le agrega al array el item y su cantidad. En caso de encontrar el id, primero, se crea un array auxiliar que contiene los valores de cartList, luego se ingresa a la posicion que obtuvimos anteriormente con findindex (cartList[posicionEncontradaConfindIndex]), ya que me devolvio en que posicion del array se encontraba el item.id que estabamos buscando. Ahora estando posicionados en el array sumamos en CANTIDAD la cantidad que ingreso como parametro (estaba en conjunto con el item, ingresaron juntas a la funcion como un objeto). 
->ClearCart "borra" el array con los item guardados, internamente asigna un array vacio a cartList por medio de setCartList.
->RemoveItem recibe un id que es el que se quiere borrar del carrito, esto se logra con filter. Ya que se genera un nuevo array filtrando el id, se compara por cada posicion del cartList su item.id guardado con el id que se recibió. Si cumple la condicion que no es el id que ingresamos lo guarda en cartList. Los items encontrados los "borra".

Cart:recibe por context el cartList que es donde estan guardados todos los items seleccionados, tambien las funciones que manejaran los estados. Todo se renderiza utilizando reac-bootstrap. Detalle del item, su titulo, su precio que es el valor guardado unitario multiplicada la cantidad que se guardo en cartList. Fuera del renderizado de los items del carrito, tenemos un boton para vaciar el carrito (se activa clearCart del context. Si no tenemos productos en el carrito por medio de condicional muestra que no tenemos items guardados.


-Estilos:

item.css:se genero un estilo para que las fotos tengan la misma altura en la vista de categorias