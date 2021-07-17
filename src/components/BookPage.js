import axios from 'axios';
import React, {useEffect, useState} from 'react'

function BookPage({match}) {
    const [book, setbook] = useState('');
    useEffect(() => {
        axios.get(`http://localhost:8000/wp-json/wp/v2/books/${match.params.id}`)
        .then(res => setbook(res.data))
        .catch(err => {console.log(err)})
    },[])
    return (
        <div>
            <h1>{book.title.rendered}</h1>
            <div
            dangerouslySetInnerHTML={{
              __html: `<p>${book.content.rendered}</p>`,
            }}
          >
          </div>
        </div>
    )
}

export default BookPage
