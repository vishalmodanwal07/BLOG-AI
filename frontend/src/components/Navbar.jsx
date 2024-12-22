import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white shadow-lg z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="text-3xl font-bold">
          Blog-Ai
        </Link>
        <div className="space-x-4">
          <Link to="/" className="hover:text-red-400 text-2xl">Home</Link>
          <Link to="/create" className="hover:text-red-400 text-2xl">Create</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
