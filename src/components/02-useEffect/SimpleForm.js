import React, { useEffect, useState } from 'react';
import {Message} from './Message';


import './effects.css';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })
    const { name, email } = formState;

    useEffect(() => {
        // console.log("Hey")

    }, []);

    useEffect(() => {
        // console.log("Form State modificado")

    }, [formState]);

    useEffect(() => {
        // console.log("email modificado")

    }, [email]);

    const handleInputChange = ({ target }) => {
        setFormState({
            ...formState,
            [target.name]: target.value
        })
    };



    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">

                <input
                    type="text"
                    className="form-control"
                    name="name"
                    placeholder="Tu nombre"
                    autoComplete="off"
                    value={name}
                    onChange={handleInputChange}
                />
                <br />
                <input
                    type="text"
                    className="form-control"
                    name="email"
                    placeholder="Tu email"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

            </div>

        {(name === '123')  && <Message />}

        </>

    )
}

