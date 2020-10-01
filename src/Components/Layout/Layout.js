import React from 'react';
import Aux from '../../hoc/Auxiliary'
import classes from './Layout.css'

const Layout = (props) => (
    <Aux>
        <div className={classes.Content}>Toolbar, SideDrawer, Backdrop</div>
        <main>
            {props.children}
        </main>
    </Aux>
);

export default Layout;