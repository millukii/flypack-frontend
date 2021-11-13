import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
import ShippingListToolbar from '../components/shipping/ShippingListToolbar';
import ShippingCard from '../components/shipping/ShippingCard';

import {getAll} from 'src/utils/api/resources';
import { useEffect, useState } from 'react';

const ITEMS_PER_PAGE = 6;
const ShippingList = () => {

  const [shippings, setShippings] = useState([])
  useEffect(() => {
    searchShippings()
  },[]);

  const searchShippings = async () => {
     let result = await getAll('shippings');
     setShippings(result);
  }

  return  <>
    <Helmet>
      <title>Envios</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ShippingListToolbar />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {
            shippings.map((shipping) => (
            
              <Grid
                item
                key={shipping.id}
                lg={4}
                md={6}
                xs={12}
              >
                <ShippingCard shipping={shipping} />
              </Grid>
            ))}
          </Grid>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            pt: 3
          }}
        >
          <Pagination
            color="primary"
            count={(shippings.length/ITEMS_PER_PAGE).round}
            size="small"
          />
        </Box>
      </Container>
    </Box>
  </>
}
 


export default ShippingList;
