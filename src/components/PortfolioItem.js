import React from 'react';

const PortfolioItem = ({ item }) => (
  <div className="bg-white shadow-md rounded p-4">
    <img src={item.image.fields.file.url} alt={item.title} className="w-full h-48 object-cover rounded" />
    <h2 className="text-xl mt-2">{item.title}</h2>
    <p className="mt-2">{item.description}</p>
  </div>
);

export default PortfolioItem;
