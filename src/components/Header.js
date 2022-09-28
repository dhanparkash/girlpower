import Navbar from './Navbar';
import Logo from  '../images/gptusafooter.png';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
const Header = () => {
  return (
    <header>
      <div className="nav-area container">
        <Link to="/" className="logo">
        <img src={Logo} className="App-logos" alt="logo" />
        </Link>
        <Navbar />
        <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap">
      </div>
    </div>    
      </div>
    </header>
  );
};
export default Header;
