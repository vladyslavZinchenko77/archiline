import React, { FC } from 'react';

import { Avatar } from '@mui/material';

import './Employee.scss';

interface EmployeeProps {
  name: string;
  photo?: string;
  title: string;
  style?: React.CSSProperties;
}

const Employee: FC<EmployeeProps> = ({ name, title, photo, style }) => {
  return (
    <div style={style} className="employee">
      <Avatar sx={{ bgcolor: 'red' }} alt={name} src={photo} />
      <div className="employee__text">
        <p className="employee__text-name">{name}</p>
        <p className="employee__text-title">{title}</p>
      </div>
    </div>
  );
};

export default Employee;
