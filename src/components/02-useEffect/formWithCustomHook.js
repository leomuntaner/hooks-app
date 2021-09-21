import React from 'react';
import { useForm } from '../../hooks/useForm';

import './effects.css';

export const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formValues;

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);    
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>FormWithCustomHook</h1>
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
                <br />

                <input
                    type="password"
                    className="form-control"
                    name="password"
                    placeholder="******"
                    value={password}
                    onChange={handleInputChange}
                />

            </div>
            <br />
            <button className="btn btn-primary" type="submit"> Guardar </button>

        </form>

    )
}

