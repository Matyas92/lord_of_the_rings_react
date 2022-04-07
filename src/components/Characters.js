import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React, {useState, useEffect} from "react"
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';

//PAGINATION 
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function SimpleAccordion() {

    const [characters, setCharacters] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [page, setPage ] = useState(0)

    useEffect(() => {
const headers = {
'Accept': 'application/json',
'Authorization': 'Bearer BfMQ3HhYOrlhdvasiw-T'
}
const fetchData = async () => {
const allCharacters = await fetch('https://the-one-api.dev/v2/character', {
  headers: headers

})
const char = await allCharacters.json();
setCharacters(char.docs)
setIsLoading(false)
};
fetchData();
}, []);

console.log(characters)

const allthePosts = Math.ceil(characters.length/10)
const wantedContentPerPost = 10 * page
const sliceCharacters= characters.slice(wantedContentPerPost, wantedContentPerPost + 10)

  return (
    <div >


{isLoading ?  
   <Box >
      <LinearProgress />
    </Box>  :   

    <Box >


    <Stack spacing={2}>
      <Pagination
        count={allthePosts}
        value={page}
        onChange={(event, value) => setPage(value)}

        renderItem={(item) => (
          <PaginationItem
            components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
            {...item}
          />
        )}
      />
    </Stack>


    {sliceCharacters.map((char)=> (
  
      <Accordion>

        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>{char.name}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography  sx={{ fontStyle: 'italic' }}>
           Birth: {char.birth} - Death: {char.death}
           </Typography>

           <Typography>
           Gender: {char.gender} 
            </Typography>
            <Typography>
           Gender: {char.hair}
            </Typography>
            <Typography>
         Race:   {char.race}
            </Typography>
            <Typography>
          Height:  {char.height} 
            </Typography>
            <Typography>
            {char.realm} 
            </Typography>

            <Typography>
            {char.spouse}
            </Typography>

            <a href={char.wikiUrl}>URL</a>

        </AccordionDetails>
      </Accordion>
      ))}
      </Box> 
    }
    </div>
  );
}
