/*********************************************************************************
* WEB422 – Assignment 3
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Harsh Vishnu Limbachiya Student ID:157295197 Date: 14/10/2022
*
*
********************************************************************************/ 
// import Title from '../pages/movies/title'
import About from '../pages/about'
//import Layout from '../components/Layout'
import MainNav from '../components/MainNav'
import MovieDetails from '../components/MovieDetails'
import PageHeader from '../components/PageHeader'
import useSWR from 'swr'
import {Pagination, Accordion, PageItem} from 'react-bootstrap'
import { useState, useEffect } from 'react'
export default function Home() {
  const[page, setPage] = useState(1);
  const[pageData, setPageData] = useState([])
  const {data, error} = useSWR(`https://tame-ruby-eel-boot.cyclic.app/api/movies?page=${page}&perPage=10`)
  useEffect(() => {
    if (data) {
    setPageData(data);
    }
   }, [data]);

  const previouse = () => {
    if(page > 1) {
      setPage(prev => prev - 1)
    }
  }

  const next = () => {
    setPage(prev => prev + 1)
  }
  
  
  return (
    <>
    <PageHeader text="Film Collection : Sorted by Date"/>
    <Accordion defaultActiveKey="0">
    {
      pageData.map(mov => (
          <Accordion.Item eventKey={mov._id} key={mov._id}>
            <Accordion.Header>
              <strong>{mov.title}</strong> ({mov.year} : Directed By { mov.directors })
            </Accordion.Header>
            <Accordion.Body>
              <MovieDetails movie={mov} />
            </Accordion.Body>
          </Accordion.Item>
          
      ))
    }
     </Accordion>
     <Pagination>
        <Pagination.Prev onClick={previouse} />
          <Pagination.Item>
              {page}
          </Pagination.Item>
        <Pagination.Next onClick={next}/>
     </Pagination>
    </>
    
  )
}
