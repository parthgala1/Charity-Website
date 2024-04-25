import React, { useState, useEffect } from "react";

export const useDeleteImpact = () => {
  const [loading, setLoading] = useState(false);
  const deleteImpact = async (id) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:4000/api/impact/delete/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
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

  return { loading, deleteImpact };
};
