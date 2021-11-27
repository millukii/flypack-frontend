import PropTypes from 'prop-types';
import {
  Button,
  Avatar,
  Box,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography
} from '@material-ui/core';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import GetAppIcon from '@material-ui/icons/GetApp';
import { useNavigate } from 'react-router-dom';

const ShippingCard = ({ shipping, ...rest }) => {
  
  const navigate = useNavigate();
  const addPackages = () => {
    navigate('/app/shipping-add-packages',shipping,{ replace: true });
  }

  return <Card
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
           <Button
          onClick={() => {
           window.location.reload(true);
           }}
           color="error"
           variant="contained"
          >
            Detalle
       </Button>
        <Button
          onClick={() => {
           window.location.reload(true);
           }}
           color="warning"
           variant="contained"
          >
            Etiqueta
       </Button>
       <Button
          onClick={() => {
           window.location.reload(true);
           }}
           color="info"
           variant="contained"
          >
            Tracking
       </Button>
       <Button
          onClick={addPackages}
           color="info"
           variant="contained"
          >
            Agregar Paquetes
       </Button>
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h4"
      >
      Numero de envio ID: {shipping.id}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        Numero de Orden {shipping.order_nro}
        </Typography>
     
        <Typography
        align="center"
        color="textPrimary"
        variant="body1"
        >
         Tipo de envio {shipping.type}
        </Typography>
        <Typography
        align="center"
        color="textPrimary"
        variant="body1"
        >
          Valor total {shipping.value}
        </Typography>
        <Typography
        align="center"
        color="textPrimary"
        variant="body1"
        >
         Estado {shipping.shipping_states_id}
        </Typography>
                <Typography
        align="center"
        color="textPrimary"
        variant="body1"
        >
        Empresa {shipping.companies_id}
        </Typography>
                        <Typography
        align="center"
        color="textPrimary"
        variant="body1"
        >
        Delivery {shipping.delivery_id}
        </Typography>
                        <Typography
        align="center"
        color="textPrimary"
        variant="body1"
        >
         Cliente {shipping.client_id}
        </Typography>
    </CardContent>
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <AccessTimeIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
           {shipping.date}
          </Typography>
        </Grid>
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          <GetAppIcon color="action" />
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
          >
            {shipping.boleta_nro}
            {' '}
            Numero de Boleta
          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>
}
  

ShippingCard.propTypes = {
  shipping: PropTypes.object.isRequired
};

export default ShippingCard;
