import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-blue-600 text-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">To-Do List Manager</h1>
            <nav className="space-x-4">
                <Link to="/" className="hover:underline">
                    Home
                </Link>
                <Link to="/add-task" className="hover:underline">
                    Add Task
                </Link>
            </nav>
        </div>
    </header>
);

export default Header;
