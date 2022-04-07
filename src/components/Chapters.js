import React, {useState, useEffect} from "react"

import { DataGrid } from '@mui/x-data-grid';


const Chapters = () => {

    const [chapters, setChapters] = useState([])

      useEffect(() => {
const headers = {
  'Accept': 'application/json',
  'Authorization': 'Bearer BfMQ3HhYOrlhdvasiw-T'
}
const fetchData = async () => {
  const allChapters = await fetch('https://the-one-api.dev/v2/chapter', {
    headers: headers

  })
  const chappy = await allChapters.json();
  setChapters(chappy.docs)
};
fetchData();
}, []);


const columns = [
  { field: '_id', headerName: 'ID', width: 100, hide:true },
  { field: 'chapterName', headerName: 'Chapter Name', width: 250 },
  { field: 'book', headerName: 'Book', width: 250 },

];

const rows = []
chapters.map((chapter,id) => (

  rows.push(chapter)
))

for (const [i, ch] of chapters.entries()) {
  console.log(ch.book)
  if(ch.book == "5cf58077b53e011a64671583"){
    ch.book = "The Fellowship of the Ring"
  }
  if(ch.book == "5cf58080b53e011a64671584"){
    ch.book = "The Return Of The King "
  }
  if(ch.book == "5cf5805fb53e011a64671582"){
    ch.book = "The Two Towers"
  }
  
 
}


return (
  

<div style={{ height: 600, width: 1200 }}>

      <DataGrid
      getRowId={(row) => row._id}
        rows={rows}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div> 
);
}

export default Chapters