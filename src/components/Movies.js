import React, {useState, useEffect} from "react"
import { DataGrid } from '@mui/x-data-grid';

const Movies = () => {
    const [movies, setMovies] = useState([])
      useEffect(() => {
const headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer BfMQ3HhYOrlhdvasiw-T'
}
const fetchData = async () => {
  const allMovies = await fetch('https://the-one-api.dev/v2/movie', {
    headers: headers

  })
  const cinema = await allMovies.json();
  setMovies(cinema.docs)
};
fetchData();
}, []);

const columns = [
  { field: '_id', headerName: 'ID', width: 100, hide:true },
  { field: 'name', headerName: 'Name', width: 250 },
  { field: 'runtimeInMinutes', headerName: 'Runtime', width: 150 },
  { field: 'budgetInMillions', headerName: 'Budget', width: 150 },
  { field: 'boxOfficeRevenueInMillions', headerName: 'Revenue', width: 150 },
  { field: 'academyAwardNominations', headerName: 'Oscars Nominations', width: 150 },
  { field: 'academyAwardWins', headerName: 'Oscar Wins', width: 150 },
  { field: 'rottenTomatoesScore', headerName: 'Rotten Tomato Score', width: 150 },
];

const rows = []
  movies.map((movie,id) => (
  rows.push(movie)
))

    console.log(rows)

return (
<div style={{ height: 400, width: 1200 }}>
      <DataGrid
      getRowId={(row) => row._id}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div> 
);
}

export default Movies