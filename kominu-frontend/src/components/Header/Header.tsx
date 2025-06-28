import './Header.scss';
import logo from '../../assets/kominu.png';

const Header = () => {

  return (
    <header className='header'>
      <div className='header__logo'> 
      <img src={logo} alt="Kominu logotyp" className='header__logo-img'/>
      </div>
      <nav className='header__nav'>
        <div className='dropdown'>
          <a href="#" className='dropdown__toggle'>
            Våra system <span className='dropdown__icon'>▼</span>
          </a>
          <div className='dropdown__menu'>
            <a href="/besokssystem">Besöksystem</a>
          </div>
        </div>
        
        <a href="#">Kontakt</a>
        <a href="#">Boka demo</a>
      </nav>

    </header>
  );
};

export default Header;