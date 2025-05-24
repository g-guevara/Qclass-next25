import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-2xl font-bold text-primary-600">Q</span>
      <span className="text-2xl font-bold text-gray-800">CLASS</span>
      <span className="ml-2 text-sm font-medium text-gray-600">Clean Rooms</span>
    </Link>
  );
};

export default Logo;