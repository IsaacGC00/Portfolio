import {BsFillMoonStarsFill, BsGithub} from 'react-icons/bs';
import {SiLinkedin} from 'react-icons/si'
import {styles, font_style, spacing, hover, bg_style, img_styling } from './style';

function App() {
  
  return (
    <div className={`${styles.font_family}`}>
      <main>
        <section>
          <nav className={`${spacing.nav} ${bg_style.nav}`}>
            <h1 className={`${font_style.h1} ${spacing.nav_namepage}`}>Isaac Portfolio</h1>
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
        <section className={`${spacing.hero}`}>
          <div>
            <img className={`${img_styling.photo} ${spacing.photo}`} 
            src="/src/assets/photo.jpg" 
            alt="Photo of Isaac"/>
          </div>
          <div className={`${bg_style.line}`}></div>
          <div>
            <h2 className={`${font_style.h2}`}>Isaac Guzmán</h2>
            <h3 className={`${font_style.h3}`}>Front End Developer</h3>
            <p className={`${font_style.p}`}>
              Found me in:
            </p>
            <div className={`${font_style.icons} ${spacing.icons} ${hover.icons}`}>
              <a href="https://www.linkedin.com/in/aisaacgc" target='_blank'><SiLinkedin /></a>
              <a href="https://github.com/IsaacGC00" target='_blank'><BsGithub /></a>
            </div>
            <h2>Scroll down to see my projects</h2>
          </div>
        </section>
        <section className={`${spacing.project_section}`}>
          <div>
            <h2 className={`${font_style.h2}`}>Here you can find my projects:</h2>
          </div>
          <div className=''>

          </div>
        </section>
        <section className={`${spacing.about}`}>
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
