import { useLayoutEffect, useRef, useState } from 'react';
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './layer.css';


export const Layout = () => {

    const { counter, increment } = useCounter(1);
    const { data } = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote } = !!data && data[0];
    const pTag = useRef();
    const [boxSize, setBoxSize] = useState({});

    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect());
    }, [quote])



    return (
        <div>
            <h1>Layout Effect</h1>
            <hr />

            <blockquote
                ref={pTag}
                className="blockquote text-end">
                <p className="mb-0"> {quote} </p><br />
            </blockquote>
            <br />
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>
            <button className="btn btn-primary" onClick={increment} > Next quote </button>
        </div>
    )
}
