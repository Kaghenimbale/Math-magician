import { useEffect, useState } from 'react';

const Quotes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=movies',
          {
            method: 'GET',
            headers: {
              'X-Api-Key': 'arIFtVZGcs2vT1zIZyli+g==v755qa3tuyC6sjFm',
            },
            contentType: 'application/json',
          },
        );

        const json = await response.json();
        setData(json);
      } catch (err) {
        throw err.message;
      }
    };
    fetchData();
  }, []);

  return (
    <div className="quotes">
      {data.map((item) => (
        <h2 key={item.author}>{item.quote}</h2>
      ))}
    </div>
  );
};

export default Quotes;
