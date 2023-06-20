let x = {
    count: 12,
    go: () => {
        setTimeout(function () {
            console.log(this.count)
        }, 1500)
    }
}
x.go()


const run = (name) => {console.log("Run, " + name + ", run!")}
const yell = function(action){
    let env = "Forest"
    action(env)
}
run(yell)