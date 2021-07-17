import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
function Bookitem({ book }) {
  const {id} = book;
  const [imgUrl, setimgUrl] = useState("");
  const [bookauthor, setbookauthor] = useState("");
  useEffect(() => {
  const { featured_media, author } = book;
    const getImageUrl = axios.get(
      `http://localhost:8000/wp-json/wp/v2/media/${featured_media}`
    );
    const getAuthor = axios.get(
      `http://localhost:8000/wp-json/wp/v2/users/${author}`
    );
    Promise.all([getImageUrl, getAuthor])
      .then((res) => {
        setimgUrl(res[0].data.media_details.sizes.full.source_url);
        setbookauthor(res[1].data.name);
      })
      .catch((err) => console.log(err));
  });
  console.log(imgUrl, bookauthor)
  return (
    <div>
      
        <div>
          <h2 style={{marginBottom: '0'}}>{book.title.rendered}</h2>
          <small>
            Review by <span>{bookauthor}</span>
          </small>
          <img style={{width: '40%', height: '40%'}} src={imgUrl} alt={book.title.rendered} />
          <div
            dangerouslySetInnerHTML={{
              __html: `<p>${book.excerpt.rendered}</p>`,
            }}
          >
          </div>
          <Link to={`/book/${id}`}>Read Review</Link>
        </div>
    </div>
  );
}

export default Bookitem;
