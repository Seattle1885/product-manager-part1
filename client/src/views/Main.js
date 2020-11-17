import {useState, useEffect} from 'react';
import Axios from 'axios';
import {Link, navigate} from '@reach/router';

const Main = props => {

    const [product, setProduct] = useState([]);
    const [remove, setRemove] = useState(false);

    useEffect(() => {
        Axios.get('http://localhost:8000/api/product')
        .then(res => setProduct(res.data.results))
        .catch(err => console.log(err.errors))
    },[remove])

    const ProductDelete = (id, title) => {
        Axios.delete(`http://localhost:8000/api/delete/${id}`)
            .then(res => {
                if(res.data.results){
                    setRemove(!remove);
                    console.log("Product removed")
                    .then(res => navigate('/'))
                }
            })
                .catch(err => console.log(err))
    }

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
                    <td><Link to={`/show/${p._id}`}>Details </Link>
                    <Link to={`/edit/${p._id}`}>Edit </Link>
                    <button
                        onClick={()=> ProductDelete(p._id, p.title)}
                        className="btn btn-danger">Delete</button></td>
                </tr>
                )
                }
            </tbody>
        </table>
        </>
    );
}
export default Main;