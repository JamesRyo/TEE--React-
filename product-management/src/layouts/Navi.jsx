import React, {useState} from 'react';
import CartSummary from "./CartSummary";
import {Button, Container, Dropdown, Menu} from 'semantic-ui-react'
import SignedOut from "./SignedOut";
import SignedIn from "./SignedIn";
import {useNavigate} from "react-router-dom"
import {useSelector} from "react-redux";

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);  //başlangıcını false yaptık.

    const navigate  = useNavigate()  //Router push için
    function handleSignOut() {  //bu fonksiyonu çağıracak olan alt component olan SignedIn. Yani bu fonksiyonu alt componente yollamak lazım.
        setIsAuthenticated(false); //çıkış yapa basılınca  false yap.
        navigate("/")  //çıkış yapa basılınca anasayfaya push eder.
    }
    function handleSignIn() {
        setIsAuthenticated(true);
    }

    const {cartItems} = useSelector(state => state.cart)

    return (
        <div>
            <Menu inverted size='large'>
                <Container>
                    <Menu.Item>
                        <img alt="logo" src='https://react.semantic-ui.com/logo.png' />
                    </Menu.Item>
                    <Menu.Item
                        name='home'
                    />
                    <Menu.Item
                        name='messages'
                    />
                    <Menu.Menu position='right'>
                        {cartItems.length>0 && <CartSummary></CartSummary>}                                                  {/* cartSummary i eleman  sayısı sıfırdan büyük olursa import et .*/}
                        {isAuthenticated ? <SignedIn signOut={handleSignOut}></SignedIn> : <SignedOut signIn={handleSignIn}></SignedOut> }  {/*signOut={handleSignOut} fonksiyonunu SignIn e yolladık. SingIn içerisinde kullanırken signOut yazarak kullanıcaz. (Props yapmış olduk)*/}
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}