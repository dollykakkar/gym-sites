import React from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { useEffect } from 'react'

export const Protected = ({ component: Component }) => {
    const navigate = useNavigate();
    const verifyToken = async (token) => {
        try {
            const res = await axios.get("http://localhost:5000/verifyuser", {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                }
            });
            if (res.status !== 200) {
                console.log("Token expired or invalid");
                navigate("/login");
            }
        } catch (error) {
            console.error("Error verifying token:", error);
            navigate("/login");
        }
    };

    useEffect(() => {
        const token = localStorage.getItem("token");

        if (!token) {
            navigate("/login");
        } else {
            verifyToken(token);
        }
    }, [navigate]);

  return (
    <Component/>
  )
}
