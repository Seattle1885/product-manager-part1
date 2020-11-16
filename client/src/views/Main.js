import {useState, useEffect} from 'react';
import Axios from 'axios';

const Main = props => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        Axios.get('http:localhost:8000/api/products')
        .then(res => setProduct(res.data.results))
        .catch(err => console.log(err.errors))
    },[])

    return (
        <div>
        
        </div>
    );
}
export default Main;