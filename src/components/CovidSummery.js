import React from "react";
import NumberFormat from "react-number-format";
import Card from "./Card";

function CovidSummery(props) {
  const { totalConfirmed, totalRecovered, totalDeaths, country } = props;

  return (
    <div>
      <div>
        <h1>
          COVID-19 <span className="span__color">REPORT</span>
        </h1>
        <h3 style={{ textTransform: "capitalize" }}>
          {country === "" ? "World wide report" : country}
        </h3>

        <div className="card__div">
          <Card>
            <span>Total Confirm cases</span>
            <br />
            <span>
              <NumberFormat
                value={totalConfirmed}
                displayType={"text"}
                thousandSeparator={true}
              />
            </span>
          </Card>
          <Card>
            <span>Total Recovered</span>
            <br />
            <span><NumberFormat
                value={totalRecovered}
                displayType={"text"}
                thousandSeparator={true}
              /></span>
          </Card>
          <Card>
            <span>
              Total <span className="span__color">Deaths</span>
            </span>
            <br />
            <span><NumberFormat
                value={totalDeaths}
                displayType={"text"}
                thousandSeparator={true}
              /></span>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default CovidSummery;
