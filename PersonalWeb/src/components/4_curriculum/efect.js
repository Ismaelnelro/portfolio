function child_hover(child) {
    let parent = child.parentElement;
    if (parent.classList.contains("izq-off")) {
        parent.classList.add("active")
    }
}

function child_exit(child) {
    let parent = child.parentElement;
    parent.classList.remove("izq-off")
}