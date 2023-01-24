import styled from 'styled-components';
import Flex from '../Flex/Flex';
import Typography from '../Typography/Typography';

const ProfilePhoto = styled.img`
  height: 1.7rem;
  width: 1.7rem;
  background-color: ${(props) => props.theme.colors.blue};
  border-radius: 100%;
  margin-right: 1rem;
`;

const ProfileWrapper = styled(Flex)``;

const Profile = ({ name, img }) => (
  <ProfileWrapper>
    <ProfilePhoto src={img} alt='img' />
    <Typography contentText style={{ width: '3.5rem' }}>
      {name}
    </Typography>
  </ProfileWrapper>
);

export default Profile;
