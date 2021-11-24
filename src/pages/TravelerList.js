import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';
import TravelerListResults from '../components/traveler/TravelerListResults';
import TravelerListToolbar from '../components/traveler/TravelerListToolbar';
import { useEffect, useState } from 'react';
import {getAll} from 'src/utils/api/resources';

const TravelerList = () => {

  const [travelers, setTravelers] = useState([])
  useEffect(() => {
    searchTravelers()
  },[]);

  const searchTravelers = async () => {
     let result = await getAll('travelers');
     console.log(result);
     setTravelers(result);
  }

  return <>
    <Helmet>
      <title>Repartidores</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <TravelerListToolbar />
        <Box sx={{ pt: 3 }}>
          <TravelerListResults travelers={travelers} />
        </Box>
      </Container>
    </Box>
  </>
}
  


export default TravelerList;
