import {
  Box,
  Button, Container, TextField, Select,MenuItem,
  Typography,
} from '@material-ui/core';
import SelectInput from '@material-ui/core/Select/SelectInput';
import { Formik, Field } from 'formik';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { createResource, editResource } from 'src/utils/api/resources';
import * as Yup from 'yup';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { useState } from 'react';

const EditShipping = () => {
  const navigate = useNavigate();
 
  const [shippingDate, setShippingDate] = useState("");

  const createShipping = (shipping) => {
    alert(shipping);
    createResource('shippings', shipping);
    navigate('/app/shippings', { replace: true });
  }

  return (
    <>
      <Helmet>
        <title>Modificar Envio</title>
      </Helmet>
      <Box
        sx={{
          backgroundColor: 'background.default',
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth='sm'>
          <Formik
            initialValues={
               {
              shippingDate: new Date(),
              shippingHour: '',
              rounsdmanEmail:'',
              rounsdmanName: '',
              rounsdmanIdentificationNumber: '',
              rounsdmanPhone: '',
              rounsdmanVehicleModel: '',
              rounsdmanVehicleBrand:'',
              rounsdmanVehicleColor: '',
              rounsdmanVehicleLicensePlate: '',
              rounsdmanaVehicleCapacity: '',
              orderId: '',
              orderItems: [
               ],
              trackingNumber: '',
              country: '',
              city: '',
              street: '',
              homeNumber: '',
              latitude: '',
              longitude: '',
              zipCode: ''
            } 
          }
            

            validationSchema={
              Yup.object().shape(
                               {
              shippingDate: Yup.date().required('La fecha de envio es requerida'),
              shippingHour: Yup.string().max(255).required('La hora del reparto es requerida'),
              rounsdmanEmail: Yup.string().required(),
              orderId: Yup.string().required(),
            } 
        /*       {
              rounsdmanInfo: {
                email:'',
                name: '',
                identificationNumber: Yup.string().max(255).required('El rut del repartidor es requerido'),
                phone: '',
                vehicleInfo: {
                  model: '',
                  brand: '',
                  color:'',
                  licensePlate: '',
                  capacity: '',
                },
              },
              orderInfo: {
                orderId: '',
                items: [{
                  productName: '',
                  sku: '',
                  quantity: 0,
                  size: '',
                  shipmentCost: 0.0,
                }]
              },
              shipmentInfo: {
                trackingNumber: '',
              },
              addressInfo: {
                country: '',
                city: '',
                street: '',
                number: '',
                latitude: '',
                longitude: '',
                zipCode: ''
              }
            } */
              )
            }
          >
            {({
              errors,
              handleBlur,
              handleChange,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={(shipping) =>{
                createShipping(shipping);
              }}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color='textPrimary'
                    variant='h2'
                  >
                    Nuevo Envio
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.rounsdmanIdentificationNumber && errors.rounsdmanIdentificationNumber)}
                  fullWidth
                  helperText={touched.rounsdmanIdentificationNumber && errors.rounsdmanIdentificationNumber}
                  label='Rut Repartidor'
                  margin='normal'
                  name='rounsdmanIdentificationNumber'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.rounsdmanIdentificationNumber}
                  variant='outlined'
                />
                <TextField
                  error={Boolean(touched.rounsdmanName && errors.rounsdmanName)}
                  fullWidth
                  helperText={touched.rounsdmanName && errors.rounsdmanName}
                  label='Nombre Repartidor'
                  margin='normal'
                  name='rounsdmanName'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.rounsdmanName}
                  variant='outlined'
                />
                <TextField
                  error={Boolean(touched.rounsdmanEmail && errors.rounsdmanEmail)}
                  fullWidth
                  helperText={touched.rounsdmanEmail && errors.rounsdmanIdentificationNumber}
                  label='Email Repartidor'
                  margin='normal'
                  name='rounsdmanEmail'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.rounsdmanEmail}
                  variant='outlined'
                />
                <TextField
                  error={Boolean(touched.rounsdmanPhone && errors.rounsdmanPhone)}
                  fullWidth
                  helperText={touched.rounsdmanPhone && errors.rounsdmanPhone}
                  label='Telefono Repartidor'
                  margin='normal'
                  name='rounsdmanPhone'
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.rounsdmanPhone}
                  variant='outlined'
                />
              <Field
                component="select"
                id="shippingDateSelect"
                name="shippingDateSelect"
              >
                <option value="08:00am-12:00pm">08:00am-12:00pm</option>
                <option value="14:00am-17:00pm">14:00am-17:00pm</option>
                <option value="17:00pm-20:00pm">17:00pm-20:00pm</option>
              </Field>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                  <DatePicker
                    label="Dia"
                    name="shippingDate"
                  fullWidth
                    value={shippingDate}
                    onChange={(e) => {
                      values.shippingDate=e;
                      setShippingDate(e);
                    }}
                    onBlur={handleBlur}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </LocalizationProvider>
                <Box sx={{ py: 2 }}>
                  <Button
                    color='primary'
                    disabled={isSubmitting}
                    fullWidth
                    size='large'
                    type='submit'
                    variant='contained'
                  >
                    Crear
                  </Button>
                </Box>

              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default EditShipping;