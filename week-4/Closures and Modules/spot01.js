function Family () {
    let members = []
    function birth (name) {
        members.push(name)
        console.log(members)
    }
    return birth
}

giveBirth = Family()
giveBirth("son")
giveBirth("daughter")
giveBirth("daughter")

