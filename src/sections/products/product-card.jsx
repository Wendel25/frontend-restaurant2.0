import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import ImageNotSupportedIcon from '@mui/icons-material/ImageNotSupported';

import returnAllProducts from './services/return-products';

const baseLinkImage = import.meta.env.LINK_IMAGE || process.env.link_image.LINK_IMAGE;

// ----------------------------------------------------------------------

const imageStyle = {
  width: '100%',
  height: '220px',
};

export default function ShopProductCard() {
  const [productsData, setProductsData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const data = await returnAllProducts();
      const productList = Object.values(data).flatMap((category) => category);
      setProductsData(productList);
    }
    fetchData();
  }, []);

  return (
    <Grid container spacing={2}>
      {productsData.map((prod) => (
        <Grid item key={prod.id} xs={12} sm={6} md={4}>
          <Card className="min-h-96 relative">
            <div key={prod.id} className="flex flex-col relative">
              <div
                className={`absolute top-4 right-0 p-1 w-20 flex justify-center rounded-md ${
                  prod?.active ? 'bg-yellow-200' : 'bg-redDisabled'
                }`}
              >
                <span
                  className={`text-base font-bold tracking-wide	 ${
                    prod?.active ? 'text-yellow-800' : 'text-white'
                  }`}
                >
                  {prod?.active ? 'Ativo' : 'Inativo'}
                </span>
              </div>

              {prod.banner ? (
                <img
                  src={`${baseLinkImage}/${prod?.banner}`}
                  alt="product banner"
                  style={imageStyle}
                />
              ) : (
                <div className="flex justify-center items-center rounded-2xl max-h-64 min-h-56 bg-gray">
                  <ImageNotSupportedIcon sx={{ color: '#929292', fontSize: 150 }} />
                </div>
              )}

              <div className="flex flex-col m-4">
                <span className="text-xl font-semibold text-zinc-600">{prod?.name}</span>
                <div className="bg-lime-200 p-1 w-20 flex justify-center rounded-3xl my-4">
                  <span className="text-sm font-bold text-green-800">R$ {prod?.price}</span>
                </div>

                <span>
                  {prod?.description && prod?.description.length > 50
                    ? `${prod?.description.substring(0, 50)}...`
                    : prod?.description}
                </span>
              </div>
            </div>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
