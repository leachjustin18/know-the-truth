import React from 'react';
import { Link } from 'gatsby';
import Layout from '../layout';
import './indexPage.scss';

class IndexPage extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <Layout>
        <h1>Welcome to Know the Truth series!</h1>
        <h2>Please click link below to see monthly lesson</h2>
        <Link to="/what-must-I-do-to-be-saved/">
          What Must I Do To Be Saved?
        </Link>
      </Layout>
    );
  }
}

export default IndexPage;
