import {useState} from 'react';                     //since we are using a form we want to use state
import {navigate} from '@reach/router';
import Axios from 'axios';

    const Create = props => {
        const [form, setForm] =useState ({          //created state variable
        title: "",                                  //emulates
        price: "",                                  // the 
        description:""                              // back-end 
    }) 
        const [errors, setErrors] = useState({
            title: "",
            price:"",
            description:""
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
                setErrors(res.data)

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
                    <span className="text-danger">{errors.title ? errors.title.message : " " }</span>
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
                    <span className="text-danger">{errors.price ? errors.price.message : " " }</span>
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
                    <span className="text-danger">{errors.description ? errors.description.message : " " }</span>
            </div>
            <input type="submit" value= "Submit"className="btn btn-primary mb-2"/>
        </form>
    </div>
    </>
    );
}
export default Create;