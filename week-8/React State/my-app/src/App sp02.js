import './App.css';
import {useState} from "react";
import Company from "./Company"

function App() {

  const pageState = useState(1)

  let companiesData =  [
    { name: "Tesla", revenue: 140 },
    { name: "Microsoft", revenue: 300 },
    { name: "Google", revenue: 600 }
  ]

  let [companies, setCompanies] = useState(companiesData)


  return (
    <div>
      {companies.map(company => <Company name={company.name} revenue={company.revenue} />)}
    </div>
  )
}


export default App;
