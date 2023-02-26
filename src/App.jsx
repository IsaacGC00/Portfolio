import {BsFillMoonStarsFill} from 'react-icons/bs';
import styles from './style';
import { font_size } from './style';

function App() {
  
  return (
    <div className='font-quicksand'>
      <main className='bg-slate-100'>
        <section> 
          <nav className='flex items-center justify-between text-slate-100 font-semibold text-xl bg-cyan-700 w-full h-12'>
            <h1 className={`${font_size.title}`}>Isaac Portfolio</h1>
            <ul className="flex items-center gap-1 sm:gap-5 font-normal">
              <li className={`${styles.hover_navbar} ${font_size.navbar}`}>Home</li>
              <li className={`${styles.hover_navbar} ${font_size.navbar}`}>About me</li>
              <li className={`${styles.hover_navbar} ${font_size.navbar}`}>Projects</li>
              <li className={`${styles.hover_navbar} ${font_size.navbar}`}><a href="#">Resume</a></li>
              <li className={`${styles.hover_navbar} ${font_size.navbar}`}>Contact me</li>
              <li className={`${styles.hover_navbar} ${font_size.navbar}`}><BsFillMoonStarsFill/></li>
            </ul>
          </nav>
        </section>
        <section className='flex items-center justify-left'>
          <img className=' w-60 h-60 border-cyan-700 border-2 object-cover overflow-hidden m-5 rounded-full' src="/src/assets/photo.jpg" alt="Image of Isaac"  />
          <h1 className='text-2xl '>This is me</h1>
        </section>
      </main>
    </div>
  )
}

export default App
