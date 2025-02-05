const  NavBar= () => {
  return ( 
    <section>
          <section>
            <div>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">Templete</a></li>
                <li><a href="/contact">Docs</a></li>
                <li><a href="/blog">Sale</a></li>
              </ul>
            </div>
            <div>
              <form>
                <input type="text" placeholder="Search..."/>
              </form>
            </div>
          </section>
    </section>
  );
}

export default NavBar;