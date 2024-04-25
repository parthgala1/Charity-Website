import React, { useState, useEffect } from "react";

export const useUpdateImpact = () => {
  const [loading, setLoading] = useState(false);
  const updateImpact = async (id, impact) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:4000/api/impact/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ impact }),
        }
      );
      const data = await response.json();
      if (data.error) throw new Error(data.error);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return { loading, updateImpact };
};
