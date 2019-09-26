import React from 'react';

import style from './DrawerToogle.module.css';

const drawerToogle = ( props ) => (
    <div className={style.DrawerToggle} onClick={props.clicked}>
        <div></div>
        <div></div>
        <div></div>
    </div>
);

export default drawerToogle;