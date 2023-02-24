import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";

import axios from "axios";

import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import CloseButton from 'react-bootstrap/CloseButton';
import Button from 'react-bootstrap/Button';


const API = process.env.REACT_APP_API_URL;

export default function Show (){
    const { id } = useParams();
    const [transaction, setTransaction] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`${API}/transactions/${id}`).then((response) => {
          setTransaction(response.data);
        });
      }, [id]);


      function onDeleteClick(evt){
    
        axios.delete(`${API}/transactions/${id}`).then((response) => {
          setTransaction(response.data);
          navigate("/")
        });
  
}
let link = `/transaction/${id}/edit`;

    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Header>{transaction.item_name} <CloseButton onClick={onDeleteClick}/></Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{transaction.date}</ListGroup.Item>
                    <ListGroup.Item>{transaction.category}</ListGroup.Item>
                    <ListGroup.Item>{transaction.amount}</ListGroup.Item>
                    <ListGroup.Item><Link to={link}><Button variant="secondary">Edit</Button></Link></ListGroup.Item>
                </ListGroup>
            </Card>
        </>
    )
}