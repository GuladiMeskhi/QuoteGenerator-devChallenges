
import axios from 'axios'
import { useEffect,useState } from 'react';
import { Card } from '../components/Card/Card';
import { Authorbutton } from '../components/Authorbutton/Authorbutton';
import { Link } from 'react-router-dom'
import { BiRefresh } from 'react-icons/bi'

export const RandomQuote = () => {
    const [quote,setQuote] = useState()
    const API_URL = 'https://quote-garden.herokuapp.com/'
    const API_VERSION = 'api/v3/'

    useEffect(() => {
      fetchData();
    },[])
  
    const fetchData  = async () => {
      const quotes = await axios.get(`${API_URL}${API_VERSION}quotes/random`)
      setQuote(quotes)
    }

    return (
    <>
        <button style={{background:'transparent',width:'fit-content',
          border:'none',fontSize:'32px',cursor:'pointer',
          justifySelf:'flex-end'}} onClick={fetchData}><BiRefresh/></button>
        <Card quoteText={quote?.data?.data[0]?.quoteText} />
        <Link to={'/author/' + quote?.data?.data[0]?.quoteAuthor}>
            <Authorbutton quoteAuthor={quote?.data?.data[0]?.quoteAuthor} quoteGenre={quote?.data?.data[0]?.quoteGenre}/>
        </Link>
    </>
  )
}
