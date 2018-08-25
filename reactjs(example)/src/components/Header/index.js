import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import HeaderActions from './components/HeaderActions';
import { HeaderContainer, SearchBar, NavBar } from './styles';

import CartIcon from '~/assets/images/cart_icon.svg';
import WishlistIcon from '~/assets/images/wishlist_icon.svg';

const Header = () => (
  <HeaderContainer>
    <SearchBar>
      <Link to="/">LOGOTIPO</Link>
      <form>
        <input type="search" placeholder="Busque o produto que deseja..." />
        <button type="submit">Procurar</button>
      </form>
      <HeaderActions />
    </SearchBar>
    <NavBar>
      <nav>
        <NavLink to="/">Categorias</NavLink>
        <NavLink to="/">Ofertas</NavLink>
        <NavLink to="/">Destaques</NavLink>
        <NavLink to="/">Pra você</NavLink>
        <section>
          <button type="button">
            <img src={WishlistIcon} alt="Lista de desejos" />
          </button>
          <button type="button">
            <img src={CartIcon} alt="Carrinho" />
          </button>
        </section>
      </nav>
    </NavBar>
  </HeaderContainer>
);

export default Header;
