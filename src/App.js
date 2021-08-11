import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import CovidSummery from "./components/CovidSummery";
import LineGraph from "./components/LineGraph";

function App() {
  const [covidSummary, setCovidSummary] = useState({});
  const [totalConfirmed, setTotalConfirmed] = useState(0);
  const [totalRecovered, setTotalRecovered] = useState(0);
  const [totalDeaths, setTotalDeaths] = useState(0);
  const [loading, setLoading] = useState(false);
  const [days, setDays] = useState(30);
  const [country, setCountry] = useState("BD");

  console.log(
    "\n totalConfirmed :",
    totalConfirmed + "\n recovered :",
    totalRecovered + "\n Deaths :",
    totalDeaths
  );

  // componantDidMount
  useEffect(() => {
    setLoading(true);

    axios
      .get("https://api.covid19api.com/summary")
      .then((res) => {
        setLoading(false);
        console.log(res);

        setTotalConfirmed(res.data.Global.TotalConfirmed);
        setTotalRecovered(res.data.Global.TotalRecovered);
        setTotalDeaths(res.data.Global.TotalDeaths);
        setCovidSummary(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const getCountryReportByDateRang = (countrySlug, from, to) => {
    axios
      .get(
        'https://api.covid19api.com/country/${countrySlug}/status/confirmed?from=${from}T00:00:00Z&to=${to}T00:00:00Z'
      )
      .then((res) => {
        console.log("ByCountry", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const formatDate =(date) => {
    const d = new Date(date);
    //2020-05-04;
    const year = d.getFullYear();
    const month = `0${d.getMonth() +1}`.slice(-2);//12->012->12
    const _date = d.getDate();
    return `${year}-${month}-${_date}`;
  };

  
  const countryHandeler = (e) => {
    console.log(e);
    setCountry(e.target.value);
    const d = new Date();
    const to = formatDate(d);
    const from = formatDate(d.setDate(d.getDate() - 7));
    console.log('DATE :',from,to);

    getCountryReportByDateRang(e.target.value, from, to);
  };
  const dayHandler = (e) => {
    setDays(e.target.value);
  };

  if (loading) {
    return <p>Fstching data from api..</p>;
  }

  return (
    <div className="App">
      <CovidSummery
        totalConfirmed={totalConfirmed}
        totalRecovered={totalRecovered}
        totalDeaths={totalDeaths}
        country={""}
      />

      <div>
        <select value={country} onChange={countryHandeler}>
          {covidSummary.Countries &&
            covidSummary.Countries.map((country) => (
              <option key={country.Slug} value={country.Slug}>
                {country.Country}
              </option>
            ))}
        </select>
        <select value={days} onChange={dayHandler}>
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="60">Last 60 Days</option>
        </select>
      </div>

      <LineGraph />
    </div>
  );
}

export default App;
