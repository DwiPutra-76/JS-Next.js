import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Login.module.scss";

const LoginView = () => {
  const { push } = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    push("/dashboard");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Login</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.input}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button type="submit" className={styles.button} disabled={!email || !password}>
            Login
          </button>
        </form>
        <p className={styles.footer}>
          Belum punya akun?{" "}
          <Link href="/auth/register" className={styles.link}>
            Daftar
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginView;
