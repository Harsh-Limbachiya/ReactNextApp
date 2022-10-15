import React from 'react'
import useSWR from 'swr'
import {useRouter} from 'next/router'
import MovieDetails from '../../components/MovieDetails'
import Error from 'next/error';
import PageHeader from '../../components/PageHeader';

export default function title() {
  const router = useRouter();
  const {title} = router.query;
  const { data, error } = useSWR(`(Your Cyclic App)/api/movies?page=1&perPage=10&title=title`);
 if(!data) return null;
 if(data) {
    if(data.length === 0){
      return <Error statusCode={404} />
    }
    return(data.map(mov => <div key={mov._id}>
      <PageHeader text={mov.title}/>
      <MovieDetails movie={mov}/>
    </div> ))
 } 
  //{data.length === 0 ? <Error statusCode={404} />: 

}
