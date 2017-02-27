import React from 'react';
import Layout from '../../components/Layout';
import RSVPForm from '../../components/RSVPForm';

import s from './styles.css';

class RSVPPage extends React.Component {

  render() {
    return (
      <Layout className={s.content}>
        <div className="mdl-grid center-items">
          <div className= "mdl-layout-spacer"/>
          <RSVPForm/>
          <div className= "mdl-layout-spacer"/>
        </div>
      </Layout>
    );
  }

}

export default RSVPPage;
