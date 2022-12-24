import data from './datainfo.js';

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.header-ul');

const myProjects = data.projects;

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach((n) => n.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
}));

const body = document.querySelector('body');
const section = document.createElement('section');
const cardGrid = document.querySelector('.works .works-list');
const cardGridArticle = document.createElement('article');
function implementProjects() {
  myProjects.forEach((project) => {
    const projectArticle = `
    <div class="first-work">
    <div class="image area-B">
      <img
        src="${project.projectImage}"
        alt="multi-Post project picture"
      />
    </div>
    <div class="info area-A">
      <h2 class="info-tittle">${project.projectName}</h2>
      <ul class="ul-info">
        <li class="canopy">${project.companyName}</li>
        <li>
          <img src="images/Counter.svg" alt="counter icon" />
        </li>
        <li class="back-end">${project.projectPosition}</li>
        <li>
          <img src="images/Counter.svg" alt="counter icon" />
        </li>
        <li class="year">2015</li>
      </ul>
      <p class="paragraph">
        ${project.projectDescription}
      </p>
      <ul class="ul-languages" aria-label=" Programming languages">
        <li>${project.projectTechHtml}</li>
        <li>${project.projecttechCss}</li>
        <li>${project.projectTechJs}</li>
      </ul>
      <div>
        <a href="#" class="see-project" data-key="${project.key}">See Project</a>
      </div>
    </div>
  </div>
    `;
    // seeProject.dataset.key=`${project.key}`
    cardGridArticle.innerHTML += projectArticle;
    cardGrid.append(cardGridArticle);
  });
}

implementProjects();

body.appendChild(section);

const openModal = [...document.querySelectorAll('.see-project')];
const projectNameInPopUp = document.querySelector('.projectnameinpopop');
const overlay = document.querySelector('.overlay');
const closeModal = document.querySelector('.close-btn');
const modal = document.querySelector('.modal');
const popUpGridArticle = document.createElement('article');

const showPopup = (btn) => {
  modal.classList.toggle('active');
  overlay.classList.toggle('active');
  let projectPortfolio = myProjects.filter((project) => project.key === Number(btn.dataset.key));
  [projectPortfolio] = projectPortfolio;
  projectNameInPopUp.innerHTML = projectPortfolio.projectName;
  const popUpArticle = `
  
  
  <div>
    <ul class="ul-info-1">
      <li class="canopy-1">${projectPortfolio.companyName}</li>
      <li>
        <img src="images/Counter.svg" alt="counter icon" />
      </li>
      <li class="back-end-1">${projectPortfolio.projectPosition}</li>
      <li>
        <img src="images/Counter.svg" alt="counter icon" />
      </li>
      <li class="year-1">${projectPortfolio.projectDate}</li>
    </ul>
  </div>
  <div class="img-1">
    <img
      src="${projectPortfolio.projectImage}"
      alt="multi-Post project picture"
    />
  </div>
  <div class="grid-it">
    <div class="paragraph-div-1">
      <p class="paragraph-1">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text
        ever since the 1500s, when an unknown printer took a galley of
        type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essent
      </p>
    </div>
    <div class="languages-and-btn-div-1">
      <div class="languages-div-1">
        <div>
          <ul
            class="ul-languages-1 number-1"
            aria-label=" Programming languages"
          >
            <li>html</li>
            <li>css</li>
            <li>javaScript</li>
          </ul>
        </div>
        <div>
          <ul
            class="ul-languages-1 number-2"
            aria-label=" Programming languages"
          >
            <li>github</li>
            <li>ruby</li>
            <li>bootstraps</li>
          </ul>
        </div>
      </div>
      <div class="buttons-div">
        <div class="see-live-div">
          <button>See live</button>
        </div>
        <div class="source-div">
          <button>See Source</button>
        </div>
      </div>
    </div>
  </div>

`;
  popUpGridArticle.innerHTML = popUpArticle;

  modal.appendChild(popUpGridArticle);
};

openModal.forEach((n) => n.addEventListener('click', () => showPopup(n)));

closeModal.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  modal.classList.remove('active');
  overlay.classList.remove('active');
});

// Add form validation

const submitForm = document.querySelector('.contact-button');
const emailInput = document.querySelector('.email-input');
const errorMesage = document.querySelector('.err-message');
submitForm.addEventListener('click', (e) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    e.preventDefault();
    emailInput.parentElement.classList.add('invalid-input');
    submitForm.parentElement.classList.add('invalid-input');
    submitForm.classList.add('submit-contact-disable');
  }
});
emailInput.addEventListener('input', (e) => {
  if (e.target.value !== emailInput.value.toLowerCase()) {
    e.preventDefault();
    emailInput.classList.add('invalid-input');
    submitForm.classList.add('submit-contact-disable');
    emailInput.style.border = '2px solid red';
    errorMesage.style.display = 'block';
    errorMesage.style.color = 'red';
    submitForm.style.color = '#c1c7d0';
  } else {
    errorMesage.style.display = 'none';
    emailInput.style.border = 'none';
    submitForm.classList.remove('submit-contact-disable');
    emailInput.parentElement.classList.remove('invalid-input');
    submitForm.parentElement.classList.remove('invalid-input');
  }
});
