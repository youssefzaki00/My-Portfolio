let open_button = document.querySelector('.landing .open');
let open_click = document.querySelector('.landing .open .main-text');
let open_intro = document.querySelector('.landing .open .intro');
let open_before = document.querySelector('.landing .open .before');
let open_after = document.querySelector('.landing .open .after');
let project_section = document.querySelector('.project-section');
let pre = document.querySelector('.project-section .pre');
let next = document.querySelector('.project-section .next');
let projects = document.querySelectorAll('.project-section .projects .project');
let open_project = document.querySelector('.project-section .open');
let open_project_click = document.querySelector('.project-section .open .main-text');
let open_project_details =
  document.querySelector('.project-section .open .project-details');
let open_project_before = document.querySelector('.project-section .open .before');
let open_project_after = document.querySelector('.project-section .open .after');
let projects_container = document.querySelector('.project-details-container');
let project_details = document.querySelectorAll('.project-details');
open_button.onclick = () => {
  open_click.classList.toggle('close');
  open_intro.classList.toggle('close');
  open_button.style.top = '15%';

  if (open_click.classList.contains('close')) {
    open_button.style.top = '15%';
  } else {
    open_button.style.top = '50%';
    open_after.style.right = '-10px';
    open_after.style.bottom = '10px';
    open_before.style.left = '-10px';
    open_before.style.top = '10px';
  }
}
document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      // Calculate the next section to scroll to based on current scroll position
      const scrollPositions = [0, 640, 640.5 * 2, 644.5 * 3];
      const currentScrollPosition = window.scrollY;
      const nextSectionIndex = scrollPositions.findIndex(
        (position) => position > currentScrollPosition
      );
      const nextSectionPosition = scrollPositions[nextSectionIndex];

      // Scroll to the next section
      window.scrollTo({
        top: nextSectionPosition,
        behavior: "smooth"
      });
    }
  });
let projectIndex = 0;
projects[projectIndex].classList.add('active');
check();
function check() {
    if (projectIndex==0) {
      pre.classList.add('disable')
  } else {
    pre.classList.remove('disable')
  }
  if (projectIndex==projects.length-1) {
    next.classList.add('disable')
  } else {
    next.classList.remove('disable')
  }
}
pre.addEventListener('click', () => {
  projects[projectIndex].classList.remove('active');
  projectIndex -= 1;
  projects[projectIndex].classList.add('active');
  projectDetails()
  check();
});
next.addEventListener('click',() => {
  projects[projectIndex].classList.remove('active');
  projectIndex += 1;
  projects[projectIndex].classList.add('active');
  projectDetails()
  check();
});
open_project.addEventListener('click', () => {
  open_project_click.classList.toggle('close');
  open_project_details.classList.toggle('close');
  projects_container.classList.toggle('active');
projectDetails()
  open_project.style.top = '0%';
  if (open_project_click.classList.contains('close')) {
    open_project.style.top = '0%';
  } else {
    open_project.style.top = '50%';
  }
})
function projectDetails() {
  project_details.forEach(e => {
    e.classList.remove('active');
  });
  project_details[projectIndex].classList.add('active');
};