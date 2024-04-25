import React, { useState, useEffect } from "react";

export const useGetImpact = () => {
  const [loading, setLoading] = useState(false);
  const [impact, setImpact] = useState([]);

  useEffect(() => {
    const fetchImpact = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:4000/api/impact/");
        const data = await response.json();
        setImpact(data);
        console.log(impact);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchImpact();
  }, []);

  return { loading, impact };
};

export default useGetImpact;
