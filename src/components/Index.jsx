import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import Table from 'react-bootstrap/Table';
import CloseButton from 'react-bootstrap/CloseButton';

import axios from "axios";

const API = process.env.REACT_APP_API_URL;


export default function Index({setTotal, total}) {
    const navigate = useNavigate();
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        axios.get(`${API}/transactions`).then((response) => {
          setTransactions(response.data);
          
          
        });
      }, []);




      useEffect(() => {

    const completeTotal = transactions.length > 0 ? transactions.reduce( (a, b) => a + Number(b.amount), 0) : 0 ;
      setTotal(completeTotal);
    }, [transactions, setTotal]);

      function onDeleteClick(i){
    
        axios.delete(`${API}/transactions/${i}`).then((response) => {
        //   setTransactions(response.data);
        transactions.splice(i, 1);

        setTransactions([...transactions]);
          navigate("/")
        });
  
}




return (
            <>
            <Table className="m-5" style={{width:"75vw"}}striped bordered hover>
      <thead>
        <tr>
          <th>Date</th>
          <th>Name</th>
          <th>Category</th>
          <th>Amount</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((cost, i ) => {
            let link = `./transaction/${i}`;

            return(
                <tr key={cost.item_name}>
                    <td>{cost.date}</td>
                    <td><Link to={link}>{cost.item_name}</Link></td>
                    <td>{cost.category}</td>
                    <td>{cost.amount}</td>
                    <td><CloseButton key={i} onClick={()=>onDeleteClick(i) }/> </td>
                </tr>

            )
        })}
      </tbody>
    </Table>
    <h3>Total: </h3><p>{!!total ? total : total }</p>
            </>
)
}