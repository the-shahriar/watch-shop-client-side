import axios from "axios";
import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:5000/products')
        .then(res => {
            setProducts(res.data)     
        })
    },[])

    return [products, setProducts];
}

export default useProducts;