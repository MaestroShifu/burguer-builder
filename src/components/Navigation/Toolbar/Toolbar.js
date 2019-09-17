import React from 'react';

import style from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import NavigationsItems from '../NavigationItems/NavigationItems';

const toolbar = ( props ) => (
    <header className={style.Toolbar}>
        <div>Menu</div>
        <Logo />
        <nav>
            <NavigationsItems />
        </nav>
    </header>
);

export default toolbar;