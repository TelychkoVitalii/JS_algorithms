import React from "react";
import Header from '../components/Header';
import { Link } from 'gatsby';

export default () => (
  <div style={{ color: 'teal' }}>
    <Header headerText='About Gatsby' />
    <p>Such wow. Very React.</p>
    <Link to='/contact'>Contact</Link>
  </div>
)
