import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import OrderListResults from '../components/order/OrderListResults';
import OrderListToolbar from '../components/order/OrderListToolbar';
import { useEffect, useState } from 'react';
import {getOrders} from 'src/utils/api/resources';

const OrderList = () => {

  const [orders, setOrders] = useState([])
  useEffect(() => {
    searchOrders()
  },[]);

  const searchOrders = () => {
     let result =getOrders('orders');
     console.log(result);
     setOrders(result);
  }

  return <>
    <Helmet>
      <title>Ordenes de Compra</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <OrderListToolbar />
        <Box sx={{ pt: 3 }}>
          <OrderListResults orders={orders} />
        </Box>
      </Container>
    </Box>
  </>
}
  


export default OrderList;
