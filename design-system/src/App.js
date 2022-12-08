import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Card from "./components/Card";

function App() {
  const produtos = [
    {
      brand: "MSI",
      name: "Placa de Vídeo RTX 2060",
      priceDescount: 1599.99,
      priceNormal: 1882.34,
      image: 'https://shopinfo.vteximg.com.br/arquivos/ids/1322594-1000-1000/1.png?v=637915893984830000',
    },
    {
      brand: "PNY",
      name: "Placa de Vídeo RTX 3060Ti",
      priceDescount: 2799.99,
      priceNormal: 3294.11,
      image: 'https://www.pny.com/productimages/6D1997B5-D4E7-4501-8C47-AD2C00A4BF3F/images/PNY-GeForce-RTX-3060Ti-DF-M-gr.png',
    },
    {
      brand: "Galaxy",
      name: "Placa de Vídeo RTX 3060",
      priceDescount: 2499.99,
      priceNormal: 2941.16,
      image: 'https://img.terabyteshop.com.br/produto/g/placa-de-video-galax-geforce-rtx-3060-1-click-oc-12gb-gddr6-192bit-36nol7md1voc_117465.png',
      
    },
  ];

  return (
    <ChakraProvider>
      {produtos.map((produto, index) => {
        return <Card key={index} produto={produto}/>
      })}
    </ChakraProvider>
  );
}

export default App;
