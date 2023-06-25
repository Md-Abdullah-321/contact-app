import { useState } from "react";
const initialstate = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    relation:''
}

const Input = ({getContact}) => {
    const [input, setInput] = useState(initialstate);

    const {fname, lname, email, phone, relation} = input;

    const handleChange = (event) => {
        setInput({...input, [event.target.name]: event.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getContact(input);
        alert("Contact Created Successfully")
    }
    return <div className="w-5/6 md:w-1/3 lg:w-1/4 mx-auto my-5">
        <form onSubmit={handleSubmit}>
            <div className="flex flex-col my-2">
                <label htmlFor="fname" className="text-gray-600">First Name:</label>
                <input type="text" className="outline-0 border-1 bg-gray-100 p-1 rounded-md text-gray-500"
                name="fname"
                value={fname}
                onChange={handleChange}/>
            </div>

            <div className="flex flex-col my-2">
                <label htmlFor="lname" className="text-gray-600">Last Name:</label>
                <input type="text" className="outline-0 border-1 bg-gray-100 p-1 rounded-md text-gray-500"
                name="lname"
                value={lname}
                onChange={handleChange}/>
            </div>

            <div className="flex flex-col my-2">
                <label htmlFor="email" className="text-gray-600">Email:</label>
                <input type="email" className="outline-0 border-1 bg-gray-100 p-1 rounded-md text-gray-500"
                name="email"
                value={email}
                onChange={handleChange}/>
            </div>

            <div className="flex flex-col my-2">
                <label htmlFor="phone" className="text-gray-600">Phone:</label>
                <input type="number" className="outline-0 border-1 bg-gray-100 p-1 rounded-md text-gray-500"
                name="phone"
                value={phone}
                onChange={handleChange}/>
            </div>

            <div className="flex flex-col my-2">
                <label htmlFor="select-relation" className="text-gray-600">Select Relation:</label>
                <select id="relation" className="text-gray-600 p-2 outline-none rounded-md"
                 name="relation"
                 value={relation}
                 onChange={handleChange}
               >

                    
                    <option value="family" className="outline-0 border-1 bg-gray-100 p-1 rounded-md text-gray-500">Family</option>

                    <option value="relative" className="outline-0 border-1 bg-gray-100 p-1 rounded-md text-gray-500">Relative</option>

                    <option value="office" className="outline-0 border-1 bg-gray-100 p-1 rounded-md text-gray-500">Office</option>

                    <option value="" className="outline-0 border-1 bg-gray-100 p-1 rounded-md text-gray-500">None</option>
                </select>

                <button className="w-full bg-gray-100 my-3 py-2 rounded-md text-gray-700 hover:bg-primary hover:text-white hover:font-bold">Create Contact</button>
            </div>
        </form>
    </div>
}

export default Input;