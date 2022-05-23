import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Purchase = () => {

    const { id } = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/purchase/${id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [id]);

    return (
        <div>

        </div>
    );
};

export default Purchase;