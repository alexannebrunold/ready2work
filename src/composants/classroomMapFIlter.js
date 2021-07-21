/*eslint-disable */
import { React, useEffect, useState } from 'react';
import ClassroomInfo from './classroomInfo'
import StudentHeader from './studentHeader'

const ClassroomMapFilter = () => {

  const studentToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc3MTBiMDE3ZmQ5YjcxMWUwMDljNmMzNmIwNzNiOGE2N2NiNjgyMTEiLCJ0eXAiOiJKV1QifQ.eyJuYW1lIjoiQ29zbmVhdSBDaGFybGVzIiwiaXNzIjoiaHR0cHM6Ly9zZWN1cmV0b2tlbi5nb29nbGUuY29tL21ldGEtdGVycml0b3J5LTMwOTEwOCIsImF1ZCI6Im1ldGEtdGVycml0b3J5LTMwOTEwOCIsImF1dGhfdGltZSI6MTYyNjgwNjcxNywidXNlcl9pZCI6InZ2dEZ3bWR5RERiYmFtSXpOYWtma3c4akN6MDMiLCJzdWIiOiJ2dnRGd21keUREYmJhbUl6TmFrZmt3OGpDejAzIiwiaWF0IjoxNjI2ODA2NzE3LCJleHAiOjE2MjY4MTAzMTcsImVtYWlsIjoiY2hhY2hvdWNoYWNob3VAYWRyZXNzLmZyIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImNoYWNob3VjaGFjaG91QGFkcmVzcy5mciJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.MEXBWWBusxCmoShF0l6-3zTEAIVDSumliD_pEGDjqOm_RVJI_2tBbr3AtZASIlh3OdsfnrkjKp508qcAun3MlwxY0xhMcSNME_YuNdWRQP4t3opVpwB-YNYyDzTjrTA_EvmEH6j1jzvesJvP9GuvDOkigRbFqwxbUunATO5SkmraRSwOzg4jWPNILEYX5FGC5yTfYI86drtOvpDMNqjmudi6ukkjpll6PPhw4GvgGrd8pSeR3yxWyAmn2jbXmo1K09FBYFlMd-aLbMo7ECC4U7aN9CIXvXALr_xP5wwp20423VkxfteQF9JvuTFkrXlwv5Z-QIyt5usjnku57dKspQ";

  const [classroomData, setClassroomData] = useState({});
  // verrifier qui est actif
  const [activeFilter, setActiveFilter] = useState('nbPeople');
  const isActiveFilter = (e) => {
    setActiveFilter(e.target.value);
		console.log('blabla');
  }
  console.log(activeFilter);

	useEffect(() => {
    isActiveFilter;
    GetClassroomInfo();
  }, []);
  // fairer l'appel api en fonction de l'actif

  function GetClassroomInfo(){
    fetch("https://ready2work-api.herokuapp.com/api/room", {
      method: 'GET',
      headers: {
        "access-control-allow-origin" : "*",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + studentToken
      },
    })
    .then(res => {
        return res.json();
    })
    .then(
      (result) => {
        setClassroomData(result);
      },
      // Remarque : il faut gérer les erreurs ici plutôt que dans
      // un bloc catch() afin que nous n’avalions pas les exceptions
      // dues à de véritables bugs dans les composants.
      (error) => {
        console.log(error);
      }
    )
  }
  GetClassroomInfo();
  console.log(classroomData);

  return(
    <div className="studentDashboard-filterMap">
      <p className="filterMap-title">Trier par :</p>
      <div>
        <input type="radio" id="luminosite" name="filter" value="brightness" onChange={isActiveFilter} />
        <label htmlFor="luminosite">Luminosité</label>
      </div>
      <div>
        <input type="radio" id="sonore" name="filter" value="noise" onChange={isActiveFilter} />
        <label htmlFor="sonore">Niveau sonore</label>
      </div>
      <div>
        <input type="radio" defaultChecked id="people" name="filter" value="nbPeople" onChange={isActiveFilter} />
        <label htmlFor="people">Taux de fréquentation</label>
      </div>
      <div>
        <input type="radio" id="temperature" name="filter" value="temperature" onChange={isActiveFilter} />
        <label htmlFor="temperature">Température</label>
      </div>
    </div>
  )
}
export default ClassroomMapFilter;