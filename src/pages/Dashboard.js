import React from 'react';

function Dashboard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
        <div className="mb-4">
          <button className="bg-green-500 text-white py-2 px-4 rounded">Create Note</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {/* Placeholder for notes */}
          <div className="bg-gray-200 p-4 rounded">Note 1</div>
          <div className="bg-gray-200 p-4 rounded">Note 2</div>
          <div className="bg-gray-200 p-4 rounded">Note 3</div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;