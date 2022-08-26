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

//Api().getCourseList();

//------------------------------------------- View------------------------------------------------ //


const View = (() => {
    const domString = {
        courseList : 'courseList_container'
    }
    const render = (element, template) => {
        element.innerHTML = template;
    }
    
    const createTmp = array =>{
        let template = '';
        array.forEach(course => {
            template += `
            <li>
                <span>${course.courseName}</span>
                <span>${course.required}</span>
                <span>${course.credit}</span>
              </li>

            `;
            
        });
        return template;
    }
  return {
    render,
    domString,
    createTmp
  };
})();

//------------------------------------------- Model------------------------------------------------ //

const Model = ((api) => {
  const getCourseList = api.getCourseList;

  return {
    getCourseList,
  };
})(Api);

//------------------------------------------- Controller------------------------------------------------ //

const Controller = ((model,view) => {
  const init = () => {

    const courseList = document.querySelector(view.domString.courseList);
    model.getCourseList().then(courselist => {
        const template = view.createTmp(courselist);
        view.render(courseList, template);
    });
  };

  return {
    init,
  };
})(Model, View);

Controller.init();
