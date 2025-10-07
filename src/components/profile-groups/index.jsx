import './style.css';
import { getProfileData } from '../../services/profile';
import { useQuery } from '@tanstack/react-query';

export const ProfileGroups = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileData,
  });

  const getActivityClass = activity => {
    switch (activity) {
      case 'active':
        return 'activity-active';
      case 'moderate':
        return 'activity-moderate';
      case 'low':
        return 'activity-low';
      case 'inactive':
        return 'activity-inactive';
      default:
        return '';
    }
  };

  if (isLoading)
    return (
      <section id="profile-groups">
        <h2 className="page-heading-2">Groups</h2>
        <ul className="profile-group-results fade-in">
          <li className="profile-group-results-item">
            <div className="profile-group-results-card content-card skeleton-card">
              <div className="skeleton-img loading"></div>
              <div className="skeleton-block loading"></div>
            </div>
          </li>
          <li className="profile-group-results-item">
            <div className="profile-group-results-card content-card skeleton-card">
              <div className="skeleton-img loading"></div>
              <div className="skeleton-block loading"></div>
            </div>
          </li>
          <li className="profile-group-results-item">
            <div className="profile-group-results-card content-card skeleton-card">
              <div className="skeleton-img loading"></div>
              <div className="skeleton-block loading"></div>
            </div>
          </li>
          <li className="profile-group-results-item">
            <div className="profile-group-results-card content-card skeleton-card">
              <div className="skeleton-img loading"></div>
              <div className="skeleton-block loading"></div>
            </div>
          </li>
        </ul>
      </section>
    );

  const { groups } = data;

  return (
    <section id="profile-groups">
      <h2 className="page-heading-2">Groups</h2>
      <ul className="profile-group-results fade-in">
        {groups.map(group => (
          <li className="profile-group-results-item" key={group.id}>
            <a
              className={`profile-group-results-card content-card ${getActivityClass(group.activity)}`}
              href={group.href}
            >
              <div className="profile-group-avatar">
                <img src={group.image} />
              </div>
              <div className="profile-group-content" key={group.favorite}>
                {group.favorite ? (
                  <span>✩ {group.name} ✩</span>
                ) : (
                  <span>{group.name}</span>
                )}
                <p className="page-paragraph"></p>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};
