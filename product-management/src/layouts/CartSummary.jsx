import React from 'react';
import {Dropdown, Label} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

export default function CartSummary(){
    const {cartItems} = useSelector(state => state.cart)   //state.cart ı rootReducer.js de tanımladık.          //redux state'inden çektik veriyi useSelector kolaylık sağladı. cartItems diyerek kullanabiliriz.
    return (
        <div>
            <Dropdown item text='Bag'>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItem)=>(
                            <Dropdown.Item key={cartItem.product.id}>
                                {cartItem.product.productName}
                                <Label>
                                    {cartItem.quantity}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }
                    <Dropdown.Divider></Dropdown.Divider>  {/*çizgi bırakır.*/}
                    <Dropdown.Item as={NavLink} to="/cart">View bag</Dropdown.Item> {/* NavLink i semantic-ui içerisinde kullanmak için yazdık. Router kullanımında.*/}
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}