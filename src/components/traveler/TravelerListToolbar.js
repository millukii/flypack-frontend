import {
  Box,
  Button,
  Card,
  CardContent, InputAdornment,
  SvgIcon, TextField
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { useNavigate } from 'react-router';

const TravelerListToolbar = (props) => {

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
          navigate('/app/traveler-new', { replace: true });
        }}
        color="primary"
        variant="contained"
      >
        Nuevo Repartidor
      </Button>
      <Button
        onClick={() => {
          navigate('/app/import-travelers', { replace: true, title:"Importar datos repartidores", actionDescription: "Seleccione un archivo en formato xlsx"});
        }}
        color="primary"
        variant="contained"
      >
        Importar Datos Repartidores
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
              placeholder="Buscar repartidor"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
}

export default TravelerListToolbar;