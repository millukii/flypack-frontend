import {
  Box,
  Button,
  Card,
  CardContent, InputAdornment,
  SvgIcon, TextField
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { useNavigate } from 'react-router-dom';

const CustomerListToolbar = (props) => {

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
          navigate('/app/import', { replace: true, title:"Importar Clientes", actionDescription: "Seleccione un archivo en formato xlsx", resource: "customers"});
        }}
        color="primary"
        variant="contained"
      >
        Importar Clientes
      </Button>
      
      <Button
        onClick={() => {
          navigate('/app/customer-new', { replace: true });
        }}
        color="primary"
        variant="contained"
      >
        Agregar Cliente
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
              onBlur={(event) => {
                alert(event.target.value);

              }}
              placeholder="Buscar cliente"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
}

export default CustomerListToolbar;