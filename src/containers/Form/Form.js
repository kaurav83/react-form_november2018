import React, { Component } from 'react';
import classes from './Form.css';
import Button from '../../components/UI/Button/Button';

class Form extends Component {
    loginHandler() {

    }

    registerHandler() {

    }

    submitHandler(e) {
        e.preventDefault();    
    }

    render() {
        return (
            <div className={classes.Form}>
                <div>
                    <h1>Авторизация</h1>

                    <form onSubmit={this.submitHandler} className={classes.FormAuth}>
                        <input type="text" />
                        <input type="text" />

                        <Button
                            type="success" 
                            onClick={this.loginHandler}
                        >Войти</Button>

                        <Button
                            type="primary" 
                            onClick={this.registerHandler}
                        >Зарегистрироваться</Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Form;