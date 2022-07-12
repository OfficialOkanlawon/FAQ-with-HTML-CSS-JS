const questions = document.querySelectorAll(".question-answer");

questions.forEach(function(question){
    const btn = question.querySelector(".control");
    btn.addEventListener("click", function(){
        questions.forEach(function(item){
            if(item !== question){
                item.classList.remove("show-text")
            }
        })
        question.classList.toggle("show-text")
    })

})

const input = document.getElementById("filter-input")

input.addEventListener("keyup", filter)

function filter(){
    let filterValue = document.getElementById("filter-input").value.toLowerCase();

    let question = document.querySelector(".question-answer")
    let title = question.querySelectorAll("div.title")

    for(let i = 0; i < title.length; i++){
        let a = title[i].getElementsByTagName("h3")[0];

        if(a.innerHTML.toLowerCase(),indexOf(filterValue) > -1){
            title[i].style.display = "";
        } else {
            title[i].style.display = "none";
        }
    }
}