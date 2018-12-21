import React from 'react';

class Form extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <form>
        <h4>Want to learn more?</h4>

        <h5>Email us and we will send you a corresponding corse!</h5>

        <div>
          <label htmlFor="first">First Name</label>
          <input type="text" id="first" />
        </div>

        <div>
          <label htmlFor="last">Last Name</label>
          <input type="text" id="last" />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" />
        </div>

        <button type="submit">Send Email</button>
      </form>
    );
  }
}

export default Form;
