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
import { deleteResource, editResource } from 'src/utils/api/resources';

const TravelerListResults = ({ travelers, ...rest }) => {
  console.log('Traveler', travelers);
  const [selectedTravelerIds, setSelectedTravelerIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedTravelerIds;

    if (event.target.checked) {
      newSelectedTravelerIds = travelers.map((traveler) => traveler.id);
    } else {
      newSelectedTravelerIds = [];
    }

    setSelectedTravelerIds(newSelectedTravelerIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedTravelerIds.indexOf(id);
    let newSelectedTravelerIds = [];

    if (selectedIndex === -1) {
      newSelectedTravelerIds = newSelectedTravelerIds.concat(selectedTravelerIds, id);
    } else if (selectedIndex === 0) {
      newSelectedTravelerIds = newSelectedTravelerIds.concat(selectedTravelerIds.slice(1));
    } else if (selectedIndex === selectedTravelerIds.length - 1) {
      newSelectedTravelerIds = newSelectedTravelerIds.concat(selectedTravelerIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedTravelerIds = newSelectedTravelerIds.concat(
        selectedTravelerIds.slice(0, selectedIndex),
        selectedTravelerIds.slice(selectedIndex + 1)
      );
    }

    setSelectedTravelerIds(newSelectedTravelerIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  if (travelers === undefined || travelers === null) {
    travelers = [{
      "id" : "1",
    }]
  }
  return (
    
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 1050 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedTravelerIds.length === travelers.length}
                    color="primary"
                    indeterminate={
                      selectedTravelerIds.length > 0
                      && selectedTravelerIds.length < travelers.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Codigo
                </TableCell>
                <TableCell>
                  Nombre
                </TableCell>
                <TableCell>
                  Telefono
                </TableCell>
                <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Documento
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {travelers.slice(0, limit).map((traveler) => (
                <TableRow
                  hover
                  key={traveler.id}
                  selected={selectedTravelerIds.indexOf(traveler.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedTravelerIds.indexOf(traveler.id) !== -1}
                      onChange={(event) => handleSelectOne(event, traveler.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    {traveler.travelerId}
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
                        {traveler.fullname} 
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {traveler.phone}
                  </TableCell>
                  <TableCell>
                    {traveler.email}
                  </TableCell>
                  <TableCell>
                    {traveler.identificationNumber}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        deleteResource('travelers', traveler.id)
                        window.location.reload(true);
                      }}
                      color="error"
                      variant="contained"
                    >
                      Eliminar
                    </Button>
                    <Button
                      onClick={() => {
                        editResource('travelers', traveler.id)
                        window.location.reload(true);
                      }}
                      color="info"
                      variant="contained"
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => {
                        editResource('travelers', traveler.id)
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
        count={travelers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

TravelerListResults.propTypes = {
  travelers: PropTypes.array.isRequired
};

export default TravelerListResults;