import React from 'react';
import './Header.css'; 
import logo from '../assets/logo.png'; 

// React.FC é um "Function Component" do TypeScript
const Header: React.FC = () => { 
  return (
    <header className="header"> 
      <nav className="navegation-header">
        <div className="logo-png">
          <img src={logo} alt="logo-png" width="70px" height="70px" />
        </div>
        
        <ul className="header-list">
          {/* ... todo o seu <li> ... */}
          <li className="terms-header"><a href="#" className="terms-link button-header">Início</a></li>
          <li className="terms-header"><a href="#" className="terms-link button-header">Quem somos</a></li>
          <li className="terms-header"><a href="#" className="terms-link button-header">Ações</a></li>
          <li className="terms-header"><a href="#" className="terms-link button-header">Educação</a></li>
          <li className="terms-header"><a href="#" className="terms-link button-header">Prevenção</a></li>
          <li className="terms-header"><a href="#" className="terms-link button-header">Seja um apoiador</a></li>
          <li className="terms-header"><a href="#" className="terms-link button-header" id="button-voluntario">Seja um voluntário</a></li>
          <li className="terms-header"><a href="#" className="terms-link button-header">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;