import Image from 'next/image';

import Header from '@/components/ui/Header';
import Hero from '@/components/ui/Hero';
import About from '@/components/ui/About';
import WhatWeDo from '@/components/ui/WhatWeDo';
import ImgSection from '@/components/common/ImgSection';
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
      {/* <main>
        <Hero />
        <About />
        <ImgSection
          width={1600}
          height={600}
          url={'/img/interior3.jpg'}
          alt="interior"
        />
        <WhatWeDo />
        <ImgSection
          width={1600}
          height={600}
          url={'/img/interior1.jpg'}
          alt="interior"
        />
        <Customers />
        <ImgSection
          width={1600}
          height={600}
          url={'/img/interior2.jpg'}
          alt="interior"
        />
        <Projects />
        <Team />
        <NextProject />
        <Footer />
      </main> */}
    </>
  );
}
