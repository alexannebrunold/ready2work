/*eslint-disable */
import { React, useEffect, useState } from 'react';

const ClassroomMapFilter = (props) => {
  const [classroomDataPers, setClassroomDataPers] = useState(null);
  const [classroomDataTemperature, setClassroomDataTemperature] = useState(null);
  const [classroomDataBrightness, setClassroomDataBrightness] = useState(null);
  const [classroomDataNoise, setClassroomDataNoise] = useState(null);
  const [activeFilter, setActiveFilter] = useState('nbPeople');
  const [lowerScope, setLowerScope] = useState('0%');
  const [upperScope, setUpperScope] = useState('100%');
  const token = localStorage.getItem('token :');

  function setScope(e) {
    setActiveFilter(e.target.value);
    if (e.target.value == 'temperature') {
      setLowerScope('10ºC');
      setUpperScope('40ºC');
    } else if (e.target.value == 'nbPeople') {
      setLowerScope('0%');
      setUpperScope('100%');
    } else if (e.target.value == 'brightness') {
      setLowerScope('Très sombre');
      setUpperScope('Très lumineux');
    } else if (e.target.value == 'noise') {
      setLowerScope('0 décibel');
      setUpperScope('120 décibel');
    }
  }


  function getClassroomInfoPers(){
    fetch("https://ready2work-api.herokuapp.com/api/room/nbPers", {
      method: 'GET',
      headers: {
        "access-control-allow-origin" : "*",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + props.token
      },
    })
    .then(res => {
        return res.json();
    })
    .then(
      (result) => {
        setClassroomDataPers(result);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  function getClassroomInfoTemperature(){
    fetch("https://ready2work-api.herokuapp.com/api/room/temperature", {
      method: 'GET',
      headers: {
        "access-control-allow-origin" : "*",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + props.token
      },
    })
    .then(res => {
        return res.json();
    })
    .then(
      (result) => {
        setClassroomDataTemperature(result);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  function getClassroomInfoBrightness(){
    fetch("https://ready2work-api.herokuapp.com/api/room/luminosite", {
      method: 'GET',
      headers: {
        "access-control-allow-origin" : "*",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + props.token
      },
    })
    .then(res => {
        return res.json();
    })
    .then(
      (result) => {
        setClassroomDataBrightness(result);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  function getClassroomInfoNoise(){
    fetch("https://ready2work-api.herokuapp.com/api/room/decibel", {
      method: 'GET',
      headers: {
        "access-control-allow-origin" : "*",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + props.token
      },
    })
    .then(res => {
        return res.json();
    })
    .then(
      (result) => {
        setClassroomDataNoise(result);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  function filterPers() {
    if (classroomDataPers != null) {
      classroomDataPers.forEach(dataFilter => {
        if (dataFilter.value <= 10) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#F6CCA4";
        } else if (dataFilter.value >=11 && dataFilter.value <= 20) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#F8AF6C";
        } else if (dataFilter.value >= 21 && dataFilter.value <= 30) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#FA902F";
        } else if (dataFilter.value >=31 && dataFilter.value <= 40) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#FD6C3F";
        } else if (dataFilter.value >= 41) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#FE5B58";
        }
      });
    }
  }
  function filterTemperature() {
    if (classroomDataTemperature != null) {
      classroomDataTemperature.forEach(dataFilter => {
        if (dataFilter.value <= 10) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#F6CCA4";
        } else if (dataFilter.value >=11 && dataFilter.value <= 20) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#F8AF6C";
        } else if (dataFilter.value >= 21 && dataFilter.value <= 30) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#FA902F";
        } else if (dataFilter.value >=31 && dataFilter.value <= 40) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#FD6C3F";
        } else if (dataFilter.value >= 41) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#FE5B58";
        }
      });
    }
  }
  function filterBrightness() {
    if (classroomDataBrightness != null) {
      classroomDataBrightness.forEach(dataFilter => {
        if (dataFilter.value <= 2000) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#F6CCA4";
        } else if (dataFilter.value >=2001 && dataFilter.value <= 4000) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#F8AF6C";
        } else if (dataFilter.value >= 4001 && dataFilter.value <= 6000) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#FA902F";
        } else if (dataFilter.value >=6001 && dataFilter.value <= 8000) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#FD6C3F";
        } else if (dataFilter.value >= 8001) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#FE5B58";
        }
      });
    }
  }
  function filterNoise() {
    if (classroomDataNoise != null) {
      classroomDataNoise.forEach(dataFilter => {
        if (dataFilter.value <= 24) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#F6CCA4";
        } else if (dataFilter.value >=25 && dataFilter.value <= 49) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#F8AF6C";
        } else if (dataFilter.value >= 50 && dataFilter.value <= 74) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#FA902F";
        } else if (dataFilter.value >=75 && dataFilter.value <= 99) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#FD6C3F";
        } else if (dataFilter.value >= 100) {
          document.querySelector('.classroom-' + dataFilter.room).style.fill = "#FE5B58";
        }
      });
    }
  }

  function wrapperFunction(e) {
    setScope(e);
    if (e.target.value == 'nbPeople') {
      filterPers();
    } else if (e.target.value == 'temperature') {
      filterTemperature();
    } else if (e.target.value == 'brightness') {
      filterBrightness();
    } else if (e.target.value == 'noise') {
      filterNoise();
    }
  }

  useEffect(() => {
    getClassroomInfoPers();
    getClassroomInfoBrightness();
    getClassroomInfoNoise();
    getClassroomInfoTemperature();
  }, []);

  return(
    <div>
      <div className="studentDashboard-scope">
        <p className="scope-min">{ lowerScope }</p>
        <p className="scope-max">{ upperScope }</p>
      </div>
      <div className="studentDashboard-filterMap">
        <p className="filterMap-title">Trier par :</p>
        <div>
          <input type="radio" id="luminosite" name="filter" value="brightness" onChange={e => wrapperFunction(e)} />
          <label htmlFor="luminosite">Luminosité</label>
        </div>
        <div>
          <input type="radio" id="sonore" name="filter" value="noise" onChange={e => wrapperFunction(e)} />
          <label htmlFor="sonore">Niveau sonore</label>
        </div>
        <div>
          <input type="radio" defaultChecked id="people" name="filter" value="nbPeople" onChange={e => wrapperFunction(e)} />
          <label htmlFor="people">Taux de fréquentation</label>
        </div>
        <div>
          <input type="radio" id="temperature" name="filter" value="temperature" onChange={e => wrapperFunction(e)} />
          <label htmlFor="temperature">Température</label>
        </div>
      </div>
    </div>
  )
}
export default ClassroomMapFilter;