import React, { type ReactNode } from "react";
import styles from "./layout.module.scss";
import { Link } from "@tanstack/react-router";

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>The Movie Vault</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
      </div>
      <hr />
      {children}
    </main>
  );
};

export default Layout;
