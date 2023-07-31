import SubCompany from "./SubCompany"

function Company({name}) {
    return (
        <SubCompany name={name} key={name} />
    )
}

export default Company