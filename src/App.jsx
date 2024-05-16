import { useState, useEffect } from 'react';
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Images from './components/Images'
import axios from 'axios';

const API_URL = 'https://api.unsplash.com/search/photos';
function App() {

  const [selected, setSelected] = useState("");
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalImages, setTotalImages] = useState(0);

  useEffect(() => {
    fetchImages(selected);
  }, [page]);

  const fetchImages = async (query) => {
    try {
      setSelected(query);
      const response = await axios.get(`${API_URL}?query=${query}&page=${page}&per_page=20&client_id=${import.meta.env.VITE_API_KEY}`);
      setImages(response.data.results);
      setTotalImages(response.data.total_pages);
      
    }
    catch (error) {
      console.error(error);
    }
  };

  const handleFormSubmit = (query) => {
    setPage(1);
    fetchImages(query);
  };
  return (
    <>
      <Header/> 
      <Form onSubmit={handleFormSubmit}/> 
      <Images images={images}/>
      <div className='text-center text-lg m-7'> 
        {page > 1 && <button onClick={() => setPage(page - 1)} className="p-2 m-1 text-dark-blue font-extrabold border-4 rounded-xl border-dark-blue hover:bg-coral">Previous</button>}
        {page < totalImages && <button onClick={() => setPage(page + 1)} className="p-2 m-1 text-dark-blue font-extrabold border-4 rounded-xl border-dark-blue hover:bg-coral" >Next</button>}
      </div>
    </>
  )
}

export default App
