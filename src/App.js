import { history } from 'config/configuration';
import { ConnectedRouter } from 'connected-react-router';
import { DefaultLayout as Layout } from 'layouts';
import * as React from 'react';
import { PureComponent } from 'react';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Home from 'sceens/home/Home';

class App extends PureComponent {
  render() {
    const { intl } = this.props;

    return (
      <ConnectedRouter history = { history }>
        <Layout>
          <Switch>
            <Route exact path = { "/" } component = { Home } />
            <Route
              exact
              path = { intl.formatMessage({
                id: "routes.edit"
              }) }
              component = { Home }
            />
          </Switch>
        </Layout>
      </ConnectedRouter>
    );
  }
}

const mapStateToProps = () => ( {} );

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectIntl(App));
