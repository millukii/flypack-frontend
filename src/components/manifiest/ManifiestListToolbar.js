import {
  Box,
  Button,
  Card,
  CardContent, InputAdornment,
  SvgIcon, TextField
} from '@material-ui/core';
import { Search as SearchIcon } from 'react-feather';
import { useNavigate } from 'react-router';

const ManifiestListToolbar = (props) => {

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
          navigate('/app/customer-new', { replace: true });
        }}
        color="primary"
        variant="contained"
      >
        Nuevo
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
              placeholder="Buscar manifiesto"
              variant="outlined"
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  </Box>
}

export default ManifiestListToolbar;