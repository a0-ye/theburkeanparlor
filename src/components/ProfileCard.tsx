
import '../styles/ProfileCard.css';

interface ProfileCardProps {
  name: string;
  subtitle?:string;
  description: string;
  image: string;
}

export default function ProfileCard(props: ProfileCardProps) {
  return (
    <div className="profile-card" style={{}}>
        <div className="profile-image">
          <img src={props.image} alt={props.name+'_Picture'} style={{width:110, height:110}} />
        </div>
        <div className="profile-info">
          <div style={{ fontSize:'1.4em'}} className="profile-name">{props.name}</div>
          <div style={{color:'#7e7e7e', fontStyle:'italic'}}> {props.subtitle}</div>
          <p className="profile-description">{props.description}</p>
        </div>
    </div>
  );
}
