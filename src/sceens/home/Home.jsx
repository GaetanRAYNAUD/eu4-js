import { Container } from '@material-ui/core';
import RandomFlag from 'components/RandomFlag';
import Upload from 'components/Upload/Upload';
import React, { PureComponent } from 'react';
import { FormattedMessage, injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { CenteredH1 } from 'typography';

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px 0;
`;

const RandomFlagContainer = styled.div`
  max-width: 50%;
`;

class Home extends PureComponent {
  render() {
    return (
      <Container>
        <MainContainer>
          <RandomFlagContainer>
            <RandomFlag />
          </RandomFlagContainer>
          <CenteredH1>
            <FormattedMessage
              id = { 'home.upload' }
            />
          </CenteredH1>
          <Upload />
        </MainContainer>
      </Container>
    )
  }
}

export default connect()(injectIntl(Home))
