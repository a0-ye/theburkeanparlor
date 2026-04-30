
import ProfileCard from '../components/ProfileCard';
import '../styles/About.css'

import sn from '../data/Pictures/About/sn.jpeg'
import jt from '../data/Pictures/About/jt.jpg'
import tz from '../data/Pictures/About/tz.jpg'
import { colors } from '../assets/colors';
const teamMembers = [
  {
    name: "Sophie Najim",
    description: "Before Sophie Najm joined USC for screenwriting, she majored in writing & literature, both working for and being published in multiple literary journals. She loves reading anything that shows the familiar in unfamiliar ways.",
    image: sn
  },
  {
    name: "JT",
    description: "His name is JT and he likes to party",
    image: jt
  },
  {
    name: "Tony Zhu ",
    description: "Tony Zhu started as a software engineer writing personal essays and poems on the side. His passion for art led him to quit tech in 2023, where he committed to various creative pursuits including filming video essays, making video games, and, of course, writing more. Now at USC, Tony spends most of his time writing scripts but still makes time to stay in touch with his left brain 🙂",
    image: tz
  },

];

export default function About() {
  return <>
    <div id="about-container" style={{
      display: 'flex', flexDirection: 'column',
      alignItems: "center", gap: '1vw',
      width: '100%', height: '100%', maxHeight: 'fit-content',
    }}>
      <div id='top-half' style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%',
        backgroundColor: colors.pinksalmon,

      }}>
        <div id="about-info" style={{
          display: 'flex', maxHeight: 'fit-content', width: '60%',
          alignItems: "center", justifyContent: 'center', gap: '5vw',
          marginTop: '3em', marginBottom:'3em'
        }}>
          <div id="about-text" style={{}}>
            <h1 style={{textDecoration:'underline'}}>About Us</h1>
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

      <h1 style={{textDecoration:'underline'}}>Masthead</h1>
      <div id='bottom-half' style={{
        display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%',

      }}>

        <div className="profile-container">
          {teamMembers.map((member) => (
            <ProfileCard
              key={member.name}
              name={member.name}
              description={member.description}
              image={member.image}
            />
          ))}
        </div>
      </div>



    </div>
  </>
}