/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

const detailProduk = () => {
    const { query } = useRouter();
    return(
        <div>
            <h1>Detail Produk</h1>
            <p>Produk: {query.id}</p>
        </div>
    );
}

export default detailProduk;
//contoh sedikit next router & dynamic routing