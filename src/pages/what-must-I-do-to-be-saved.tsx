import React from 'react';
import Helmet from 'react-helmet';
import Layout from '../layout';
import './page.scss';

class WhatMustIDoToBeSaved extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <Helmet
          title="What Must I Do To Be Saved?"
          meta={[
            {
              name: 'description',
              content: 'What Must I Do To Be Saved?',
            },
          ]}
        />
        <h1 className="page__title">What Must I Do To Be Saved?</h1>

        <div className="page__video">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/vbrufRwXVUA?rel=0&autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen={true}
          />
        </div>
      </Layout>
    );
  }
}

export default WhatMustIDoToBeSaved;
