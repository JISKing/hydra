import React from 'react';
import './menuFixed.scss';

function MenuFixed({ showMenu }) {
  return (
    <>
      {showMenu && (
        <div className="menuFixed">
          <nav className="menu">
            <a href="#aboutCon">ABOUT</a>
            <a href="#servicesCon">SERVICES</a>
            <a href="#technologies">TECHNOLOGIES</a>
            <a href="#processCon">HOW TO</a>
          </nav>
        </div>
      )}
    </>
  );
}

export default MenuFixed;
