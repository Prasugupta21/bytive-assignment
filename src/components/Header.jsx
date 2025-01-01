import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
            <h1 className="text-xl font-bold sm:text-2xl lg:text-3xl">ToDo List</h1>
            <nav className="space-x-4 text-sm sm:text-base lg:text-lg">
                <Link to="/" className="hover:underline">
                    Home
                </Link>
                <Link to="/add-task" className="hover:underline mr-4 sm:mr-6 lg:mr-8">
                    Add Task
                </Link>
            </nav>
        </div>
    </header>
);

export default Header;
