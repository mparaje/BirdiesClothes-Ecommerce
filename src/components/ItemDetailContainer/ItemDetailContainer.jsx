import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { Loader } from "../Loader/Loader";
import { getSingleProduct } from "../../firebase/database";

export const ItemDetailContainer = () => {
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
            getSingleProduct(id, setDetail);
            setLoading(false);
    }, [id]);

    return (
        <>
            {loading? <Loader/> :
                <ItemDetail detail={detail} />
            }
        </>
    );
};