
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import GlobalApi from "@/app/_utilities/GlobalApi";
import ProductList from "@/app/_components/ProductList";

function ProductCategory() {
    const params = useParams();
    const categoryName = params?.categoryName?.replace(/[^a-zA-Z\s]/g, " ") || "";
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            if (!categoryName) return; 

            try {
                const products = await GlobalApi.getProductsByCategory(params?.categoryName);
                setProductList(products);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        }

        fetchProducts();
    }, [categoryName]);

    return (
        <div>
            <h2 className="p-4 mt-25 bg-green-600 italic text-white font-bold text-3xl text-center">
                {categoryName}
            </h2>

            <div className="p-5 md:p-10">
                {productList.length > 0 ? (
                    <ProductList productList={productList} />
                ) : (
                    <p className="text-center text-gray-500">No products available.</p>
                )}
            </div>
        </div>
    );
}

export default ProductCategory;