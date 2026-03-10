import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "./Register.module.scss";

const RegisterView = () => {
  const { push } = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Name:", name, "Email:", email, "Password:", password);
    push("/login");
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1 className={styles.title}>Register</h1>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            type="text"
            placeholder="Nama Lengkap"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.input}
          />
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
          <button type="submit" className={styles.button} disabled={!name || !email || !password}>
            Daftar
          </button>
        </form>
        <p className={styles.footer}>
          Sudah punya akun?{" "}
          <Link href="/auth/login" className={styles.link}>
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default RegisterView;
