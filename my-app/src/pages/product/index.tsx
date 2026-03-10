/* eslint-disable react-hooks/rules-of-hooks */
// contoh useEffect
// import { useRouter } from "next/router";
// import { useEffect, useState } from "react";
import ProductView from "@/views/products/productView/product"

const Produk = () => {
    // const [isLogin, setIsLogin] = useState(false);
    // const { push } = useRouter();
    // useEffect(() => {
    //     if(!isLogin) {
    //         push("/auth/login");
    //     }
    // }, []);
    return(
        <>
        <ProductView />   
        </>
    )
}

export default Produk;