import './Header.scss';
import logo from '../../assets/kominu.png';

const Header = () => {

  return (
    <header className='header'>
   <a href="/" className='header__logo'>
   <img src={logo} alt="Kominu logotyp" className='header__logo-img' />
   </a>
      <nav className='header__nav'>
        <div className='dropdown'>
          <a href="#" className='dropdown__toggle'>
            Våra system <span className='dropdown__icon'>▼</span>
          </a>
          <div className='dropdown__menu'>
            <a href="/visitorsystem">Besöksystem</a>
          </div>
        </div>
        
        <a href="#footer">Kontakt</a>
        <a href="mailto:adnan@kominu.se?subject=Boka%20demo">Boka demo</a>
      </nav>

    </header>
  );
};

export default Header;