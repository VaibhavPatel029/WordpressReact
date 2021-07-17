import React, {useEffect, useState} from 'react'
import axios from 'axios';
import Bookitem from './Bookitem'
function Books() {
    const [books, setbooks] = useState();
    const [isLoaded, setisLoaded] = useState(false);
    
    useEffect( () => {
        axios.get('http://localhost:8000/wp-json/wp/v2/books')
        .then((res) => {
            setbooks(res.data);
            setisLoaded(true);
        })
        .catch(err => console.log(err));
    }, []) 
    
    return (
        <div>
            {isLoaded ?(<div>
                {
                    books.map(book => (
                       <Bookitem key={book.id} book={book} />
                    ))
                }
            </div>) :(<h3>Loading...</h3>)}
        </div>
    )
}

export default Books
