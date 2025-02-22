import '../sass/main.css'
import Hero from '../components/Hero'

export default function Home() {
  return (
    <div className="Home">
      <nav>
        <div className="nav-brand">Thunlam</div>
        <div className="nav-right">
          <a href="">About Us </a>
          <a href="">Tesitmonials</a>
          <a href="">Contact us</a>
        </div>
      </nav>

      <Hero/>
      
      <div className="footer">
        Footer
      </div>
    </div>
  );
}
