let data = [];

function getStarted(id) {
    try {
        id.classList.add("d-none");
        let questionBoard = id.parentElement.nextElementSibling;
        questionBoard.classList.remove("d-none");
        getData(questionBoard);
    } catch (error) {
        alert(error);
    }
}
async function getData(questionBoard) {
    try {
        promise = await fetch("./questions.json");
        data = await promise.json();

        data.forEach((el, key1) => {
            questionBoard.innerHTML += `<div class="${key1 != 0 ? "d-none" : ""}">
            <h4>${key1+1}. ${el.question}</h4>
            <ul class="text-light" style="list-style: none;" id="${key1}"></ul>
            <div class="d-flex justify-content-around"><button class="btn btn-outline-light ${key1 == 0 ? "d-none" : ""}" onclick="previous(this)">previous</button><button class="btn btn-outline-light px-4 ${key1 == data.length - 1 ? "d-none" : ""}" onclick="next(this)">next</button></div>
            </div>`
            el.options.forEach((el, key2) => {
                document.getElementById(key1).innerHTML += `<li class="border px-3 py-2 mx-5 my-3 rounded">${key2+1}. ${el}</li>`;
            });

        });
    } catch (error) {
        alert(error);
    }
}
function next(id) {
    try {
        id.parentElement.parentElement.classList.add("d-none");
        id.parentElement.parentElement.nextElementSibling.classList.remove("d-none");
    } catch (error) {
        alert(error);
    }

}
function previous(id) {
    try {
        id.parentElement.parentElement.classList.add("d-none");
        id.parentElement.parentElement.previousElementSibling.classList.remove("d-none");
    } catch (error) {
        alert(error);
    }
}

