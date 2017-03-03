import React from 'react';
import Layout from '../../components/Layout';
import GMap from '../../components/GMap';

import s from './styles.css';

class DetailsPage extends React.Component {
  render() {
    return (
      <Layout className={s.content}>
        <div className="mdl-grid center-items">
            <div className="mdl-layout-spacer"/>
            <div className={`mdl-card ${s.wedding}`}>
              
              <div className="mdl-card__title">
                <h3 className="mdl-card__title-text">The Wedding</h3>
              </div>
              
              <div className="mdl-card__supporting-text">
                <p className={s.content}>
                Sunday, October 8<sup>th</sup>, 2017<br/>
                <br/>
                Guests may arrive at 6 p.m.<br/>
                Ceremony: 6:30 p.m. <br/>
                Followed by Cocktails <br/>
                <br/>
                Dinner and Dancing <br/>
                Cash bar <br/>
                <br/>
                <b>Attire:</b> Dapper<br/>
                <br/>
                  Please note that parking is limited.<br/>
                Transportation will be available from downtown at the Sheraton Vancouver Wall Centre.
                </p>
              </div>

            </div>
            <div className="mdl-layout-spacer"/>

          </div>
        <div className="mdl-grid center-items">

            <div className= "mdl-layout-spacer"/>

            <div className={`mdl-card ${s.gmap}`}>
              <div className="mdl-card__title">
                <h3 className="mdl-card__title-text">The Venue</h3>
              </div>
              <div className="mdl-card__supporting-text">
                <p>
                  Brock House Restaurant<br/>
                  3875 Point Grey Rd<br/>
                  Vancouver, British Columbia<br/>
                </p>
              </div>

              <GMap 

                ApiKey="AIzaSyAuA144bHPb0NX-QM5PLPLcso_gQ8o17aU"
                LocationQuery="Brock+House,Vancouver+BC"/>
            </div>
            
            <div className= "mdl-layout-spacer"/>

          </div>
      </Layout>
    );
  }

}

export default DetailsPage;
