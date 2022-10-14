import React from 'react'
import { useState, useEffect } from 'react';
import { useForm } from "react-hook-form"
import Card from 'react-bootstrap/Card';

export default function PageHeader() {
  const [text, setText] = useState('someText');
  
  useEffect(() => {
    //setText('Harsh')
  }, []);

  return (
    <div>
      <Card>
      <Card.Body>{text}</Card.Body>
      </Card>
      <br/>
    </div>
    
  )
}
