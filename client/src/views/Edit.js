import React, { useEffect, useState } from 'react'
import Axios from 'axios';
import {Link} from '@reach/router';
import {navigate} from '@reach/router';

const Edit = props => {
    const [product, setProduct] =useState ({          //created state variable
        title: "",                                  //emulates
        price: "",                                  // the 
        description:""                              // back-end 
    }) 
    const [errors, setErrors] = useState({
        title: "",
        price:"",
        description:""
    })
    useEffect( () => {
		Axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res => setProduct(res.data.results))
		.catch(err => console.log(err))
},[props])    

    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        Axios.put(`http://localhost:8000/api/update/${props.id}`, product)
        .then(res => navigate(`/`))
        .catch(err => console.log(err));        
    }

return (
    <>
    <div className="centerForm">
        <form onSubmit={handleSubmit}>
        <div><h1>Product Manager Edit</h1></div>
            <div>
                <label>Title</label>
                <input 
                    type="text" 
                    name="title"
                    className="form-control"
                    onChange={handleChange} 
                    placeholder={product.title}
                    value={product.title}></input>
                    <span className="text-danger">{errors.title ? errors.title.message : " " }</span>
            </div>
            <div>
                <label>Price</label>
                <input 
                    type="text" 
                    name="price"
                    className="form-control"
                    onChange={handleChange} 
                    placeholder={product.price}
                    value={product.price}></input>
                    <span className="text-danger">{errors.price ? errors.price.message : " " }</span>
            </div>
            <div>
                <label>Description</label>
                <input 
                    type="text"
                    name="description" 
                    className="form-control"
                    onChange={handleChange} 
                    placeholder={product.description}
                    value={product.description}></input>
                    <span className="text-danger">{errors.description ? errors.description.message : " " }</span>
            </div>
            <input type="submit" value= "Submit"className="btn btn-primary mb-2"/>
        </form>
    </div>
    <div><Link to="/">Home</Link></div>
    </>
    );
}
export default Edit;
/*if(res.data.results){
                navigate('/');
            }
            else{
                console.log(res.data)
                setErrors(res.data)
                navigate('/');

            }
        })        */