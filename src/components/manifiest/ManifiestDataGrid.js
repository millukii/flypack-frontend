

import {DataGrid , GridToolbar } from '@mui/x-data-grid';

const ManifiestDataGrid = (rows, columns) => {

  return (
                <DataGrid
                  columns={columns}
                  rows={rows}
                  components={{
                    Toolbar: GridToolbar
                  }}
                />
  )

}

export default ManifiestDataGrid;