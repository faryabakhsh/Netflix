import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/login.module.css";

const Login = () => {
  const handleLoginWithEmail = (e) => {
    console.log("hi button");
    e.preventDefault();
  };

  const handleOnChangeEmail = (e) => {
    setUserMsg("");
    console.log("event", e);
    const email = e.target.value;
    setEmail(email);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix SignIn</title>
      </Head>

      <header className={styles.header}>
        <div className={styles.headerWrapper}>
          <Link className={styles.logoLink} href="/">
            <div className={styles.logoWrapper}>
              <Image
                src="/static/netflix.svg"
                alt="Netflix logo"
                width="128px"
                height="34px"
              />
            </div>
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.mainWrapper}>
          <h1 className={styles.signinHeader}>Sign In</h1>
          <input
            type="text"
            placeholder="Emial address"
            className={styles.emailInput}
          />
          <p className={styles.userMsg}>{userMsg}</p>
          <button className={styles.loginBtn} onClick={handleLoginWithEmail}>
            Sign In
          </button>
        </div>
      </main>
    </div>
  );
};

export default Login;
