import React, { Component } from 'react';

import style from './Modal.module.css';

import Auxiliary from '../../../hoc/Auxiliary/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {//-> Me evito renderizados inecesarios ya que el modal no se esta mostrando
        return this.props.show !== nextProps.show; 
    }

    render() {
        return (
            <Auxiliary>
                <Backdrop 
                    show={this.props.show} 
                    clicked={this.props.modalClose}/>
                <div 
                    className={style.Modal}
                    style={{
                        transform: this.props.show ? 'translatey(0)' : 'translatey(-100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Auxiliary>
        );
    }
}

export default Modal;