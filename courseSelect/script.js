const Api = (() => {
  const baseUrl = "http://localhost:4232";
  const courseListPath = "courseList";

  const getCourseList = () =>
    fetch([baseUrl, courseListPath].join("/")).then((response) =>
      response.json()
    );

  return {
    getCourseList,
  };
})();

//------------------------------------------- View------------------------------------------------ //

const View = (() => {
  const domString = {
    courseListContainer: "courseList_container",
    tagName: "li",
  };
  const render = (element, template) => {
    element.innerHTML = template;
  };

  const createTmp = (array) => {
    let template = "";
    array.forEach((course) => {
      template += `
     
            <li >
              <span>
                    <p>${course.courseName}</p>
                    <p>Course Type: ${
                      course.required ? "Compulsory" : "Elective"
                    }</p>
                    <p>Course Credit ${course.credit}</p>
              </span>
             </li>
           

            `;
    });
    return template;
  };
  return {
    render,
    domString,
    createTmp,
  };
})();

//------------------------------------------- Model------------------------------------------------ //

const Model = ((api) => {
  const { getCourseList } = api;

  return {
    getCourseList,
  };
})(Api);

//------------------------------------------- Controller------------------------------------------------ //

const Controller = ((model, view) => {
  const init = () => {
    const courseListContainer = document.getElementById(
      view.domString.courseListContainer
    );

    model.getCourseList().then((courses) => {
      const template = view.createTmp(courses);
      view.render(courseListContainer, template);
      // console.log(courseListContainer);
      const course_list = 
        document.querySelectorAll(view.domString.tagName)
      ;
      console.log(course_list);
      course_list.forEach((course) => {
        course.addEventListener(
          "click",
          // (event) => (console.log(event.currentTarget))
           (event) => (event.currentTarget.style.background = "deepskyblue")
        );
      });
    });
  };

  return {
    init,
  };
})(Model, View);

Controller.init();
