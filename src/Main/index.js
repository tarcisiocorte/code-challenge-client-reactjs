import { useEffect, useState } from 'react';
import Header from '../components/Header';
import Temperature from '../components/Temperature';
import { temperatureData } from '../utils/checkTemperatureData'
import styled from "styled-components";

function Main() {
  const [items, setItems] = useState({});  

  useEffect(() => {
    const request = () =>
    temperatureData.forEach((product) => {
        fetch(`http://localhost:8081/temperature/${product.id}`)
          .then((response) => response.json())
          .then((response) =>
            setItems((prevItems) => ({
              ...prevItems,
              [product.id]: {
                ...product,
                ...response,
              },
            }))
          );
      });

    setInterval(request, 5000);

    request();
  }, []);
  
  const PageContent = styled.div`text-align: center;`;

  return (    
    <>
    <Header />
    <PageContent className="App">      
      {items && (
        <Temperature items={items} />
      )}
    </PageContent>
    </>
  );
}

export default Main;
