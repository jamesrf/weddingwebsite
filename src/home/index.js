import React, { PropTypes } from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

class HomePage extends React.Component {

  render() {

    return (
      <Layout className={s.content}>
        <div className="mdl-grid center-items">
            <div className= "mdl-layout-spacer"/>
            <div className={s.MainTextImage}></div>
            <div className= "mdl-layout-spacer"/>
        </div>
      </Layout>
    );
  }

}

export default HomePage;
