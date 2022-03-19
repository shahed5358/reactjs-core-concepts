// import logo from './logo.svg';
// import './App.css';

const num = 24;
const singers = [
  { name: 'shahed', job: 'singer' },
  { name: 'foysal', job: 'singer' }
  { name: 'agun', job: 'soopno' },
  { name: 'shobro', job: 'pathor' }
]

// const singerStyle = {
//   color: 'purple',
//   backgroundColor: 'white'
// }
function App() {
  const nayoks = ['Rubel', 'Bapparaz', 'Kuber', 'Jasim', 'riaz', 'rajjak'];
  return (
    <div className="App">
      {
        nayok.map(nayok => <li>Name: {nayok}</li>)
      }
      {/* {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      } */}
      {
        singers.map(singer => <Person name={singer.name}></Person>)
      }


      {/* <Person name={nayoks[0]} nayika="Mousomi"></Person>
      <Person name={nayoks[1]} nayika="chaka kaise"></Person>
      <Person name={nayoks[2]} nayika="kopila"></Person> */}
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
