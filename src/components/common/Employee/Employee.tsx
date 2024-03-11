import React, { FC } from 'react';

import { Avatar } from '@mui/material';
import Image from 'next/image';

import './Employee.scss';

interface EmployeeProps {
  name: string;
  url?: string | any;
  title: string;
  style?: React.CSSProperties;
  alt?: string;
}

const Employee: FC<EmployeeProps> = ({ name, title, url, style, alt }) => {
  return (
    <div style={style} className="employee">
      <Avatar sx={{ bgcolor: 'red' }} alt={alt} src={url} />
      <div className="employee__text">
        <p className="employee__text-name">{name}</p>
        <p className="employee__text-title">{title}</p>
      </div>
    </div>
  );
};

export default Employee;
