import { useState, useEffect } from 'react';
import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import styled from 'styled-components';
import Typography from '../../component/Typography/Typography';
import Margin from '../../component/Margin/Margin';
import errorImg from '../../assets/svgs/errorImg.png';

const Container = styled.div`
  width: 100%;
  height: 593px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.skyBlue};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0px 14px;

  overflow: auto;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const ScrollContact = styled.div`
  width: fit-content;
  height: 535px;

  overflow: auto;
  -ms-overflow-style: none;

  ::-webkit-scrollbar {
    display: none;
  }
`;

const Contact = styled.div`
  padding: 0 27px;
  display: flex;
  height: 50px;
  width: fit-content;
  background-color: ${(props) => (props.id % 2 === 0 ? props.theme.colors.backgroundBlue : props.theme.colors.white)};
  border-radius: 10px;
  align-items: center;
  gap: 27px;
`;

const SelectBar = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding-top: 24px;
  padding-bottom: 14px;
`;

const ProfileImage = styled.img`
  /* min-height: 29px;
  min-width: 29px;
  max-height: 29px;
  max-width: 29px; */
  min-height: 29px;
  min-width: 29px;
  max-width: 29px;
  max-height: 29px;
  border-radius: 29px;
  background-color: pink;
  object-fit: cover;
  border: 1px solid ${(props) => props.theme.colors.lightGray};
`;

const InternalFragment = styled(Typography)`
  min-width: ${({ width }) => width}px;
  ${(props) => (props.bold ? props.theme.font.contentTitle : props.theme.font.contentText)}
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Select = styled(Typography).attrs({ contentText: 'contentText', color: 'gray' })`
  margin-left: ${({ margin }) => margin}px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 7px;
  min-width: 60px;

  ${({ onClick }) => onClick && 'cursor: pointer'};
`;

const jobs = ['ALL', 'BE', 'FE', 'STF'];

const ContactContainer = ({ data, isStaff }) => {
  // true === 내림차순, false === 오름차순
  const [nameSort, setNameSort] = useState(true);
  const [jobSelect, setJobSelect] = useState(0);
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    setDataList(
      data
        .map((d) => {
          const part = d.authority === 'ROLE_ADMIN' ? 'STAFF' : d.part;
          const image = d.image?.img_link;

          return {
            id: d.id,
            name: d.name,
            part,
            comment: d.comment,
            phone_num: d.phone_num,
            major: d.major,
            student_id: d.student_id,
            image,
          };
        })
        .sort((a, b) => a.name.localeCompare(b.name)),
    );
  }, [data]);

  const nameSortHandler = () => {
    const sorted = nameSort ? dataList.sort((a, b) => b.name.localeCompare(a.name)) : dataList.sort((a, b) => a.name.localeCompare(b.name));

    setDataList(sorted);
    setNameSort(!nameSort);
  };

  const jobSelectHandler = () => {
    const jobNum = (jobSelect + 1) % 4; // 정렬해야할 것
    setJobSelect(jobNum);

    if (jobNum === 0) {
      setDataList(data);
      return;
    }
    setDataList(
      data.filter(({ part, authority }) => {
        // 운영진
        if (part === 'STAFF' && authority === 'ROLE_ADMIN') return true;
        return part === jobs[jobNum];
      }),
    );
  };

  const onErrorImg = (e) => {
    e.target.src = errorImg;
  };

  return (
    <>
      {isStaff === 'ROLE_ADMIN' ? (
        <Container>
          <SelectBar>
            <Select margin='83' onClick={nameSortHandler}>
              이름
              {nameSort ? <AiFillCaretDown color={(props) => props.theme.colors.gray} /> : <AiFillCaretUp color='#bfbfbf' />}
            </Select>
            <Select margin='54'>
              {jobs[jobSelect]}
              <AiFillCaretDown color={(props) => props.theme.colors.gray} />
            </Select>
            <Select margin='56'>소개</Select>
            <Select margin='455'>연락처</Select>
            <Select margin='82'>학과</Select>
            <Select margin='133'>학번</Select>
          </SelectBar>
          <ScrollContact>
            {dataList.map((d, i) => (
              <Contact id={i} key={d.id}>
                <ProfileImage src={d.image} onError={onErrorImg} />
                <InternalFragment width='88' bold>
                  {d.name}
                </InternalFragment>
                <InternalFragment width='88'>{d.part}</InternalFragment>
                <InternalFragment width='488'>{d.comment}</InternalFragment>
                <InternalFragment width='115'>{d.phone_num}</InternalFragment>
                <InternalFragment width='166'>{d.major}</InternalFragment>
                <InternalFragment width='100'>{d.student_id}</InternalFragment>
              </Contact>
            ))}
          </ScrollContact>
          <Margin height='14' />
        </Container>
      ) : (
        <Container>
          <SelectBar>
            <Select margin='84' onClick={nameSortHandler}>
              이름
              <AiFillCaretDown color={(props) => props.theme.colors.gray} />
            </Select>
            <Select margin='62' onClick={jobSelectHandler}>
              {jobs[jobSelect]}
              <AiFillCaretDown color={(props) => props.theme.colors.gray} />
            </Select>
            <Select margin='177'>소개</Select>
          </SelectBar>
          <ScrollContact>
            {dataList.map((d, i) => (
              <Contact id={i} key={d.id}>
                <ProfileImage src={d.image} onError={onErrorImg} />
                <InternalFragment width='96' bold>
                  {d.name}
                </InternalFragment>
                <InternalFragment width='210'>{d.part}</InternalFragment>
                <InternalFragment>{d.comment}</InternalFragment>
              </Contact>
            ))}
          </ScrollContact>
          <Margin height='14' />
        </Container>
      )}
    </>
  );
};

export default ContactContainer;
