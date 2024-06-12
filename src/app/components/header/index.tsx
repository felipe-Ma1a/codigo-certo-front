import Link from "next/link";
import Image from "next/image";
import { auth } from "@clerk/nextjs/server";

import { UserButton } from "@clerk/nextjs";

import codigoCertoLogo from "../../../../public/images/codigo-certo-logo.jpg";
import styles from "./styles.module.css";

export const Header = () => {
  const userId = auth().userId;

  return (
    <nav className={styles.navContainer}>
      <div>
        <Link href="/">
          <Image
            src={codigoCertoLogo}
            alt="Logo codigo certo"
            quality={100}
            height={55}
            width={55}
          />
        </Link>
      </div>
      <div className={styles.linkContainer}>
        {!userId && (
          <>
            <Link href="/sign-in">Entrar</Link>
            <Link href="/sign-up">Cadastrar</Link>
          </>
        )}
        <UserButton afterSignOutUrl="/" />
      </div>
    </nav>
  );
};
