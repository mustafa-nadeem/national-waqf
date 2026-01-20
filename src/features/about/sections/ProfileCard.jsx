import Placeholder from '../../../components/ui/Placeholder';
import './ProfileCard.css';

export default function ProfileCard({ name, role, bio, imageLabel }) {
  return (
    <article className="profile-card">
      <div className="profile-card__image">
        <Placeholder label={imageLabel || name} aspectRatio="1/1" />
      </div>
      <div className="profile-card__content">
        <h3 className="profile-card__name">{name}</h3>
        {role && <p className="profile-card__role">{role}</p>}
        {bio && <p className="profile-card__bio">{bio}</p>}
      </div>
    </article>
  );
}
