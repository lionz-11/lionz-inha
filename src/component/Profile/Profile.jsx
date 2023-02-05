import styled from 'styled-components';
import Flex from '../Flex/Flex';

const ProfilePhoto = styled.img`
  height: 2.7rem;
  width: 2.7rem;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 100%;
  margin-right: 1rem;
`;

const ProfileWrapper = styled(Flex)``;

const Profile = ({ src }) => (
  <ProfileWrapper>
    <ProfilePhoto src={src} alt='img' />
  </ProfileWrapper>
);

export default Profile;
