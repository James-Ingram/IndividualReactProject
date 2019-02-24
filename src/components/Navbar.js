import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';


class Navbar extends Component {
  render() {
    return (
        <nav>
            <ul>
                <li className="active"><Link to='/'>Products</Link></li>
                <li><Link to='/stock'>Stock</Link></li>
            </ul>
        </nav>
    );
  }
}

export default Navbar;
