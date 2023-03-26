import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import Margin from '../../Margin/Margin';
import Typography from '../../Typography/Typography';
import Flex from '../../Flex/Flex';

const InfoWrapper = styled.div`
  position: fixed;
  top: 50px;
  right: max(calc((100vw - 1312px) / 2), 0px);
  width: 320px;
  margin-right: 20px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.white};
  ${(props) => props.theme.box};
  box-shadow: 2px 4px 8px -1px rgba(49, 76, 145, 0.15);
  padding: 0px 22px;
`;

const StyledTextButton = styled.button`
  color: ${(props) => props.theme.colors.gray};
  border: none;
  background: none;
  cursor: pointer;
  ${(props) => props.theme.font.sideContentSmall};
`;

const UserInfo = ({ id, part, name, comment }) => {
  const navigate = useNavigate();
  return (
    <InfoWrapper column>
      <Margin height='22' />
      <Flex style={{ width: '100%' }} justify='space-between'>
        <Flex>
          <Typography sideContentSmall color={part === 'FE' ? 'blue' : 'red'}>
            {part}
          </Typography>
          <Margin width='10' />
          <Typography buttonText>{name}</Typography>
        </Flex>
        <StyledTextButton onClick={() => navigate(`/profile-edit/${id}`)}>수정</StyledTextButton>
      </Flex>
      <Margin height='10' />
      <Typography sideContentSmall color='darkGray' style={{ width: '100%' }}>
        {comment}
      </Typography>
      <Margin height='22' />
    </InfoWrapper>
  );
};

export default UserInfo;
