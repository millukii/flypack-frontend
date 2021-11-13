

import {DataGrid } from '@mui/x-data-grid';

const ManifiestDataGrid = (rows, columns) => {

  return (
                <DataGrid
                  columns={columns}
                  rows={rows}
                />
  )

}

export default ManifiestDataGrid;