// pages/index.js
import React, { useState } from 'react';
import Layout from '../components/Layout';
import Embed from '../components/Embed';

const Home = () => {
  const [embedUrl, setEmbedUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputUrl = e.target.elements.url.value;
    setEmbedUrl(inputUrl);
  };

  return (
    <Layout onSubmit={handleSubmit}>
      {embedUrl && <Embed url={embedUrl} />}
    </Layout>
  );
};

export default Home;
