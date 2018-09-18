import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container } from 'semantic-ui-react';
import { fetchUser } from '../actions';
import HeaderWrapper from './HeaderWrapper';

const DashBoard = () => <h1>DashBoard</h1>;
const SurveyNew = () => <h1>SurveyNew</h1>;
const Landing = () => <h1>Home</h1>;

class App extends Component {

  componentDidMount() {
    const { fetchUser } = this.props;
    fetchUser();
  }

  render() {
    return (
      <Container>
        <BrowserRouter>
          <div>
            <HeaderWrapper />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={DashBoard} />
            <Route path="/surveys/new" component={SurveyNew} />
          </div>
        </BrowserRouter>
      </Container>
    );
  }
}

export default connect(null, {fetchUser})(App);