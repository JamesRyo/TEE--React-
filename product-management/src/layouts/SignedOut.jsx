import React from 'react';
import {Button,Menu} from "semantic-ui-react";

export default function SignedOut({signIn}){  //props yazmak yerine object destructuring yaparak direk yazıp kullanabiliriz.

    return (
        <div>
            <Menu.Item>
                <Button onClick={signIn} primary style={{marginRight:"0.5rem"}}>Login</Button>
                <Button primary>Sign Up</Button>
            </Menu.Item>
        </div>
    )
}