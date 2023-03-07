import React from 'react';
import styles from 'HeaderStyling.css';

const Header = () => {
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle}>New Albums and Singles</h1>
      <hr />
    </div>
  );
};

export default Header;