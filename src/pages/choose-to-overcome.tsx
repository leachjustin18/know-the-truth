import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import Form from '../components/Form';
import './page.scss';

class ChooseToOverCome extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <Helmet
          title="Choose To Overcome"
          meta={[
            {
              name: 'description',
              content: 'Choose To Overcome',
            },
          ]}
        />
        <h1>Choose To Overcome</h1>

        <div className="page__video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/8np6315tffA?rel=0&autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          />
        </div>

        <Form />
      </Layout>
    );
  }
}

export default ChooseToOverCome;
