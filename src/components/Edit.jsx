import { Link, useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export default function New (){
    const [transaction, setTransaction] = useState([]);

    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(() => {
        axios.get(`${API}/transactions/${id}`).then((response) => {
          setTransaction(response.data);
          // console.log(new Date(transaction.date).toLocaleDateString())
        });
      }, [id]);


        function formHandler(event){
            event.preventDefault();
            axios.put(`${API}/transactions/${id}`, transaction);
             navigate(`/`)
        };

      

      const onChange =(event) => {
        console.log([event.target.value]);
        setTransaction({...transaction, [event.target.id]: event.target.value});
      }


    return ( 
    <>
        <h1>Edit</h1>
        <h5><Link to="../">Back</Link></h5>
            <form className="mb-3" onSubmit={formHandler}>

                <label for="item_Name">Item Name</label>
                <input type="text" placeholder="Name" value={transaction.item_name} id="item_name" onChange={onChange} required/>

                <label for="category">Category</label>
                <input type="text" placeholder="category" value={transaction.category} id="category" onChange={onChange} required/>
                
                <label for="from">from</label>
                <input type="text" placeholder="From" value={transaction.from} id="from" onChange={onChange} required/>

                <label for="date">Date</label>
                <input type="date" placeholder="date" value={transaction.date} id="date" onChange={onChange} required/>

                <label for="amount">Amount</label>
                <input type="number" placeholder="number" value={transaction.amount} id="amount" onChange={onChange} required/>
                
                    <button type="submit" id="submit">Submit</button>
            </form>

    </>

    )
}