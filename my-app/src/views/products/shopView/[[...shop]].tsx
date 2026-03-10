/* eslint-disable react-hooks/rules-of-hooks */
import { useRouter } from "next/router";

const ShopView = () => {
    const { query } = useRouter();
    return(
        <div>
            <h1>Shop Page</h1>
            <p>Shop: {`${query.slug && query.slug[0] + "-" + query.slug[1]}`}</p>
        </div>
    );
}

export default ShopView;