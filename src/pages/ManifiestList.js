import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import ManifiestListResults from '../components/manifiest/ManifiestListResults';
import ManifiestListToolbar from '../components/manifiest/ManifiestListToolbar';
import { useEffect, useState } from 'react';
import {getAll} from 'src/utils/api/resources';

const ManifiestList = () => {

  const [manifiests, setManifiests] = useState([])
  useEffect(() => {
    searchManifiests()
  },[]);

  const searchManifiests = async () => {
     let result = await getAll('manifiests');
     console.log(result);
     setManifiests(result.manifiest);
  }

  return <>
    <Helmet>
      <title>Manifiestos</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <ManifiestListToolbar />
        <Box sx={{ pt: 3 }}>
          <ManifiestListResults manifiests={manifiests} />
        </Box>
      </Container>
    </Box>
  </>
}
  


export default ManifiestList;
