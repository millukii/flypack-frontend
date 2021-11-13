import {
  Box,
  Button, Container, TextField,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { createResource, editResource } from 'src/utils/api/resources';
import { useState } from 'react';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import PackagesList  from './PackageList';


const ShippingAddPackages = (props) => {
  const navigate = useNavigate();

  const [shippingPackages, setShippingsPackages] = useState([]);

  const addPackages = (packages) => {
    editResource('shippings', packages);
    navigate('/app/shippings', { replace: true });
  }

  return (
    <>
      <Helmet>
        <title>Agregar Paquetes al envio</title>
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
        <Container maxWidth="sm">
          <Formik
            initialValues={{
              shippingId: props.shippingId,
              shippingPackages: shippingPackages,
            }}
            validationSchema={
              Yup.object().shape({
                shippingId: Yup.string().required('El numero de envio es requerido'),
              })
            }
            onSubmit={(packages) => {
              addPackages(packages);
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                <PackagesList city={"TENO"} xcapacity={5} scapacity={6} mcapacity={8}></PackagesList>
                </Box>
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Agregar
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

export default ShippingAddPackages;