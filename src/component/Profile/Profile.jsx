import styled from 'styled-components';
import Flex from '../Flex/Flex';
import errorImg from '../../assets/svgs/errorImg.png';

const ProfilePhoto = styled.img`
  height: 2.7rem;
  width: 2.7rem;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 100%;
  margin-right: 1rem;
  object-fit: cover;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const ProfileWrapper = styled(Flex)``;

const Profile = ({ src }) => {
  const onErrorImg = (e) => {
    e.target.src = errorImg;
  };

  return (
    <ProfileWrapper>
      <ProfilePhoto src={src} alt='img' onError={onErrorImg} />
    </ProfileWrapper>
  );
};

export default Profile;
