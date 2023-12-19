import { useState, useEffect } from "react";

const useMessages = (forum) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    let didCancel = false;

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/messages/${forum}`);

        if (!response.ok) {
          const text = await response.text();
          console.error(
            `Error fetching messages for ${forum}. Status: ${response.status}, Text: ${text}`
          );
          throw new Error(`Unable to read messages for ${forum}: ${text}`);
        }

        const body = await response.json();
        if (!didCancel) {
          setData(body);
        }
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    setError(null);

    if (forum) {
      fetchData();
    } else {
      setData([]);
      setLoading(false);
    }

    return () => {
      didCancel = true;
    };
  }, [forum]);

  return {
    data,
    loading,
    error,
  };
};

export default useMessages;
