import { useState } from 'react';
function Form({onSubmit}) {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(query);
    setQuery('');
  };
    return (
      <div className="text-center text-lg ">
        <input type="text" required placeholder="Search Stock Images" name="name" value={query} onChange={handleChange} className="p-2 m-1 placeholder:text-dark-blue bg-light-blue text-dark-blue border-4 rounded-xl border-dark-blue"/>
        <button type="submit" onClick={handleSubmit} className="p-2 m-1 text-dark-blue font-extrabold border-4 rounded-xl border-dark-blue">Search
        </button>
        
      </div>
    )
}
export default Form;