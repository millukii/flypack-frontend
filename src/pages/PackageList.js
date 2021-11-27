import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';

import PackageListToolbar from '../components/package/PackageListToolbar';
import ManifiestDataGrid from '../components/manifiest/ManifiestDataGrid';
import Barcode from 'react-barcode';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

import {getAll} from 'src/utils/api/resources';

import {
  Box,
  Container,
  Grid,
  Pagination
} from '@material-ui/core';
const PackageList= ({city,xcapacity,scapacity,mcapacity}) => {
  const [checked, setChecked] = React.useState([0]);
 const [shipmentPackages, setShipmentPackages] = React.useState([0]);
 const [manifiests, setManifiests] = React.useState([])
  const printRef = React.useRef();

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL('image/png');

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight =
      (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
    pdf.save('print.pdf');
  };

  const searchManifiests= async () => {
     let result = await getAll('manifiests');
     alert((result.manifiest))
     setManifiests(result.manifiest);
  }
  const searchShipmentPackages= async () => {
     let result = await getAll('packages');
         alert((result.shipmentPackages))
     setShipmentPackages(result.shipmentPackages);
  }
 
  React.useEffect(() => {
    searchManifiests()
    searchShipmentPackages()
  },[]);


 const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
      field: 'manifiestNumber',
      headerName: 'Numero Manifiesto',
      width: 250,
      editable: true,
    },
    {
      field: 'deliveryDate',
      headerName: 'Dia de Entrega',
      width: 200,
      editable: true,
    },
    {
      field: 'city',
      headerName: 'Ciudad',
      width: 200,
      editable: true,
    },
    {
      field: 'commune',
      headerName: 'Comuna',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
    },
      {
      field: 'scapacity',
      headerName: 'S',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 70,
  /*     valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`, */
    },
    ,
      {
      field: 'mcapacity',
      headerName: 'M',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 70,
  /*     valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`, */
    },
    ,
      {
      field: 'xcapacity',
      headerName: 'X',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 70,
  /*     valueGetter: (params) =>
        `${params.getValue(params.id, 'firstName') || ''} ${
          params.getValue(params.id, 'lastName') || ''
        }`, */
    },
    ];

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }
    
    setChecked(newChecked);
  };



  return (
        <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
    <Container >
        <PackageListToolbar sx={{width: '100%', maxWidth: '100%', bgcolor: 'background.paper', height: '100px', marginBottom: '50px'}} />
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            <List sx={{width: '100%', maxWidth: '100%', bgcolor: 'background.paper', height: '100%', marginBottom: '50px'}}>
              {shipmentPackages.map((shipmentPackage) => {
                const labelId = `checkbox-list-label-${shipmentPackage.id}`;
                const labelIdCheckBox = `checkbox-list-check-${shipmentPackage.id}`;
                const labelIdTextBox = `checkbox-list-text-${shipmentPackage.id}`;
                const labelIdButton = `checkbox-list-button-${shipmentPackage.id}`;
                 return( <ListItem
                    key={shipmentPackage.id}
                    secondaryAction={
                      <IconButton edge="end" aria-label="comments">
                      <button type="button" onClick={handleDownloadPdf}>
                        Download as PDF
                      </button>
                      </IconButton>
                    }
                    disablePadding
                  >
                    <ListItemButton key={labelIdButton} role={undefined} onClick={handleToggle(shipmentPackage.id)} dense>
                      <ListItemIcon>
                        <Checkbox
                          edge="start"
                          checked={checked.indexOf(shipmentPackage.id) !== -1}
                          tabIndex={-1}
                          id = {labelIdCheckBox}
                          key =  {labelIdCheckBox}
                          disableRipple
                          inputProps={{ 'aria-labelledby': labelId }}
                        />
                      </ListItemIcon>
                      <div ref={printRef}>
                          <Barcode value={`Informacion ${shipmentPackage.id} ${shipmentPackage.orderNumber} ${shipmentPackage.size}`}/>
                      </div>
                       <ListItemText  key={labelIdTextBox} id={labelIdTextBox} primary={`Paquete ${shipmentPackage.id} Tamaño ${shipmentPackage.size} Tipo Normal Numero de orden ${shipmentPackage.orderNumber}`} />
                    </ListItemButton>
                  </ListItem>
              )})}
            </List>
          </Grid>
        </Box>
      </Container>
    </Box>

  );
}
export default PackageList;