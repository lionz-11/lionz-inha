import Layout from '../../component/Layout/Layout';
import AssignmentBox from '../../component/AssignmentBox/AssignmentBox';
import BarComponentContainer from '../../component/BarComponentContainer/BarComponentContainer';

// 과제 제출 현황을 props로 받아서 푼다.
const a = new Array(4).fill(0);

const ProfileEdit = () => (
  <Layout size='small'>
    <div style={{ border: '1px solid black', width: '100%' }}>profile edit</div>
    <BarComponentContainer
      bars={a}
      renderProp={() => (
        <AssignmentBox
          detail='안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요'
          date='0324'
          link='https://www.notion.so/7e8ac7301b034f3189cfb85749668cb8'
          name='sehyun'
          src='http://t1.daumcdn.net/friends/prod/editor/dc8b3d02-a15a-4afa-a88b-989cf2a50476.jpg'
        />
      )}
    />
  </Layout>
);

export default ProfileEdit;

// compound component + render props
/**
 * Data 목록을 받아서 그냥 barComponentContainer에 꽂으면 그 안에서 map으로 펼쳐진다. 그리고 그 맵안에 들어갈걸 render prop 주는 부분에서 구현해야한다.
 */
