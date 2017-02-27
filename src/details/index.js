import React from 'react';
import Layout from '../../components/Layout';
import s from './styles.css';

class DetailsPage extends React.Component {

  render() {
    return (
      <Layout className={s.content}>
        <div>
          Stuff!
          </div>
      </Layout>
    );
  }

}

export default DetailsPage;
