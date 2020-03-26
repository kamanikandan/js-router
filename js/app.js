const routes = document.querySelectorAll(".route");
const content = document.querySelector("#content");

window.onload = event => {
    window["home"].addEventListener("click", event => push(event))
    window["about"].addEventListener("click", event => push(event))
    window["services"].addEventListener("click", event => push(event))
    window["contacts"].addEventListener("click", event => push(event))
}

const push = event => {
    let id = event.target.id;
    console.log(id)
    selectTab(id);
    loadContent(id);
    window.history.pushState({ id }, `${id}`, `/page/${id}`);
}

const selectTab = id => {
    routes.forEach(route => route.classList.remove("selected"));
    document.getElementById(id).classList.add("selected");
}

const loadContent = id => {
    content.innerHTML = `Content loading for ${id}`;
}

window.addEventListener("popstate", event => {
    let stateId = event.state.id;
    selectTab(stateId);
    loadContent(stateId);
});