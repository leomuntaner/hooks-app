import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';
import './effects.css';


export const MultipleCustomHooks = () => {

    const {counter, increment} = useCounter( 1 );
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

 

    const{ quote, author } = !!data && data[0];

    return (
        <div>
            <h1>Breaking bad quotes</h1>
            <hr />

            {loading ? 
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                )
                :
                (
                    <blockquote className="blockquote text-end">
                        <p className="mb-0"> { quote } </p><br/>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>

                )
            }
            <br/>
            <button className="btn btn-primary" onClick={increment} > Next quote </button>
        </div>
    )
}
