import React, { useState, useEffect } from "react";

const useGetMembers = () => {
  const [loading, setLoading] = useState(false);
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        setLoading(true);
        const response = await fetch("http://localhost:4000/api/users/");
        const data = await response.json();
        setMembers(data);
        console.log(members);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };

    fetchMembers();
  }, []);

  return { loading, members };
};

export default useGetMembers;
