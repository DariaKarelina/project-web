import logo from './logo.svg';
import './App.css';
import Head from './Head';
import Menu from './Menu';
import News from './News';
import Message from "./Message"

const App = () => {
  return (
    <div className="Web">
      <Head/>
      <Menu/>
      <News/>
      <Message/>

    </div>
    
  );
}

export default App;
