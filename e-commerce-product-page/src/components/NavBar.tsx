import { NavLink } from "react-router-dom";

const  NavBar= () => {
  return ( 
    <section>
          <section>
            <div>
              <h1>NOME DA PÁGINA</h1>
              <div>
              <form>
                <input type="text" placeholder="Search..."/>
              </form>
              </div>
              <ul>
                <li><NavLink to="/login" end>login</NavLink></li>
                <li><NavLink to="/favorites" end>Favoritos</NavLink></li>
                <li><NavLink to="/cart" end>Carrinho</NavLink></li>
              </ul>
            </div>
          </section>
    </section>
  );
}

export default NavBar;