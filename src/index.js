import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from 'react-router-dom';
import router from "./router";
import {ContextProvider} from "./contexts/ContextProvider";

const books = [
    {
        "id": "061399d6-d484-4628-bf4f-bab7e57b17fd",
        "author": "Jaron",
        "title": "Awesome Bronze Soap",
        "image": "https://loremflickr.com/640/480?lock=3322371375104000"
    },
    {
        "id": "604b9eb4-b62b-41a9-9858-1ca80f94eb83",
        "author": "Henry",
        "title": "Awesome Plastic Cheese",
        "image": "https://loremflickr.com/640/480?lock=2028988698460160"
    },
    {
        "id": "e92caccb-cebc-4928-b4ce-f28808f163ad",
        "author": "Garrison",
        "title": "Awesome Steel Shoes",
        "image": "https://picsum.photos/seed/mc9FU/640/480"
    },
    {
        "id": "7a32a465-9e63-4f29-8eef-7fdc3d322807",
        "author": "Ima",
        "title": "Oriental Soft Shirt",
        "image": "https://picsum.photos/seed/cFovdQpg/640/480"
    },
    {
        "id": "35e0a837-cf4f-4cf8-a436-3914a7898450",
        "author": "Rudy",
        "title": "Modern Concrete Tuna",
        "image": "https://picsum.photos/seed/mXVjzj/640/480"
    }
]

const BookList = () => {

    return (
        <>
            <div className="booklist">
                {books.map((book,index)=>{
                    return(

                        <Book  key={index}
                           book={book}
                        />
                    );
                })}
            </div>
        </>

    )
}
const Book = (props) => {
    const {author, title,image,children } = props.book
    console.log(author,title);
    return (
        <div className="book">

            <img src={image} alt={title} />
            <h2>{title}</h2>
            <h4>{author}</h4>

        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BookList/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
