import { useState } from 'react';
import { photos } from '../data/photos';
import { Photo } from '../types';

export const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState<Photo['category'] | 'all'>('all');

  const filteredPhotos = selectedCategory === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === selectedCategory);

  return (
    <div className="py-12">
      <div className="flex justify-center space-x-4 mb-8">
        {['all', 'wedding', 'event', 'party'].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category as Photo['category'] | 'all')}
            className={`px-4 py-2 rounded-md ${
              selectedCategory === category
                ? 'bg-blue-500 text-white'
                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredPhotos.map((photo) => (
          <div key={photo.id} className="group relative">
            <img
              src={photo.url}
              alt={photo.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-75 transition-opacity duration-300 rounded-lg">
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-white p-4">
                <h3 className="text-xl font-bold mb-2">{photo.title}</h3>
                <p className="text-sm text-center">{photo.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};