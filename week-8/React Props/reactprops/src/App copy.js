import './App.css'
import Company from "./components/Company"
import SubCompany from "./components/SubCompany"

function App() {
  let companies = [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }]


    function upperCase(str) {
      return str.toUpperCase()
    }

    function generateCompanyTags(companies) {
      return (
        <div>
          {companies.map(c => 
            <Company name={upperCase(c.name)} key={c.name} />
          )}
        </div>
      )
    }

  return (
    <div>{generateCompanyTags(companies)}</div>
  )
}

export default App;
