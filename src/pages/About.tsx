
import ProfileCard from '../components/ProfileCard';
import '../styles/About.css'

import drool from '../data/Pictures/drooling.png'
import sn from '../data/Pictures/About/sn.jpeg'
import jt from '../data/Pictures/About/jt.jpg'
import tz from '../data/Pictures/About/tz.jpg'
import ev from '../data/Pictures/About/ev.webp'
import { colors, } from '../assets/colors';
const teamMembers = [
  {
    name: "Evelyn Davis",
    description: "Evelyn Davis is a Screenwriting MFA Candidate and USC’s School of Cinematic Arts. Prior to joining USC, Evelyn worked in production on film and TV sets. Evelyn has a bachelor’s degree from Scripps College in media studies, with a minor in political science, and is endlessly passionate about applying both to write stories that capture national identity and national memory on screen.",
    subtitle: 'Editor-in-Chief',
    image: ev
  },
  {
    name: "Sophie Najm",
    subtitle: 'Editor',
    description: "Before Sophie Najm joined USC for screenwriting, she majored in writing & literature, both working for and being published in multiple literary journals. She loves reading anything that shows the familiar in unfamiliar ways.",
    image: sn
  },
  {
    name: "Tony Zhu ",
    subtitle: 'Editor',

    description: "Tony Zhu started as a software engineer writing personal essays and poems on the side. His passion for art led him to quit tech in 2023, where he committed to various creative pursuits including filming video essays, making video games, and, of course, writing more. Now at USC, Tony spends most of his time writing scripts but still makes time to stay in touch with his left brain.",
    image: tz
  },
  {
    name: "JT",
    subtitle: 'Editor',
    description: "His name is JT and he likes to party",
    image: jt
  },
  {
    name: "adrian",
    subtitle: 'Web Developer',
    description: "Adrian is a software engineer with experience in a variety of different technologies who loves a good challenge to tackle",
    image: drool
  },



];

export default function About() {
  return <>
    <div id="about-container" style={{
      display: 'flex', flexDirection: 'column',
      alignItems: "center", gap: '1vw',
      // width: '100%', height: '100%', 
    }}>
      <div id='top-half' style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%',
        backgroundColor: colors.pinksalmon,

      }}>
        <div id="about-info" style={{
          display: 'flex', maxHeight: 'fit-content', width: '60%',
          alignItems: "center", justifyContent: 'center', gap: '5vw',
          marginTop: '3em', marginBottom: '3em'
        }}>
          <div id="about-text" style={{}}>
            <h1 style={{}}>About Us</h1>
            <p>
              The Burkean Parlor Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo laudantium at voluptate fugiat repellendus similique ea dolore reiciendis officiis velit ullam qui dicta rerum a quo non, omnis, deleniti vel?
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo laudantium at voluptate fugiat repellendus similique ea dolore reiciendis officiis velit ullam qui dicta rerum a quo non, omnis, deleniti vel?
            </p>
            <p>
              Explicabo laudantium at voluptate fugiat repellendus similique ea dolore reiciendis officiis velit ullam qui dicta rerum a quo non, omnis, deleniti vel? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              In, veritatis! Cum dolor autem laudantium quo, iusto numquam ipsum distinctio ipsa corrupti, esse velit aut. Vero iure nulla unde cum odit!
            </p>
          </div>

          <div id="about-image" >
            <img src="https://placehold.co/350x350" />
          </div>
        </div>
      </div>

      <h1 style={{}}>Masthead</h1>
      <div id='bottom-half' style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%',

      }}>

        <div className="profile-container">
          {teamMembers.map((member) => (
            <ProfileCard
              key={member.name}
              name={member.name}
              subtitle={member.subtitle}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>
      </div>

      <div id='contact-footer' style={{ 
        backgroundColor: '#ff0101',
        width: '100%', margin: '0 10% 0 10%'
      }}>
        <h1>Contact Us</h1>
        <p> thisisanemail@mailroom.com</p>
      </div>



    </div>
  </>
}