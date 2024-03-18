'use client';
import { FC, useEffect, useState } from 'react';
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
import Loading from '@/components/common/Loading';
import './globals.scss';
import '../styles/common.scss';

const Home: FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoading(false);

    window.addEventListener('load', handleLoad);

    setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Header />
          <main>
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
          </main>
        </>
      )}
    </>
  );
};

export default Home;
