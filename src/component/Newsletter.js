import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';


const Container = styled.div`
    flex: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 60vh;
    background: #fcf5f5;;
    padding: 50px;
    ${mobile({height: "30vh"})}
`
const Title = styled.h1`

`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
    ${mobile({textAlign: "center", marginTop: 15})}
`
const InputController = styled.div`
    width: 40%;
    height: 40px;
    background-color: #fff;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgrey;
    ${mobile({width: "100%"})}
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding: 10px;
    padding-left: 20px;
`
const Button = styled.button`
    flex:1;
    border:none;                                                    
    background-color: teal;
    color: #fff;
    padding: 7px 0;
    ${mobile({padding: "8px 10px"})}
`

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Desc>Get timely updates from your favorite products</Desc>
            <InputController>
                <Input placeholder="Your Email"/>
                <Button>
                    <Send />
                </Button>
            </InputController>
        </Container>
    )
}

export default Newsletter
