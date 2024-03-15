import React, { FC } from 'react';
import Image from 'next/image';

const Loading: FC = () => {
  return (
    <div>
      <Image
        alt="Archiline logo"
        width={50}
        height={50}
        src={'/svg/logo.svg'}
      />
      Loading
    </div>
  );
};

export default Loading;
