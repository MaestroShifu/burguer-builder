import React from 'react';

import style from './Modal.module.css';

import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal = ( props ) => {
    return (
        <Auxiliary>
            <Backdrop 
                show={props.show} 
                clicked={props.modalClose}/>
            <div 
                className={style.Modal}
                style={{
                    transform: props.show ? 'translatey(0)' : 'translatey(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}>
                {props.children}
            </div>
        </Auxiliary>
    );
};

export default modal;