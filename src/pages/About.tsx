
import ProfileCard from '../components/ProfileCard';
import '../styles/About.css'

const teamMembers = [
  {
    name: "John Smith",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "https://placehold.co/250x250"
  },
  {
    name: "Sarah Johnson",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://placehold.co/250x250"
  },
  {
    name: "Michael Chen",
    description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://placehold.co/250x250"
  },
  {
    name: "Sarah Johnson",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://placehold.co/250x250"
  },
  {
    name: "Sarah Johnson",
    description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: "https://placehold.co/250x250"
  },

];

export default function About() {
  return <>
    <div id="about-container" style={{
      display: 'flex', flexDirection: 'column',
      alignItems: "center", justifyContent: "center", gap: '1vw',
      width: '100%', height: '100%', maxHeight: 'fit-content',
    }}>

      <div id="about-info" style={{
        display: 'flex', maxHeight: 'fit-content', width:'60%',
        alignItems: "center", justifyContent: 'center', gap: '5vw',
        marginTop:'3em',
      }}>
        <div id="about-text" style={{}}>
          <h1>About Us</h1>
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

      <h1>Masthead</h1>

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
  </>
}