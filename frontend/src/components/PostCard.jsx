import React from 'react';

function PageCard({ title, content, onEdit, onDelete, loading, error }) {
  if (loading) {
    return <p className="text-center text-xl font-medium text-gray-600">Loading...</p>;
  }

  if (error) {
    return <p className="text-center text-xl text-red-500 font-medium">{error}</p>;
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-50 to-gray-200">
      <div className="max-w-2xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          {title || 'Post Title'}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-6">
          {content || 'No content available.'}
        </p>
        <div className="flex justify-between">
          <button
            onClick={onEdit}
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300 transition duration-300"
          >
            Edit
          </button>
          <button
            onClick={onDelete}
            className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300 transition duration-300"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default PageCard;
