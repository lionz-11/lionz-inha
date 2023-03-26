const makeDateFormat = (d, type) => {
  const date = new Date(d);

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  let dateStringFormatted = '';
  if (type === 'year') {
    dateStringFormatted = `${year}년 ${month}월 ${day}일`;
  } else {
    dateStringFormatted = `${month}월 ${day}일 ${hours}시 ${minutes}분`;
  }

  return dateStringFormatted;
};

export default makeDateFormat;
