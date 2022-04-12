import {DATA_OF_TEACHERS,setTimeWords} from './data.js';
import { getData } from './utils.js';

const renderPostOfTeachers = (renderPosts, levelEducation) => {
  // levelEducation => 1= HOO 2 = OOO 3 = COO  4 = HOO&OOO 5 = OOO&COO
  const postsListElement = document.querySelector('.parent');
  postsListElement.innerHTML = '';
  // const postsTemplate = document.querySelector('#teacher');
  const postFragment = document.createDocumentFragment();

  renderPosts.forEach((post) => {
    if (
      post.classNOO === levelEducation ||
      (post.classSOO === levelEducation && post.classSOO === levelEducation) ||
      post.classOOO === levelEducation
    ) {
      const cardTeacher = document.createElement('li');
      cardTeacher.classList.add('fz18');
      const cardTeacherFIO = document.createElement('span');
      cardTeacherFIO.innerHTML = `${post.fio} <br>`;
      cardTeacher.appendChild(cardTeacherFIO);

      const cardTeacherDOL = document.createElement('span');
      cardTeacherDOL.innerHTML = `<strong>Занимаемая должность:</strong> ${post.dolzhnost} <br>`;
      cardTeacher.appendChild(cardTeacherDOL);

      const cardTeacherPost = document.createElement('span');
      cardTeacherPost.innerHTML = `<strong>Уровень образование:</strong> ${post.levelOfStudy} <br>`;
      cardTeacher.appendChild(cardTeacherPost);

      if (post.special !== '' && post.special !== undefined) {
        const cardTeacherspecial = document.createElement('span');
        cardTeacherspecial.innerHTML = `<strong>Направленеие подготовки:</strong> ${post.special}<br>`;
        cardTeacher.appendChild(cardTeacherspecial);
      }

      if (post.qualification !== '' && post.qualification !== undefined) {
        const cardTeacherQualification = document.createElement('span');
        cardTeacherQualification.innerHTML = `<strong>Квалификация:</strong> ${post.qualification}<br>`;
        cardTeacher.appendChild(cardTeacherQualification);
      }

      if (post.upQualification !== '' && post.upQualification !== undefined) {
        const cardTeacherupQualification = document.createElement('span');
        cardTeacherupQualification.innerHTML = `<strong>Повышение квалификации:</strong> ${post.upQualification}<br>`;
        cardTeacher.appendChild(cardTeacherupQualification);
      }
      if (post.academicDegree !== '' && post.qualification !== undefined) {
        const cardTeacherAcademicDegree = document.createElement('span');
        cardTeacherAcademicDegree.innerHTML = `<strong>Ученая степень:</strong> ${post.academicDegree}<br>`;
        cardTeacher.appendChild(cardTeacherAcademicDegree);
      }

      if (post.academicTitle !== '' && post.qualificaacademicTitletion !== undefined) {
        const cardTeacherAcademicTitle = document.createElement('span');
        cardTeacherAcademicTitle.innerHTML = `<strong>Ученое звание:</strong> ${post.academicTitle}<br>`;
        cardTeacher.appendChild(cardTeacherAcademicTitle);
      }

      const cardTeacherworkExperienceInYear = document.createElement('span');
      cardTeacherworkExperienceInYear.innerHTML = `<strong>Общий стаж работы:</strong> ${setTimeWords(new Date().getFullYear() - post.workExperienceInYearStart)}<br>`;
      cardTeacher.appendChild(cardTeacherworkExperienceInYear);

      const cardTeacherworkAsTeacherInYear = document.createElement('span');
      cardTeacherworkAsTeacherInYear.innerHTML = `<strong>Стаж работы по специальности:</strong> ${setTimeWords(new Date().getFullYear() - post.workAsTeacherInYearStart)}<br>`;
      cardTeacher.appendChild(cardTeacherworkAsTeacherInYear);

      const cardTeachersubjectsTaught = document.createElement('span');
      cardTeachersubjectsTaught.innerHTML = `<strong>Преподоваемые учебные предметы:</strong> ${post.subjectsTaught}<br>`;
      cardTeacher.appendChild(cardTeachersubjectsTaught);

      postFragment.appendChild(cardTeacher);
    }
  });
  postsListElement.appendChild(postFragment);
  // const LEVEL_TEACHER = document.querySelector('.parent').getAttribute('data-teacher');


};

// if (document.querySelector('.js-level-education')) {
//   renderPostOfTeachers(DATA_OF_TEACHERS, parseInt(1, 10));
//   const chooseLevelEducation = document.querySelector('.js-level-education');
//   chooseLevelEducation.addEventListener('change', () => {
//     renderPostOfTeachers(DATA_OF_TEACHERS,parseInt(chooseLevelEducation.value, 10));
//   });
// }

getData((listArray) => {
  console.log(listArray);
  for ( const listArrayItem of listArray) {
    listArrayItem.workExperienceInYear = setTimeWords(new Date().getFullYear() - listArrayItem.workExperienceInYearStart);

    listArrayItem.workAsTeacherInYear = setTimeWords(new Date().getFullYear() - listArrayItem.workAsTeacherInYearStart);
  }
  renderPostOfTeachers(listArray, parseInt(1, 10));

  const chooseLevelEducation = document.querySelector('.js-level-education');
  chooseLevelEducation.addEventListener('change', () => {
  renderPostOfTeachers(listArray,parseInt(chooseLevelEducation.value, 10));
  });
})
