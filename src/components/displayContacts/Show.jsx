import React, { useState } from "react";

const Show = ({contacts}) => {
    const [filter, setFilter] = useState('all');
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setFilter(e.target.value);
    }
    let filteredContacts = contacts;
    if(filter !== 'all'){
        filteredContacts = contacts.filter(contact => contact.relation === filter);
    }
    
    const handleInputChange = (e) => {
        setSearch(e.target.value);
    }

    if(search !== ''){
        filteredContacts = filteredContacts.filter(contact => contact.fname.includes(search) || contact.lname.includes(search) || contact.email.includes(search))
    }
    return (
        <div>
            <div className="w-5/6 md:w-1/3 lg:w-1/3 mx-auto my-10 flex justify-around">
                <div className="w-1/4">
                    <select name="filter" id="filter" className="w-full text-gray-600 p-2 outline-none rounded-md"
                    value={filter}
                    onChange={handleChange}>
                        <option value="all">All</option>
                        <option value="family">Family</option>
                        <option value="relative">Relative</option>
                        <option value="office">Office</option>
                    </select>
                </div>

                <div className="w-2/4">
                    <input type="text" className="w-full outline-0 border-2 bg-gray-100 p-1 rounded-md text-gray-500"
                    value={search}
                    onChange={handleInputChange}/>
                </div>
            </div>
            <div className="w-5/6 md:w-1/2 lg:w-1/2 mx-auto my-5">
                {filteredContacts.length > 0 && <table className="w-full">
                    <thead className="text-center">
                        <tr className="border mx-1">
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Relation</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {filteredContacts.map(contact => <tr className="border">
                            <td>{contact.fname} {contact.lname}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.relation}</td>
                        </tr>)}
                    </tbody>
                </table>}
            </div>
        </div>
    )
}

export default Show;