import React from 'react';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import styled from "styled-components";
import Badge from '@material-ui/core/Badge';
import MailIcon from '@material-ui/icons/Mail';
import { mobile } from "../responsive";

const Container = styled.div`
    height: 60px;
    ${mobile({height: "50px"})}
   
`
const Wrapper = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items:center;
    justify-content: space-between;
    ${mobile({padding: "10px 0"})}
`
const Left = styled.div`
    flex: 1;
    display:flex;
    align-items: center;
`

const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display:flex;
    align-items: center;
    margin-left: 25px;
    padding: 5px;
    ${mobile({ marginLeft: "10px"})}
`
const Input = styled.input`
    border:none;
    ${mobile({width: "50px"})}
`

const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display: "none"})}
`
const Center = styled.div`
    flex: 1;
`
const Logo = styled.h1`
    font-weight:bold;
    text-align:center;
    ${mobile({fontSize: "24px", marginLeft: "8px"})}
`
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    ${mobile({justifyContent: "center", flex: 2})}
`
const MenuItems = styled.div`
    font-size: 14px;
    cursor:pointer;
    margin-left:25px; 
    ${mobile({fontSize: "12px", marginLeft: "8px"})}
`

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Language>EN</Language>
                    <SearchContainer>
                        <Input placeholder="Search"/>
                        <Search style={{ color: "grey", fontSize: 16}} />
                    </SearchContainer>
                </Left>
                <Center><Logo>Mas.uz</Logo></Center>
                <Right>
                    <MenuItems>REGISTER</MenuItems>
                    <MenuItems>SIGN IN</MenuItems>
                    <MenuItems>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItems>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar
