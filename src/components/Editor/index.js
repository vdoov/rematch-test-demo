import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

import StoreEditor from 'components/StoreEditor';
import ModelEditor from 'components/ModelEditor';
import StoreProviderEditor from 'components/StoreProviderEditor';
import StoreConsumerEditor from 'components/StoreConsumerEditor';

const PaperStyled = styled(Paper)`
  position: relative;
  width: 600px;
  height: 800px;
  max-height: 800px;
  overflow-x: auto;
  overflow-y: auto;
  padding: 0 1rem;
`;

class Editor extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      tab: 0,
    };

    this.handleTabChange = this.handleTabChange.bind(this);
  }

  render() {
    const { tab } = this.state;

    return (
      <PaperStyled square={false} elevation={6}>
        <Tabs
          value={tab}
          onChange={this.handleTabChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
        >
          <Tab label="store" />
          <Tab label="user model" />
          <Tab label="store provider" />
          <Tab label="store consumer" />
        </Tabs>

        { tab === 0 && <StoreEditor /> }
        { tab === 1 && <ModelEditor /> }
        { tab === 2 && <StoreProviderEditor /> }
        { tab === 3 && <StoreConsumerEditor /> }

      </PaperStyled>
    );
  }

  handleTabChange(event, tab) {
    this.setState({ tab });
  }
}

export default Editor;
