import { useRouter } from "next/router";

const DynamicProduct = () => {
    const {query} = useRouter();
    // console.log(router);
    
    return (
        <div>
            <h1>Dynamic Product</h1>
            <p>Product : {query.id}</p>
        </div>
    );
};

export default DynamicProduct;