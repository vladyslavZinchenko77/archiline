import React, { FC } from 'react';
import Image from 'next/image';

interface ImgSectionProps {
  url: string;
  alt: string;
  width: number;
  height: number;
}

const ImgSection: FC<ImgSectionProps> = ({ width, height, url, alt }) => {
  return <Image width={width} height={height} src={url} alt={alt} />;
};

export default ImgSection;
