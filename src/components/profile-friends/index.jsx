import './style.css';
import { getFriendsListData } from '../../services/profile';
import { useQuery } from '@tanstack/react-query';
import { Avatar } from '../avatar/Avatar';

export const ProfileFriends = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['friends'],
    queryFn: getFriendsListData,
  });

  if (isLoading)
    return (
      <section id="profile-friends">
        <div className="content-card fade-in">
          <h2 className="page-heading-2">Friends</h2>
          <ul className="profile-friends-list">
            <li className="profile-list-item">
              <div className="profile-list-item-avatar loading"></div>
              <div className="profile-list-item-info">
                <div className="skeleton-block skeleton-block--half loading"></div>
                <div className="skeleton-block--quarter loading"></div>
              </div>
            </li>
            <li className="profile-list-item">
              <div className="profile-list-item-avatar loading"></div>
              <div className="profile-list-item-info">
                <div className="skeleton-block skeleton-block--half loading"></div>
                <div className="skeleton-block--quarter loading"></div>
              </div>
            </li>
            <li className="profile-list-item">
              <div className="profile-list-item-avatar loading"></div>
              <div className="profile-list-item-info">
                <div className="skeleton-block skeleton-block--half loading"></div>
                <div className="skeleton-block--quarter loading"></div>
              </div>
            </li>
            <li className="profile-list-item">
              <div className="profile-list-item-avatar loading"></div>
              <div className="profile-list-item-info">
                <div className="skeleton-block skeleton-block--half loading"></div>
                <div className="skeleton-block--quarter loading"></div>
              </div>
            </li>
          </ul>
        </div>
      </section>
    );

  const { friends } = data;

  return (
    <section id="profile-friends">
      <div className="content-card fade-in">
        <h2 className="page-heading-2">Friends</h2>
        <ul className="profile-friends-list">
          {[...friends]
            .sort((a, b) => {
              if (a.topFriend && !b.topFriend) return -1;
              if (!a.topFriend && b.topFriend) return 1;

              return a.lastname.localeCompare(b.lastname);
            })
            .map((friend, index) => (
              <li className="profile-list-item fade-in" key={index}>
                <div className="profile-list-item-avatar">
                  {friend.image ? (
                    <img
                      className="loading"
                      src={friend.image}
                      alt={`${friend.firstname} ${friend.lastname}`}
                    />
                  ) : (
                    <Avatar
                      firstName={friend.firstname}
                      lastName={friend.lastname}
                      imageUrl={friend.image}
                      size={60}
                    />
                  )}
                </div>
                <div className="profile-list-item-info">
                  {friend.topFriend && (
                    <span className="top-friend-badge">⭐ Top Friend</span>
                  )}
                  <p className="page-paragraph">
                    {friend.firstname} {friend.lastname}
                  </p>
                  <p className="page-micro">
                    {friend.jobTitle} @ {friend.companyName}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};
