import {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link} from '@reach/router';

const Main = props => {

    const [product, setProduct] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:8000/api/product')
        .then(res => setProduct(res.data.results))
        .catch(err => console.log(err.errors))
    },[])

    return (
        <>
        <div><Link to="/create">Create A Product</Link></div>
        <table className="table table-hover">
            <thead className="thead-dark">
                <tr>
                    <td>Title</td>
                    <td>Price</td>
                    <td>Description</td>
                </tr>
            </thead>
            <tbody>
                {
                product.map((p, i) =>   
                <tr key={i}>
                    <td>{p.title}</td>
                    <td>{p.price}</td>
                    <td>{p.description}</td>
                    <td><Link to="/show">Details </Link>
                    <Link to="/edit">Edit</Link></td>
                </tr>
                )
                }
            </tbody>
        </table>
        </>
    );
}
export default Main;