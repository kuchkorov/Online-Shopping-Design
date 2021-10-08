import { Send } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
    flex: 1;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 60vh;
    background: #fcf5f5;;
    padding: 50px;
`
const Title = styled.h1`

`
const Desc = styled.div`
    font-size: 24px;
    font-weight: 300;
    margin-bottom: 20px;
`
const InputController = styled.div`
    width: 50%;
    height: 40px;
    background-color: #fff;
    display:flex;
    justify-content: space-between;
    align-items: center;
    border: 1px solid lightgrey;
`
const Input = styled.input`
    border: none;
    flex: 8;
    padding: 10px;
    flex: 8;
    padding-left: 20px;
`
const Button = styled.button`
    flex:1;
    border:none;                                                    
    background-color: teal;
    color: #fff;
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
