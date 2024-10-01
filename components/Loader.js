'use client'; // For Next.js

import styles from './Loader.module.css'; // Import the CSS module

const Loader = () => {
  return (
    <div className={styles.loader}></div> // Apply the loader class from the CSS module
  );
};

export default Loader;