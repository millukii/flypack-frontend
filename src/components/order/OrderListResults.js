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

const OrderListResults = ({ orders, ...rest }) => {
  console.log('Order', orders);
  const [selectedOrderIds, setSelectedOrderIds] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedOrderIds;

    if (event.target.checked) {
      newSelectedOrderIds = orders.map((order) => order.id);
    } else {
      newSelectedOrderIds = [];
    }

    setSelectedOrderIds(newSelectedOrderIds);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedOrderIds.indexOf(id);
    let newSelectedOrderIds = [];

    if (selectedIndex === -1) {
      newSelectedOrderIds = newSelectedOrderIds.concat(selectedOrderIds, id);
    } else if (selectedIndex === 0) {
      newSelectedOrderIds = newSelectedOrderIds.concat(selectedOrderIds.slice(1));
    } else if (selectedIndex === selectedOrderIds.length - 1) {
      newSelectedOrderIds = newSelectedOrderIds.concat(selectedOrderIds.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedOrderIds = newSelectedOrderIds.concat(
        selectedOrderIds.slice(0, selectedIndex),
        selectedOrderIds.slice(selectedIndex + 1)
      );
    }

    setSelectedOrderIds(newSelectedOrderIds);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  if (orders === undefined || orders === null) {
    orders = [{
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
                    checked={selectedOrderIds.length === orders.length}
                    color="primary"
                    indeterminate={
                      selectedOrderIds.length > 0
                      && selectedOrderIds.length < orders.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                <TableCell>
                  Orden Cliente
                </TableCell>
                <TableCell>
                  Orden de Compra
                </TableCell>
                <TableCell>
                  Cliente
                </TableCell>
                <TableCell>
                  Tipo de Orden
                </TableCell>
                <TableCell>
                  Estado
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {orders.slice(0, limit).map((order) => (
                <TableRow
                  hover
                  key={order.id}
                  selected={selectedOrderIds.indexOf(order.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedOrderIds.indexOf(order.id) !== -1}
                      onChange={(event) => handleSelectOne(event, order.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    {order.customerOrderId}
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
                        {order.purchaseOrderId} 
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {order.customerEmailId}
                  </TableCell>
                  <TableCell>
                    {order.orderType}
                  </TableCell>
                  <TableCell>
                    {order.orderStatus}
                  </TableCell>
                  <TableCell>
                    <Button
                      onClick={() => {
                        deleteResource('orders', order.id)
                        window.location.reload(true);
                      }}
                      color="error"
                      variant="contained"
                    >
                      Eliminar
                    </Button>
                    <Button
                      onClick={() => {
                        editResource('orders', order.id)
                        window.location.reload(true);
                      }}
                      color="info"
                      variant="contained"
                    >
                      Editar
                    </Button>
                    <Button
                      onClick={() => {
                        editResource('orders', order.id)
                        window.location.reload(true);
                      }}
                      color="info"
                      variant="contained"
                    >
                      Detalle
                    </Button>
                    <Button
                      onClick={() => {
                        editResource('orders', order.id)
                        window.location.reload(true);
                      }}
                      color="info"
                      variant="contained"
                    >
                      Aprobar
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
        count={orders.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

OrderListResults.propTypes = {
  orders: PropTypes.array.isRequired
};

export default OrderListResults;