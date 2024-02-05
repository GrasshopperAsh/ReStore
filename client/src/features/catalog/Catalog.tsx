import { Fragment, useEffect, useState } from "react";
import { Product } from "../../app/models/product";
import ProductList from "./ProductList";


export default function Catalog() {

    const [products, setProducts] = useState<Product[]>([]);

    // get the products from the API.
    useEffect(() => {
        fetch("http://localhost:5000/api/Products")
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <Fragment>
            <ProductList products={products} />
        </Fragment>
    )
}