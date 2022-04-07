import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React, {useState, useEffect} from "react"

import Grid from '@mui/material/Grid';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function BasicCard() {
    //Use API from site the-one-api and load the datas from it using authorization
    const [books, setBooks] = useState([])

    useEffect(() => {
const headers = {
  //In normal case we dont show the auth keys
'Accept': 'application/json',
'Authorization': 'Bearer BfMQ3HhYOrlhdvasiw-T'
}
const fetchData = async () => {
const allBooks = await fetch('https://the-one-api.dev/v2/book', {
  headers: headers

})
const booky = await allBooks.json();
setBooks(booky.docs)
};
fetchData();
}, []);

console.log(books)
//Using MUI component 
  return (
      <>
      <Grid container spacing={6}>

      {books.map((book) => (
        <Grid item xs={4}>

        <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Lord of The Rings
        </Typography>
        <Typography variant="h5" component="div">
        {book.name}

        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Novel
        </Typography>
        <Typography variant="body2">
        John Ronald Reuel Tolkien
          <br />
         
        </Typography>
      </CardContent>
   
    </Card>
    </Grid>


      ))}
      </Grid>


    </>
  );
}
