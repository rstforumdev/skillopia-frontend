import type { NextPage } from 'next';
import { Title } from '@mantine/core';
import { Hero } from '../components/Pages/Index/Hero/Hero';

const Home: NextPage = () => {
  return (
    <div>
      <Hero />
    </div>
  );
};

export default Home;
