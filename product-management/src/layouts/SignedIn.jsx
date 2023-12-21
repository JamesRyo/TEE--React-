import React from 'react';
import {Dropdown, Image, Menu} from "semantic-ui-react";

export default function SignedIn(props){

    return (
        <div>
            <Menu.Item>
                <Image avatar spaced="right" src="https://pbs.twimg.com/profile_images/1567780601826054144/Ha02XY8j_400x400.jpg"></Image>
                <Dropdown pointing="top right" text={"YSK"}>
                    <Dropdown.Menu>
                        <Dropdown.Item text="My Information" icon="info"></Dropdown.Item>
                        <Dropdown.Item onClick={props.signOut} text="Logout" icon="sign-out"></Dropdown.Item> {/*onClick={props.signOut} un amacı butona basılınca navi componentindeki handleSignOut fonk çalışıcak*/}
                    </Dropdown.Menu>
                </Dropdown>
            </Menu.Item>
        </div>
    )
}