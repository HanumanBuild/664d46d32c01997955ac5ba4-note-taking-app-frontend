import React, { useState, useEffect } from 'react';
import axios from '../api/axios';

function Dashboard() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/notes', {
          headers: {
            'x-access-token': token,
          },
        });
        setNotes(response.data);
      } catch (error) {
        console.error('Failed to fetch notes:', error);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
        <div className="mb-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded">Create Note</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map((note) => (
            <div key={note._id} className="bg-gray-200 p-4 rounded">
              <h3 className="text-lg font-bold">{note.title}</h3>
              <p>{note.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;