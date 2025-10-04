import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 className="text-2xl font-bold">Mega Loja Fitness</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <a
                href="#home"
                className="hover:text-gray-400 transition duration-300"
              >
                Login
              </a>
            </li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;