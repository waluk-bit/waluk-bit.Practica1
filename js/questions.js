(function () {

    const titleQuestions = [...document.querySelectorAll('.questions__title')];

    titleQuestions.forEach(questions => {
        /* en este caso questions puede ser una variable cualquiera*/
        questions.addEventListener('click', () => {
            let height = 0;
            let answer = questions.nextElementSibling; /* Obtener el hermano o el que le sigue*/
            let addPadding = questions.parentElement.parentElement;

            addPadding.classList.toggle('questions__padding--add');

            questions.children[0].classList.toggle('questions__arrow--rotate');

            if (answer.clientHeight === 0) {
                height = answer.scrollHeight;
            }

            answer.style.height = `${height}px`;

        });
    });

})();

/*  if(variable1.clientHeight === 0){
                variable2 = variable1.scrollHeight;
            }

             variable1.style.height = `${variable2}px`; */