/* eslint-disable react/prop-types */
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Item } from "../Item/Item";

export const ItemList = ({items}) => {
    return(
        <Container fluid>
            <Row>
            {items.map(item =>
                <Item item={item} key={item.id}/>
            )}
            </Row>
        </Container>
    )
};