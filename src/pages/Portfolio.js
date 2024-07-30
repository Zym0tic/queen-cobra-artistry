import React, { useEffect, useState } from 'react';
import client from '../contentful';
import PortfolioItem from '../components/PortfolioItem';

const Portfolio = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    client.getEntries({ content_type: 'portfolioItem' })
      .then((response) => {
        setItems(response.items);
      })
      .catch(console.error);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {items.map((item) => (
        <PortfolioItem key={item.sys.id} item={item.fields} />
      ))}
    </div>
  );
};

export default Portfolio;
