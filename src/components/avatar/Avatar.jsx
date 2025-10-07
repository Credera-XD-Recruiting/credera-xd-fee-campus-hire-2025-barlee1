import './avatar.css';

export const Avatar = ({ firstName, lastName, imageUrl, size = 60 }) => {
  const initials =
    `${firstName?.[0] || ''}${lastName?.[0] || ''}`.toUpperCase();

  return (
    <div
      className="avatar"
      style={{ width: size, height: size, fontSize: size / 2 }}
    >
      {imageUrl ? (
        <img src={imageUrl} alt={`${firstName} ${lastName}`} />
      ) : (
        <span className="avatar-initials">{initials}</span>
      )}
    </div>
  );
};
