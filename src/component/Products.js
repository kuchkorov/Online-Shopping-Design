import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { popularProducts } from '../data';
import { mobile } from '../responsive';

const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    /* justify-contect: space-between; */
    /* background: lightyellow; */
    ${mobile({padding: "0"})}
`
const Products = () => {
    return (
        <Container>
            {popularProducts.map(item =>(
                <Product item={item} key={item.id} />
            ))}
        </Container>
    )
}

export default Products
