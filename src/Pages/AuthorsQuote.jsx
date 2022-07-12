import React from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { Card } from '../components/Card/Card'
import { BiArrowBack } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'

export const AuthorsQuote = () => {
  const { authorname } = useParams()
  const [data, setData] = React.useState([])
  const navigate = useNavigate()
  
  React.useEffect(() =>{
    axios.get(`https://quote-garden.herokuapp.com/api/v3/quotes?author=${authorname}`)
    .then((response) => setData(response.data))
  },[])

  console.log(data.data)
  return (
    <div className='authorsQuotes'>
      <div>
      <button style={{backgroundColor:'transparent',border:'none',cursor:'pointer'}} onClick={() => navigate('/')}>
        <BiArrowBack/>
      </button>
      <p style={{fontSize:'24px',fontWeight:'700'}}>{ authorname }</p>
      </div>
      {data.data?.map((elem) => {
        return <Card quoteText={elem.quoteText}/>
      })}
    </div>
  )
}
