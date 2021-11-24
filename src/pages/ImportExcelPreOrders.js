import {
  Box,
  Input,
  Button, Container, TextField,
  Typography
} from '@material-ui/core';
import { Formik } from 'formik';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import * as XLSX from 'xlsx'
import * as fs from 'fs'
import { useState } from 'react';
import readXlsxFile from 'read-excel-file'
import { jsonSchema } from 'uuidv4';
import {processMassiveImportExcel} from 'src/utils/api/resources';


const ImportExcel = (config) => {

  console.log("config import excel ", config.props);
  const navigate = useNavigate();

  //const [data, setData] = useState([]);
  let data = null;
  const readFile = async (event) => {
    await processData(data, "preorders");
    navigate('/app/orders', { replace: true });

  }
  const processData = async (data, resource) => {
    try{
     let result = await  processMassiveImportExcel(data, resource);
      console.log(result);
          if(result === 200){
            console.log("Envio exitoso")
          }
    }catch(e){

    }
  }

  const handleFile = async (path, event) => {
    try{
          await readXlsxFile(event.target.files[0], jsonSchema.v5).then((rows) => {
            data=rows
          })
    }catch(err) {

   }


  }

  return (
    <>
      <Helmet>
        <title>Importar</title>
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
              file: '',
            }}
            validationSchema={
              Yup.object().shape({
                file: Yup.string().max(60),
              })
            }
            onSubmit={(event) => {
              readFile(event);
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
                  <Typography
                    color="textPrimary"
                    variant="h2"
                  >
                    {config.title}
                  </Typography>
                </Box>
                <Input
                  type="file"
                  error={Boolean(touched.file && errors.file)}
                  fullWidth
                  helpertext={touched.file && errors.file}
                  label="Archivo"
                  margin="dense"
                  accept=".csv,.xlsx,.xls"
                  name="file"
                  onBlur={handleBlur}
                  onChange={(event)=>{
                    handleChange(event)
                    let fullPath = event.target.value;
                            var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
                                var filename = fullPath.substring(startIndex);
                                if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
                                    filename = filename.substring(1);
                                }
                                handleFile('C:\\Uploads/'+filename, event);
                  }}
                  value={values.file}
                  variant="outlined"
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    color="primary"
                    disabled={isSubmitting}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Ok
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

export default ImportExcel;