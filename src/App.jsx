import './App.css'
import Counter from './Counter'
import Team from './team'
import Users from './users'



function App() {

  function handleClick() {
    alert('button clicked')
  }

  const handleClick2 = () => {
    alert('button 2 clicked')
  }

  const addToFive = (num) => {
    alert(num+5);
  }

  return (
    <>
      <h1>React core concepts</h1>
     
      <Users></Users>
      <Team></Team>
      <Counter></Counter>
     

      <button onClick={handleClick}>Click Here
      </button> <br />

      <button onClick={handleClick2}>Click Here 2
      </button> <br />

      <button onClick={() => { alert('button 3 clicked') }}>Click Here 3</button> <br />

      <button onClick={() => addToFive(3)}>Click Here 4
      </button>
    </>
  )
}

export default App
