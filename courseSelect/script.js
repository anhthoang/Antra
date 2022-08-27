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
        courseListContainer : 'courseList_container'
    };
    const render = (element, template) => {
        element.innerHTML = template;
    };

    const createTmp = array =>{
        let template = '';
        array.forEach(course => {
            template += `
            <li>
                <span>
                    <p>${course.courseName}</p>
                    <p>Course Type: ${course.required ? "Required" : "Selective"}</p>
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
  const {getCourseList}= api;

  return {
    getCourseList,
  };
})(Api);

//------------------------------------------- Controller------------------------------------------------ //

const Controller = ((model,view) => {
  const init = () => {

    const courseList = document.getElementById(view.domString.courseListContainer);
    // console.log(courseList);
    model.getCourseList().then(courses => {
         const template = view.createTmp(courses);
        view.render(courseList, template);
        //console.log(template);
    });
  };

  return {
    init
  };
})(Model, View);

Controller.init();
