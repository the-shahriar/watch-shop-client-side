import axios from "axios";
import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        axios.get('https://serene-hamlet-29460.herokuapp.com/products')
        .then(res => {
            setProducts(res.data)     
        })
    },[])

    return [products, setProducts];
}

export default useProducts;