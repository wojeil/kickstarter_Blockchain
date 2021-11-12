import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';


const Header = (props) => {
    return (
        <Menu style={{marginTop: '15px'}}>
            <Link route="/">
                <a className="item">
                    WaddzCoin
                </a>
            </Link>
            <Menu.Menu position="right">
            <Menu.Item> 
                Campaigns
            </Menu.Item>
            <Menu.Item> 
                +
            </Menu.Item>
            </Menu.Menu>

        </Menu>
    );
};
export default Header;