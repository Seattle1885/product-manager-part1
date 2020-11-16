import {useState} from 'react';                     //since we are using a form we want to use state
import {navigate} from '@reach/router';
import Axios from 'axios';

    const Create = props => {
        const [form, setForm] =useState ({          //created state variable
        title: "",                                  //emulates
        price: "",                                  // the 
        description:""                              // back-end 
    }) 

    const handleChange = e => {
        setForm({
            ...form,
            [e.target.name]:e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        Axios.post('http://localhost:8000/api/product/create', form)
        .then(res => {
            if(res.data.results){
                navigate('/');
            }
            else{
                console.log(res.data)
            }
        })
    }

return (
    <>
    <div className="centerForm">
        <form onSubmit={handleSubmit}>
        <div><h1>Product Manager</h1></div>
            <div>
                <label>Title</label>
                <input 
                    type="text" 
                    name="title"
                    className="form-control"
                    onChange={handleChange} 
                    placeholder="Enter Title"
                    value={form.title}></input>
            </div>
            <div>
                <label>Price</label>
                <input 
                    type="text" 
                    name="price"
                    className="form-control"
                    onChange={handleChange} 
                    placeholder="Enter Price"
                    value={form.price}></input>
            </div>
            <div>
                <label>Description</label>
                <input 
                    type="text"
                    name="description" 
                    className="form-control"
                    onChange={handleChange} 
                    placeholder="Enter Description"
                    value={form.description}></input>
            </div>
            <input type="submit" value= "Submit"className="btn btn-primary mb-2"/>
        </form>
    </div>
    </>
    );
}
export default Create;