import React from 'react';
import Layout from '../components/layout';

const Surprise = ({ location }) => (
    <Layout>
      <h1>Surprise, {location.state.name}! 🎉</h1>
    <p>You signed up!</p>
      
    </Layout>
  )
  
  
  
export default Surprise
  