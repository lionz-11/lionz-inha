import styled from 'styled-components';
import AssignmentBox from '../../component/AssignmentBox/AssignmentBox';

const List = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

const HomeWorkContentContainer = ({ data }) => (
  <List>
    {data.map((d) => (
      <AssignmentBox key={d.id} data={d} />
    ))}
  </List>
);

export default HomeWorkContentContainer;
