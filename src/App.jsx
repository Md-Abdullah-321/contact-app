import { useState } from 'react';
import './App.css';
import Input from './components/createContact/Input';
import Show from './components/displayContacts/Show';

function App() {
 
  const [contact, setContact] = useState([]);
  const [display, setDisplay] = useState(false);

  const getContact = (newContact) => {
    setContact([...contact, newContact]);
  }

  const handleDisplay = () => {
    setDisplay(!display);
  }
  return (
    <div>
        {/* Heading  */}
        <div className='container mx-auto py-10 bg-primary border-y-[15px] border-black mt-5 drop-shadow-md'>
            <h1 className='text-7xl text-center text-white uppercase font-bold'>Contacts</h1>
        </div>

        {/* Searching  */}

        {/* body  */}
        
        {display && <Input getContact= {getContact}/>}
        <Show contacts={contact}/>

        <div className="w-5/6 md:w-1/3 lg:w-1/4 mx-auto my-10">
          <button className='mx-auto text-center w-full bg-gray-200 p-2 rounded-md hover:bg-primary hover:text-white hover:font-bold'
          onClick={handleDisplay}>{display ? "Close Contact Form": "Create a new Contact"}</button>
        </div>
    </div>
  )
}

export default App
