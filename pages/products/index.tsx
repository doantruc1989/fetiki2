import React, { ReactElement } from 'react'
import { CartProvider } from 'react-use-cart';
import Layout from '../components/Layout';

function Index() {
  return (
    <div>Index</div>
  )
}

Index.getLayout = function getLayout(page: ReactElement) {
    return (
      <CartProvider>
        <Layout>
          <>{page}</>
        </Layout>
      </CartProvider>
    );
  };
  
export default Index