'use client';
import React, { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import { LinearProgress, Box, Typography } from '@mui/material';
import './Loading.scss';

const Loading: FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= 100 ? 0 : prevProgress + 10
      );
    }, 400);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="loding">
      <div className="loding__wrap">
        <Image
          className="loding__img"
          alt="Archiline logo"
          width={50}
          height={50}
          src={'/svg/logo.svg'}
        />

        <LinearProgress
          variant="determinate"
          value={progress}
          style={{ marginTop: 24 }}
        />
      </div>
    </div>
  );
};

export default Loading;
