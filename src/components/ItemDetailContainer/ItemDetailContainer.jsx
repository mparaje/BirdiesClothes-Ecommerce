import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loader } from "../Loader/Loader";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setLoading(true);
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(res => {
                setDetail(res);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching product details:", error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <Loader/>;
    }

    return (
        <ItemDetail detail={detail} />
    );
};