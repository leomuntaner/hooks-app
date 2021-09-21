import React, { useMemo, useState } from 'react';
import { procesoPesado } from '../../helpers/ProcesoPesado';
import { useCounter } from '../../hooks/useCounter';
import '../02-useEffect/effects.css';

export const MemoHook = () => {

    const { counter, increment } = useCounter(3000);
    const [show, setShow] = useState(true)

    const memoProcesoPesado = useMemo(() => procesoPesado(counter), [ counter ]);

    return (
        <>
            <h1>MemoHook <small>{counter}</small> </h1>
            <hr />

            <p> { memoProcesoPesado } </p>

            <button className="btn btn-primary ml-3"
                onClick={increment}>
                +1
            </button>

            <button className="btn btn-outline-primary ml-5"
                onClick={() => { setShow(!show) }}>
                Show / Hide {JSON.stringify(show)}
            </button>
        </>
    )
}
