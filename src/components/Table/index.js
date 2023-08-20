import {useEffect, useState} from "react";
import axios from "axios";

const Table = ({newBookId}) => {

    const [books, setBooks] = useState([]);

    useEffect(() => {
        let unmounted = false;
        const source = axios.CancelToken.source();

        axios.get("http://localhost:5000/book", {cancelToken: source.token})
        .then((response) => {
            if(!unmounted) {
                setBooks(response.data);
            }
        }).catch((err) => {
            if(!unmounted){
                console.log(err.message);
            }
        });

        return () => {
            unmounted = true;
            source.cancel();
        }
       
    }, [newBookId]);

    useEffect(() => {
        const interval = setInterval(() => {
            console.log("calisti");
        }, 3000);
        return () => {
            console.log("component'tan cikti");
            clearInterval(interval);
        }
    }, []);

    return <table>
        <thead>
            <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>RELEASE DATE</th>
                <th>AUTHOR</th>
                <th>PAGE COUNT</th>
                <th>ISBN</th>
                <th>GENDER</th>
                <th>PUBLISHER</th>
            </tr>
        </thead>
        <tbody>
            {books.map((book) => {
                return (
                    <tr key={book.id}>
                    <td>{book.id}</td>
                    <td>{book.name}</td>
                    <td>{book.releaseDate}</td>
                    <td>{book.author}</td>
                    <td>{book.pageCount}</td>
                    <td>{book.isbn}</td>
                    <td>{book.gender}</td>
                    <td>{book.publisher}</td>
                </tr>
                )
            })}
           
        </tbody>
    </table>
}

export default Table;