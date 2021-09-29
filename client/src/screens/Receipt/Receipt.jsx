import { getOneReceipt } from '../../services/receipt';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './Receipt.css'

const Receipt = () => {
  const [receipt, setReceipt] = useState({});
  const { id } = useParams()
  
  useEffect(() => {
    const getReceipt = async () => {
      const oneReceipt = await getOneReceipt(id);
      setReceipt(oneReceipt);
    }
    getReceipt()
  },[id]);
  
  return (
    <div>
      <h1>{receipt?.title}</h1>
      <h2>{receipt?.date}</h2>
      <p>{receipt?.note}</p>
      <img src={receipt?.images} alt={receipt?.title} />
    </div>
  );
};

export default Receipt;