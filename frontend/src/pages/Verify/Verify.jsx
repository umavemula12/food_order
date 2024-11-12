import React, { useContext, useEffect, useState } from 'react';
import './Verify.css';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { StoreContext } from './../../components/context/StoreContext';
import axios from 'axios';

const Verify = () => {
    const [searchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    const { url } = useContext(StoreContext);
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    const verifyPayment = async () => {
        try {
            const response = await axios.post(`${url}/api/order/verify`, { success, orderId });
            if (response.data.success) {
                navigate('/myorders');
            } else {
                navigate('/');
            }
        } catch (error) {
            console.error("Verification failed:", error);
            navigate('/'); // Redirect to home if there's an error
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        verifyPayment();
    }, [url]); // Added `url` as a dependency

    return (
        <div className="verify">
            {loading ? <div className="spinner"></div> : <p>Redirecting...</p>}
        </div>
    );
};

export default Verify;
