import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';
function App() {

  const [images, setImages] = useState([]);
  const [totalImages, setTotalImages] = useState(0);

  const fetchImages = async (query) => {
    try {
      const response = await axios.get(`${API_URL}?query=${query}&page=1&per_page=20&client_id=${import.meta.env.VITE_API_KEY}`);
      setImages(response.data.results);
      setTotalImages(response.data.total_pages);
      // console.log(images);
      // console.log(totalImages);

    }
    catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = (query) => {
    console.log(query);
    console.log(import.meta.env.VITE_API_KEY);
    // You can perform further actions here, such as fetching images based on the query
    fetchImages(query);
  };
  return (
    <>
      <Header/> 
      <Form onSubmit={handleFormSubmit}/> 
      <div className="container">
        <div className="row">
          {images.map((image) => (
            <div key={image.id} className="col-md-4">
              <img src={image.urls.small} alt={image.alt_description} className="img-fluid"/>
            </div>
          ))}
        </div>  
      </div>
    </>
  )
}

export default App
