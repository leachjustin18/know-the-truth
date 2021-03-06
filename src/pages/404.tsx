import React from 'react';
import Layout from '../layout';

class NotFoundPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist.</p>
      </Layout>
    );
  }
}

export default NotFoundPage;
