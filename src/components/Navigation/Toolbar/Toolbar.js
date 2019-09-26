import React from 'react';

import style from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import DrawerToogle from '../SideDrawer/DrawerToogle/DrawerToogle';
import NavigationsItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => (
    <header className={style.Toolbar}>
        <DrawerToogle clicked={props.openSide}/>
        <Logo height="80%" />
        <nav className={style.DesktopOnly}>
            <NavigationsItems />
        </nav>
    </header>
);

export default toolbar;