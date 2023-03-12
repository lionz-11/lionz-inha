import { useState } from 'react';

import { AiFillCaretDown, AiFillCaretUp } from 'react-icons/ai';
import styled from 'styled-components';
import Typography from '../../component/Typography/Typography';
import Margin from '../../component/Margin/Margin';

const Container = styled.div`
  width: 100%;
  height: 593px;
  border-radius: 10px;
  border: 1px solid ${({ theme }) => theme.colors.skyBlue};
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0px 14px;
  overflow: hidden;
`;

const ScrollContact = styled.div`
  width: 100%;
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
  width: 100%;
  background-color: ${(props) => (props.id % 2 === 0 ? props.theme.colors.backgroundBlue : props.theme.colors.white)};
  border-radius: 10px;
  align-items: center;
  gap: 27px;
  overflow: hidden;
`;

const SelectBar = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  display: flex;
  padding-top: 24px;
  padding-bottom: 14px;
`;

const ProfileImage = styled.div`
  min-height: 29px;
  min-width: 29px;
  border-radius: 29px;
  background-color: pink;
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
  const [dataList, setDataList] = useState([...data]);

  const nameSortHandler = () => {
    const sorted = nameSort ? dataList.sort((a, b) => b.name.localeCompare(a.name)) : dataList.sort((a, b) => a.name.localeCompare(b.name));

    setDataList(sorted);
    setNameSort(!nameSort);
  };

  const jobSelectHandler = () => {
    const jobNum = (jobSelect + 1) % 4; // 정렬해야할 것
    setJobSelect(jobNum);
    console.log(jobs[jobNum]);
    if (jobNum === 0) {
      setDataList(data);
      return;
    }
    setDataList(data.filter(({ job }) => job === jobs[jobNum]));
  };

  return (
    <>
      {isStaff ? (
        <Container>
          <SelectBar>
            <Select margin='83' onClick={nameSortHandler}>
              이름
              {nameSort ? <AiFillCaretDown color='#bfbfbf' /> : <AiFillCaretUp color='#bfbfbf' />}
            </Select>
            <Select margin='54' onClick={jobSelectHandler}>
              {jobs[jobSelect]}
              <AiFillCaretDown color='#bfbfbf' />
            </Select>
            <Select margin='56'>소개</Select>
            <Select margin='455'>연락처</Select>
            <Select margin='82'>학과</Select>
            <Select margin='133'>학번</Select>
          </SelectBar>
          <ScrollContact>
            {dataList.map((d, i) => (
              <Contact id={i}>
                <ProfileImage />
                <InternalFragment width='88' bold>
                  {d.name}
                </InternalFragment>
                <InternalFragment width='88'>{d.job}</InternalFragment>
                <InternalFragment width='488'>{d.config}</InternalFragment>
                <InternalFragment width='115'>{d.phone}</InternalFragment>
                <InternalFragment width='166'>{d.subject}</InternalFragment>
                <InternalFragment width='100'>{d.studentId}</InternalFragment>
              </Contact>
            ))}
          </ScrollContact>
          <Margin height='14' />
        </Container>
      ) : (
        <Container>
          <SelectBar>
            <Select margin='83' onClick={nameSortHandler}>
              이름
              <AiFillCaretDown color='#bfbfbf' />
            </Select>
            <Select margin='62' onClick={jobSelectHandler}>
              {jobs[jobSelect]}
              <AiFillCaretDown color='#bfbfbf' />
            </Select>
            <Select margin='177'>소개</Select>
          </SelectBar>
          <ScrollContact>
            {dataList.map((d, i) => (
              <Contact id={i}>
                <ProfileImage />
                <InternalFragment width='88' bold>
                  {d.name}
                </InternalFragment>
                <InternalFragment width='200'>{d.job}</InternalFragment>
                <InternalFragment>{d.config}</InternalFragment>
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
