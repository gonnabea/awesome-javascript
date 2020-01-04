export const home = (req,res) => {
    res.render("home", {title: "HOME"})
}

export const forum = (req, res) => {
    res.render("forum", {title: "BULLETIN BOARD"})
}

export const calculator = (req, res) => {
    res.render("calculator", {title: "CALCULATOR"})
}