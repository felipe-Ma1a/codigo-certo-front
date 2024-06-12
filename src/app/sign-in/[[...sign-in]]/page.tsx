import { SignIn } from "@clerk/nextjs";
import styles from "./styles.module.css";

const SignInPage = () => {
  return (
    <div className={styles.signInContainer}>
      <SignIn />
    </div>
  );
};

export default SignInPage;
