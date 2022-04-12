const DATA_GET_URL = './teachers.json';

const getData = (onSuccess) => {
  fetch(DATA_GET_URL)
    .then((response) => response.json())
    .then((teacherList) => {
      onSuccess(teacherList);
    });
};

export { getData};
