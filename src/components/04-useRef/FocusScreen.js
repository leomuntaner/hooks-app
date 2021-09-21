import React, { useRef } from 'react';
import '../02-useEffect/effects.css';

export const FocusScreen = () => {
    
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }
    
    return (
        <div>
            <h1>Focus screen</h1>
            <hr/>
            <input className="form-control"
                placeholder="Tu nombre"
                ref={ inputRef }/>
            <button className="btn btn-outline-primary mt-5"
                onClick={ handleClick }>
                Focus
            </button>
        </div>
    )
}
