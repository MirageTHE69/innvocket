import React, { useEffect, useState } from 'react';
import apiService from '../apiService';

const Usertable = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    // Fetch contacts data from the API when the component mounts
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      const response = await apiService.get('/contacts');
      setContacts(response.data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
    }
  };

 
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Data Set</h1>
      <div className="overflow-x-auto flex items-center">
        <table className="table-auto w-full border-collapse border border-gray-400  ">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 border-[1px] border-black ">Name</th>
              <th className="px-4 py-2 border-[1px] border-black ">Email</th>
              <th className="px-4 py-2 border-[1px] border-black">Message</th>
             
            </tr>
          </thead>
          <tbody className=" ">
            {contacts.map(contact => (
              <tr key={contact._id} className="border-t border-gray-400 ">
                <td className="px-4 py-2 border-[1px] border-black text-center">{contact.name}</td>
                <td className="px-4 py-2 border-[1px] border-black text-center">{contact.email}</td>
                <td className="px-4 py-2 border-[1px] border-black text-center">{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Usertable;
