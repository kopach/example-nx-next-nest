import React from 'react';
import styles from './simple-component-react-16.module.css';

/* eslint-disable-next-line */
export interface SimpleComponentReact16Props {}

export function SimpleComponentReact16(props: SimpleComponentReact16Props) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to SimpleComponentReact16!</h1>
      <div>React Version - {React.version}</div>,
    </div>
  );
}

export default SimpleComponentReact16;
