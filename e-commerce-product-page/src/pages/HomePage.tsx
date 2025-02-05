import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
const HomePage = () => {
  return ( 
    <section>
      <nav>
        <NavBar />
      </nav>
        <main>
            <h1>Main content</h1>  
        </main>
        <footer>
            <Footer />
        </footer>      
    </section>
  );
}

export default HomePage;