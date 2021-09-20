import Item from "./Item"
import {Container,Row} from "react-bootstrap"

function ItemList({items}) {
    
    return (
        <>
            <Container className="container d-flex justify-content-center align-item-center h-100 ">
                <Row className="justify-content-center">
                    {items.map(item=><Item key={item.id}  item={item} />  )}
                </Row>
            </Container>
        </>
    )
}

export default ItemList
