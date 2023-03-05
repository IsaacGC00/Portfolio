import {BsFillMoonStarsFill, BsGithub} from 'react-icons/bs';
import {SiLinkedin} from 'react-icons/si'
import {styles, font_style, spacing, hover, bg_style, img_styling } from './style';

function App() {
  
  return (
    <div className={`${styles.font_family}`}>
      <main>
        <section>
          <nav className={`${spacing.nav} ${bg_style.nav}`}>
            <h1 className={`${font_style.h1}`}>Isaac Portfolio</h1>
            <ul className={`${font_style.nav_ul} ${spacing.nav_ul} ${hover.nav_links}`}>
              <li>Home</li>
              <li>Projects</li>
              <li>About</li>
              <li>
                <a href="#">Resume</a>
              </li>
              <li>Contact Me</li>
              <li><BsFillMoonStarsFill/></li>
            </ul>
          </nav>
        </section>
        <section>
          <div>
            <img className={`${img_styling.photo} ${spacing.photo} `} src="/src/assets/photo.jpg" alt="Photo of Isaac" />
            <h2 className={`${font_style.h2} ${spacing.hero_h2}`}>Isaac Guzmán</h2>
            <h3 className={`${font_style.h3}`}>Front End Developer</h3>
            <p className={`${font_style.p}`}>
              Found me in:
            </p>
          </div>
          <div>
            <SiLinkedin />
            <BsGithub />
          </div>
        </section>
        <section>
          <div>
            <h2 className={`${font_style.h2}`}>Here you can find my projects:</h2>
          </div>
        </section>
        <section>
          <div>
            <h2 className={`${font_style.h2}`}>About me</h2>
            <p className={`${font_style.p}`}>I'm a mechatronic engineer</p>
          </div>
        </section>
        <section>
          <h2 className={`${font_style.h2}`}>Contact me</h2>
          <form action="">

          </form>
        </section>
      </main>
    </div>
  )
}

export default App
