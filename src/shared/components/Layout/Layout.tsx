import React, { type ReactNode } from "react";
import styles from "./layout.module.scss";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>The Movie Vault</h1>
      {children}
    </main>
  );
};

export default Layout;
