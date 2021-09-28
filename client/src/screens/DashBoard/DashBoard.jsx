import { useEffect, useState} from 'react';
import { getAllReceipts } from '../../services/receipt';
import { Link } from 'react-router-dom'
import './DashBoard.css';

const DashBoard = () => {
  const [receipts, setReceipts] = useState([]);

  useEffect(() => {
  const fetchReceipts = async () => {
    const allReceipts = await getAllReceipts();
    setReceipts(allReceipts)
    console.log(allReceipts)
  }
  fetchReceipts()
  },[])

  

  return (
    <div>
    {receipts.map((receipt) => (
    <div key={receipt.id} className='receipt-box'>
      <Link to={`/receipt/${receipt.id}`}>
      <h3>{receipt.note}</h3>
      <p>${receipt.amount}</p>
      </Link>
    </div>
    ))}
    </div>
  );
};

export default DashBoard;