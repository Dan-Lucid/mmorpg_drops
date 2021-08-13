import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import ItemTable from '../tables/ItemTable.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "@material-ui/core";


export function Items() {
  const itemData = [
  ]

  const [items, setItems] = useState(itemData)  
  
  const SERVICE_URL = 'http://localhost:8080';

  const getUserData = () => {
    fetch(SERVICE_URL + "/allItems")
      .then((response) => response.json())
      .then(items => setItems(items))
      .catch((error) => {
        console.log("Items Error");
        console.log(error);
      });
  };
  

  useEffect(() => {
    getUserData()
  }, [])

  if(items) {
    return (
      <div className="Items">
        <Container>
          <hr />
          <Row>
            <Col>
              <h2>Items</h2>
              <ItemTable
                items={items}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  
}