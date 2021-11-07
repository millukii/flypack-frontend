import {
  Box,
  Button,
  Card,
  CardContent, InputAdornment,
  SvgIcon, TextField
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { useNavigate } from 'react-router';

const OrderListToolbar = (props) => {

  const navigate = useNavigate();

  return <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >

      <Button
        onClick={() => {
          navigate('/app/order-new', { replace: true });
        }}
        color="primary"
        variant="contained"
      >
        Nueva Orden
      </Button>
      <Button
        onClick={() => {
          navigate('/app/order-new', { replace: true });
        }}
        color="secondary"
        variant="contained"
      >
        Cargar ordenes clientes
      </Button>
            <Button
        onClick={() => {
          navigate('/app/order-new', { replace: true });
        }}
        color="secondary"
        variant="contained"
      >
        Aprobar Ordenes de Compra
      </Button>
    </Box>
    <Box sx={{ mt: 3 }}>
      <Card>
        <CardContent>
          <Box sx={{ maxWidth: 500 }}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search order"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
}

export default OrderListToolbar;