import Image from 'next/image';

import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import WhatWeDo from '@/components/ui/WhatWeDo';
import Customers from '@/components/ui/Customers';
import NextProject from '@/components/ui/NextProject';
import Projects from '@/components/ui/Projects';
import Team from '@/components/ui/Team';
import Footer from '@/components/ui/Footer';

import './globals.scss';
import '../styles/common.scss';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <WhatWeDo />
        <Customers />
        <NextProject />
        <Projects />
        <Team />
        <Footer />
      </main>
    </>
  );
}
