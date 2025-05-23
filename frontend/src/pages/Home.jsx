import React from 'react';
import Header from '../components/Header';

const Home = () => (
  <>
    <Header />
    <section className="p-8 text-center">
      <h1 className="text-4xl font-bold">Welcome to Naths EncroLink</h1>
      <p className="text-lg mt-4">Secure, encrypted messaging without revealing personal contacts.</p>
    </section>
  </>
);

export default Home;

