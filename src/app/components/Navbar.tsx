import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";

export default function Navbar() {
  return (
    <main className={styles.container}>
     <Link href='/'className="links">Home</Link>
     <Link href='/menu'className="links">Menu</Link>
     <Link href='/'className="links">Logo</Link>
     <Link href='/'className="links">Contacts</Link>
     <div className={styles.icons}>Icons
        <div className="icon"></div>
        <div className="icon"></div>
        <div className="icon"></div>
     </div>
    </main>
  );
}