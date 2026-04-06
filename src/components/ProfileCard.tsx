import '../styles/ProfileCard.css';

interface ProfileCardProps {
  name: string;
  description: string;
  image: string;
}

export default function ProfileCard({ name, description, image }: ProfileCardProps) {
  return (
    <div className="profile-card">
        <div className="profile-image">
          <img src={image} alt={name+'_Picture'} style={{width:250, height:250}} />
        </div>
        <div className="profile-info">
          <h3 className="profile-name">{name}</h3>
          <p className="profile-description">{description}</p>
        </div>
    </div>
  );
}
