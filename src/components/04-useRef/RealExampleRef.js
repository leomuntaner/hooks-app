import React, { useState } from 'react';
import { MultipleCustomHooks } from '../03-examples/MultipleCustomHooks';
import '../02-useEffect/effects.css';

export const RealExampleRef = () => {

    const [show, setShow] = useState(false);

    return (
        <div className="mt-50">
            <h1>RealExampleRef</h1>
            <hr />
            <div>
                {show && <MultipleCustomHooks />}

                <button className="btn btn-primary -mt10"
                    onClick={() => {
                        setShow(!show);
                    }}>
                    Show / Hide
                </button>
            </div>
        </div>
    )
}
