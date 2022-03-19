// import logo from './logo.svg';
// import './App.css';

// const num = 24;
// const singer = { name: 'shahed', job: 'singer' }
// const singer2 = { name: 'foysal', job: 'singer' }

// const singerStyle = {
//   color: 'purple',
//   backgroundColor: 'white'
// }
function App() {
  return (
    <div className="App">
      <Person name="Rubel" nayika="Mousomi"></Person>
      <Person name="Bapparaz" nayika="chaka kaise"></Person>
      <Person name="kuber" nayika="kopila"></Person>
      <h5>NEW component . Yay!</h5>
      <p id="totocompany">Rock mama React</p>
      <Friend phone="01877"></Friend>
      <Friend phone="19234" movie="singum"></Friend>
    </div>
  );
}

function Person(props) {
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Nayika: {props.nayika}</p>
    </div>
  )
}

function Friend(props) {
  return (
    <div className='container'>
      <h1>Name: {props.movie}</h1>
      <p>Phone: {props.phone}</p>
    </div>
  )
}

export default App;
