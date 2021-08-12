import React from 'react';
import Card from './Card';

function CovidSummery(props) {

    const {
        totalConfirmed,
        totalRecovered,
        totalDeaths,
        country
    } = props;

    return (
        <div>
        <div>
          <h1>COVID-19 <span className='span__color'>REPORT</span></h1>
          <h3>{country==="" ? 'World wide report' : country}</h3>

          <div className="card__div">
          <Card>
            <span>Total Confirm cases</span><br/>
            <span>{totalConfirmed}</span>
          </Card>
          <Card>
            <span>Total Recovered</span><br/>
            <span>{totalRecovered}</span>
          </Card>
          <Card>
            <span>Total <span className='span__color'>Deaths</span></span><br/>
            <span>{totalDeaths}</span>
          </Card>
          </div>
          
        </div>
      </div>
       
    )
}

export default CovidSummery;
