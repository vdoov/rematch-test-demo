import React from 'react';
import PageWrapper from 'components/PageWrapper';
import MainScreen from 'components/MainScreen';
import Screen from 'components/Screen';
import Editor from 'components/Editor';
import MenuContainer from 'containers/MenuContainer';
import ElementsViewContainer from 'containers/ElementsViewContainer';
import { Provider } from 'react-redux';
import store from 'store';

class Index extends React.Component {

  render() {

    return (
      <Provider store={store}>
        <PageWrapper>
          <MenuContainer />
          <MainScreen>
            <Screen>
              <ElementsViewContainer />
            </Screen>
            <Screen>
              <Editor />
            </Screen>
          </MainScreen>
        </PageWrapper>
      </Provider>
    );
  }

  componentDidCatch(error, info) {
    console.error(error);
    console.error(info);
  }

}

export default Index;
