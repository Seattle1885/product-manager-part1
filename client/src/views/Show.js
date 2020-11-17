import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import {Link} from '@reach/router';

const Show = props => {

    const [product, setProduct] = useState({          //created state variable
        title: "",                                  //emulates
        price: "",                                  // the 
        description:""                              // back-end 
    });
	    
	useEffect( () => {
		Axios.get(`http://localhost:8000/api/product/${props.id}`)
		.then(res => setProduct(res.data.results))
		.catch(err => console.log(err))
},[props])

    return (
        <>
        <div className="card">
            <div className="card-body">
                <h4>{product.title}</h4>
                <p className="card-text">{product.description}</p>
                <p>{product.price}</p>
            </div>
            
        <div><Link to="/">Home</Link></div>
        </div>
        </>
    );
}
export default Show;