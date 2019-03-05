import React from "react";
import Header from '../components/Header';
import { Link } from 'gatsby';

export default () => (
  <div style={{ color: 'teal' }}>
    <Header headerText='Contact' />
    <p>Such wow. Very React.</p>
    <Link to='/'>Home</Link>
  </div>
)