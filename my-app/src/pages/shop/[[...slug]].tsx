// import { useRouter } from "next/router";
import ShopView from "@/views/products/shopView/[[...shop]]"

const ShopPage = () => {
    // const { query } = useRouter();
    // console.log(query);
    return(
        <>
           <ShopView />
        </>
    );
}

export default ShopPage;
//contoh sedikit next router & dynamic routing dengan beberapa query