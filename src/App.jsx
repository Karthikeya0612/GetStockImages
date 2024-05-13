import { useState } from 'react';
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleFormSubmit = (query) => {
    setSearchQuery(query);
    console.log(query);
    // You can perform further actions here, such as fetching images based on the query
  };
  return (
    <>
      <Header/> 
      <Form onSubmit={handleFormSubmit}/>   
    </>
  )
}

export default App
