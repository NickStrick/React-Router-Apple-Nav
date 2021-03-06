import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";


export default class SubLinks extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      
        <nav className={`nav-links subLinks`} id={this.props.link.name}>
        {this.props.link.subLinks.map((link,index) => (
          <SubLink key={`sub-${index}`} link={link} />
        ))}
        
        </nav>
    );
  }
};

function SubLink({link}) {
  const { name } = link;
  return(
    <div >
      <NavLink to={`/${name}`} className='subTab'>
      <img src={link.img} />
      <p>{name}</p>
      </NavLink>
    </div>
  )
}