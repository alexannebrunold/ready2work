/*eslint-disable */
import { React, useState, useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import '../style/global.scss';
import LikeLogo from '../assets/img/like.svg';
import ArrowLeft from '../assets/img/arrow-left.svg';

const ClassroomInfo = () => {
  const unavailableClassroom = 60;
  const [openPanel, setOpenPanel] = useState(false);

  function panelIsOpen() {
    if (openPanel == true) {
      var classroomInfo = document.querySelector('.classroomInfo');
      classroomInfo.style.width = '25vw';
      setOpenPanel(false);
    } else {
      var classroomInfo = document.querySelector('.classroomInfo');
      classroomInfo.style.width = '3vw';
      setOpenPanel(true);
    }
  }
  useEffect(() => {
    panelIsOpen();
  }, []);


  return(
    <div className="classroomInfo">
      <img
        onClick={ panelIsOpen }
        className="classroomInfo-panel"
        src={ ArrowLeft }
        alt="icone fleche gauche"
      />
      <div className="classroomInfo-favorite">
        <p className="favorite-title">Mes salles favorites</p>
        <img className="favorite-like" src={ LikeLogo } alt="logo coeur" />
      </div>
      <p className="favorite-classroom">A104 A107 B102</p>
      <p className="classroom-unavailable">Nombre de salle occupées actuellement</p>
      <div className="unavailable-classroom" style={{ width: 130, height: 130 }}>
        <CircularProgressbar
          value={ unavailableClassroom }
          text={`${ unavailableClassroom }%`}
          minValue={0}
          maxValue={17}
          styles={buildStyles(
            {
              rotation: 0.25,
              strokeLinecap: 'butt',
              textSize: '20px',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(252, 198, 146, ${unavailableClassroom / 100})`,
              textColor: '#706C61',
              trailColor: '#d6d6d6',
              backgroundColor: '#FA8C28',
            }
          )}
        />
      </div>
      <p className="classroom-unavailable">Nombre de salles réservées par les professeurs:</p>
      <div className="unavailable-classroom" style={{ width: 130, height: 130 }}>
        <CircularProgressbar
          value={ unavailableClassroom }
          text={`${ unavailableClassroom }%`}
          minValue={0}
          maxValue={17}
          styles={buildStyles(
            {
              rotation: 0.25,
              strokeLinecap: 'butt',
              textSize: '20px',
              pathTransitionDuration: 0.5,
              pathColor: `rgba(252, 198, 146, ${unavailableClassroom / 100})`,
              textColor: '#706C61',
              trailColor: '#d6d6d6',
              backgroundColor: '#FA8C28',
            }
          )}
        />
      </div>

    </div>
  )
}

export default ClassroomInfo
