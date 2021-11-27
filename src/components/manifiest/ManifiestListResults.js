import {
  Box,
  Button,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { firebaseEliminar } from 'src/utils/FirebaseUtil';

const ManifiestListResults = ({ manifiests, ...rest }) => {
  const [selectedManifiestIds, setSelectedManifiestIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedManifiestIds;

    if (event.target.checked) {
      newSelectedManifiestIds = manifiests.map((manifiest) => manifiest.id);
    } else {
      newSelectedManifiestIds = [];
    }

    setSelectedManifiestIds(newSelectedManifiestIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedManifiestIds.indexOf(id);
    let newSelectedManifiestIds = [];

    if (selectedIndex === -1) {
      newSelectedManifiestIds = newSelectedManifiestIds.concat(selectedManifiestIds, id);
    } else if (selectedIndex === 0) {
      newSelectedManifiestIds = newSelectedManifiestIds.concat(selectedManifiestIds.slice(1));
    } else if (selectedIndex === selectedManifiestIds.length - 1) {
      newSelectedManifiestIds = newSelectedManifiestIds.concat(selectedManifiestIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedManifiestIds = newSelectedManifiestIds.concat(
        selectedManifiestIds.slice(0, selectedIndex),
        selectedManifiestIds.slice(selectedIndex + 1)
      );
    }

    setSelectedManifiestIds(newSelectedManifiestIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedManifiestIds.length === manifiests.length}
                    color="primary"
                    indeterminate={
                      selectedManifiestIds.length > 0
                      && selectedManifiestIds.length < manifiests.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Numero de Manifiesto
                </TableCell>
                <TableCell>
                  Fecha Delivery
                </TableCell>
                <TableCell>
                  Ciudad
                </TableCell>
                <TableCell>
                  Comuna
                </TableCell>
                <TableCell>
                  Cap. Paquetes S
                </TableCell>
                <TableCell>
                  Cap. Paquetes M
                </TableCell>
                <TableCell>
                  Cap. Paquetes X
                </TableCell>
                <TableCell>
                 
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {manifiests.slice(0, limit).map((manifiest) => (
                <TableRow
                  hover
                  key={manifiest.id}
                  selected={selectedManifiestIds.indexOf(manifiest.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedManifiestIds.indexOf(manifiest.id) !== -1}
                      onChange={(event) => handleSelectOne(event, manifiest.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {manifiest.manifiestNumber} 
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {manifiest.deliveryDate}
                  </TableCell>
                  <TableCell>
                    {manifiest.city}
                  </TableCell>
                  <TableCell>
                    {manifiest.commune}
                  </TableCell>
                  <TableCell>
                    {manifiest.smallPackagesCapacity}
                  </TableCell>
                  <TableCell>
                    {manifiest.mediumPackagesCapacity}
                  </TableCell>
                  <TableCell>
                    {manifiest.xtraPackagesCapacity}
                  </TableCell>


                  <TableCell>
                    <Button
                      onClick={() => {
                        window.location.reload(true);
                      }}
                      color="error"
                      variant="contained"
                    >
                      Eliminar
                    </Button>
                    <Button
                      onClick={() => {
                        
                        window.location.reload(true);
                      }}
                      color="info"
                      variant="contained"
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => {
                        window.location.reload(true);
                      }}
                      color="info"
                      variant="contained"
                    >
                      Paquetes
                    </Button>
                     <Button
                      onClick={() => {
                        window.location.reload(true);
                      }}
                      color="info"
                      variant="contained"
                    >
                      Detalle
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={manifiests.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ManifiestListResults.propTypes = {
  manifiests: PropTypes.array.isRequired
};

export default ManifiestListResults;