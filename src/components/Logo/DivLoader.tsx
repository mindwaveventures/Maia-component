import React from 'react';
import './logo.css';

interface DivLoaderProps {}

const DivLoader: React.FC<DivLoaderProps> = () => {
  return <div className="skeleton-logo" />;
};

export default DivLoader;
