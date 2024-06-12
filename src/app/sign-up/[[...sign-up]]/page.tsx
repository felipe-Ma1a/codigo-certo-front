import { SignUp } from "@clerk/nextjs";
import styles from "./styles.module.css";

const SignUpPage = () => {
  return (
    <div className={styles.signUpContainer}>
      <SignUp />
    </div>
  );
};

export default SignUpPage;
