import './style.css';
import { getProfileData } from '../../services/profile';
import { useQuery } from '@tanstack/react-query';
import { Avatar } from '../avatar/Avatar';

export const ProfileHeader = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['profile'],
    queryFn: getProfileData,
  });

  if (isLoading)
    return (
      <section id="profile-header">
        <div className="profile-header">
          <div className="profile-avatar">
            <img className="loading" src="" />
          </div>
          <div className="profile-info content-card">
            <h1 className="profile-info-name skeleton-block skeleton-block--half loading">
              <img src="" className="profile-underline" />
            </h1>
            <p className="page-paragraph page-paragraph--smoke skeleton-block skeleton-block--quarter loading"></p>
          </div>
        </div>
      </section>
    );

  const fullName = `${data?.firstName} ${data?.lastName}`;
  const titlecompany = `${data?.jobTitle} @ ${data?.companyName}`;

  return (
    <section id="profile-header">
      <div className="profile-header">
        <div className="profile-avatar">
          <Avatar
            firstName={data.firstName}
            lastName={data.lastName}
            imageUrl={data.image}
            size={60}
          />
        </div>
        <div className="profile-info content-card">
          <h1 className="profile-info-name">
            {fullName}
            <img src="/underline.svg" className="profile-underline" />
          </h1>
          <p class="page-paragraph page-paragraph">{titlecompany}</p>
        </div>
      </div>
    </section>
  );
};
