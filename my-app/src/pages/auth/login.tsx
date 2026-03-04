/* eslint-disable react-hooks/rules-of-hooks */
import Link from "next/link";
import { useRouter } from "next/router";
import style from "./Login.module.css";

const loginPage = () => {
    const { push } = useRouter();
    const handlerLogin = () => {
        push("/product")
    }
    return(
        <div className= {style.login}>
            <h1>Login Page</h1>
            <button onClick={() => handlerLogin()}>Login</button>
             <p>
                Belum punya aku? Registrasi <Link href={"/auth/register"}>disini</Link>
             </p>
        </div>
    );
}

export default loginPage;//contoh Link               
//sistem navigasi menggunakan next router dengan menggunakan method push
