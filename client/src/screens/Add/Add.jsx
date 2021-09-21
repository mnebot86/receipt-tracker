import { useState } from 'react'
import axios from 'axios'
const Add = () => {
  const [file, setFile] = useState({
    selectedFile: null,
  })

  const handleChange = (event) => {
    setFile({
      selectedFile: event.target.files[0]})
  }

  const handleUPLoad = () => {
    const fd = new FormData();
    fd.append('image', file, file.name)
    axios.post('www',fd)
    .then(res => {
      console.log(res)
    })
  }

  return (
    <div>
<input type="file" onChange={handleChange}/>      
<button onClick={handleUPLoad}>Upload</button>
    </div>
  );
};

export default Add;