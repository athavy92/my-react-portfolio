import React from 'react';
import { NavLink } from 'react-router-dom';
import { SocialIcon } from 'react-social-icons';

export default function NavBar() {
  return (
    <header className="bg-gray-900 bg-gradient-to-r from-black via-gray-700 to-blue-400 shadow-lg">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink to="/" exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 mr-4 text-black-700 hover:text-blue-800 text-4xl font-bold cursive tracking-widset">
            Home
          </NavLink>
          <NavLink to="/post"
            activeClassName="text-white"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-400 hover:text-blue-800">
            Blog Posts
          </NavLink>
          <NavLink to="/project"
            activeClassName="text-white"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-400 hover:text-blue-800">
            Projects
          </NavLink>
          <NavLink to="/about"
            activeClassName="text-white"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-blue-400 hover:text-blue-800">
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={ {height: 35, width: 35} }/>
          <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={ {height: 35, width: 35} }/>
          <SocialIcon url="" className="mr-4" target="_blank" fgColor="#fff" style={ {height: 35, width: 35} }/>
        </div>
      </div>
    </header>
  )
}