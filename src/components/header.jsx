import React, { Component } from 'react';
import './headerCss.css'
class Header extends Component {
    state = {  }
    render() { 
        return ( <div className='primary'>
            <h1>Defect Tracker</h1>
        </div> );
    }
}
 
export default Header;