import './App.css';
import Button from './components/Button';
import { useEffect, useState } from 'react'
import Card from './components/Card'
import { SettingsSystemDaydreamTwoTone } from '@mui/icons-material';


function App() {

  const [data, setDate] = useState([])
  const [sorted, setSorted] = useState(false)

  const addCard = () => {
    setDate([
      ...data,
      {
        id: Math.floor(Math.random() * 100)
      }
    ])
  }



  useEffect(() => {
    setDate([
      ...data
    ])
  }, [sorted])


  return (
    <div className="App">
      <div style={{
        height: '500px',
        width: "500px",
        border: "1px solid black",
        marginTop: "25px",
        display: 'inline-flex'
      }}>
        <div
          style={{
            border: '1px solid black',
            height: "500px",
            width: '350px'
          }}
        >
          <div style={{
            border: '1px solid black',
            height: '25px',
            width: '350px'
          }}>
            <Button text={'Add card'} onClick={() => {
              addCard()
            }} />
            <Button text={'sort card'} onClick={() => {
              const sortedData = [...data].sort((a, b) => a.id - b.id)
              setDate(sortedData)
              setSorted(!sorted)
            }} />
          </div>
          <div style={{
            border: '1px solid black',
            height: '450px',
            overflow: 'scroll',
          }} >
            {
              data?.map((dataCard) => {
                return (
                  <Card key={dataCard.id} onDelete={() => {
                    setDate(data.filter((item) => item.id !== dataCard.id))
                  }} >{dataCard.id}</Card>
                )
              })
            }
          </div>
        </div>
        <div style={{
          border: '1px solid black',
          height: "500px",
          width: '150px'
        }}>
          <h6>
            Pres the "add card"
            button to add the
            new Card
            Use the 'sort cards'
            button to sort the
            Bard by the increase
            Press an X icon on the top right to delete them.
          </h6>
        </div>
      </div>
    </div>
  );
}

export default App;
