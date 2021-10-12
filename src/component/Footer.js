import { Facebook, Instagram, MailOutline,  Phone, Pinterest, Room, Telegram } from '@material-ui/icons';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';

const Container = styled.div`
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const Left = styled.div`
    flex: 1;
    margin: 20px;
`
const Logo = styled.div`

`
const Desc = styled.div`
    margin: 20px 0;
`
const SocialContainer = styled.div`
    display: flex;
    ${mobile({alignItems: "center", justifyContent: "center"})}
`
const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color:#fff;
    margin-right: 20px;
    background-color: #${props=>props.color};
    display: flex;
    justify-content: center;
    align-items: center;

`
const Center = styled.div`
    flex: 1;
    padding:20px;
    ${mobile({display: "none"})}
`
const Title = styled.h3`
    margin-bottom: 30px;
`
const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
`

const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
`

const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({backgroundColor: "lightGray"})}
`

const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
`
const Payment = styled.img`
    width: 50%;
    ${mobile({width: "80%", marginLeft: 25})}
`
   

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>MasterDeg.uz</Logo>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil delectus eaque 
                    quo odit quod a perspiciatis quia laudantium atque? Delectus officiis modi libero 
                    odio cupiditate voluptatibus eum fugit tenetur, eveniet, suscipit accusamus! Impedit 
                </Desc>
                <SocialContainer>
                    <SocialIcon color="3B5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="E4405F">
                        <Telegram />
                    </SocialIcon>
                    <SocialIcon color="55ACEE">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="E60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>
            <Center>
                <Title>Useful Lins</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tranking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>
            <Right>
                <Title>Contact</Title>
                <ContactItem><Room style={{marginRight: "10px"}} /> 662 Dicxie path, South Tolinchesdr 9978765</ContactItem>
                <ContactItem><Phone style={{marginRight: "10px"}} />+99899 123-45-67</ContactItem>
                <ContactItem><MailOutline style={{marginRight: "10px"}} />contact@masterdeg.uz</ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>

        </Container>
    )
}

export default Footer;
