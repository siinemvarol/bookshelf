import axios from "axios";
import { useEffect } from "react";

import"./index.scss";

const Form = ({onChange}) => {

    const onSubmit = (e) => {
        e.preventDefault();
        const data = {
            name: e.target.name.value,
            releaseDate: e.target.releaseDate.value,
            author: e.target.author.value,
            pageCount: e.target.pageCount.value,
            isbn: e.target.isbn.value,
            gender: e.target.gender.value,
            publisher: e.target.publisher.value
        };

        axios.post("http://localhost:5000/book", data).then((res) => {
            console.log(res);
            onChange(res.data.id);            
         });         
    }

    return <form className="bookForm" onSubmit={(onSubmit)}>
        <input type="text" name="name" placeholder="Name"/>
        <input type="date" name="releaseDate"/>
        <input type="text" name="author" placeholder="Author"/>
        <input type="number" name="pageCount" placeholder="Page count"/>
        <input type="text" name="isbn" placeholder="ISBN"/>
        
        <label> <input type="radio" name="gender" value="action" />Action</label>
        
        <label> <input type="radio" name="gender" value="dystopian" />Dystopian</label>
        <input type="text" name="publisher" placeholder="publisher"/>
        <button type="submit">Submit</button>
    
       
    </form>
};

export default Form;