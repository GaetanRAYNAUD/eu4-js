import Button from '@material-ui/core/Button';
import api from 'api/api';
import { colors } from 'assets/styles/colors';
import DropZone from 'components/dropZone';
import * as JSZip from 'jszip';
import * as React from 'react';
import { PureComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import styled from 'styled-components';

const MainContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ErrorContainer = styled.div`
  color: ${ colors.blue }
`;

class Upload extends PureComponent {
  state = {
    file: undefined,
    error: false
  };

  handleChange = async (file) => {
    if (file != null && file.name.endsWith('.eu4')) {

      try {
        const zip = await JSZip.loadAsync(file);

        if ('ai' in zip.files && 'meta' in zip.files && 'gamestate' in zip.files) {
          this.setState({
            file,
            error: false
          });
        }
      } catch (e) {
        this.setState({ error: true });
      }
    }
  };

  handleValidate = async () => {
    const { file } = this.state;
    let formData = new FormData();

    formData.append("save", file);
    const response = await api.save.parse(formData);

    const zip = await JSZip.loadAsync(response.data);

    //Todo dispatch zip content
    console.log(await zip.file("data.json").async("string"));
  };

  render() {
    const { file, error } = this.state;

    return (
      <MainContainer>
        <DropZone messageId = { 'upload.choose' } name = { 'save' } file = { file }
                  onChange = { this.handleChange } error = { error } />
        { error &&
          <ErrorContainer>
            <FormattedMessage
              id = { 'upload.error' }
            />
          </ErrorContainer>
        }
        { file &&
          <Button variant = "contained" component = "span" color = "primary" onClick = { this.handleValidate }>
            <FormattedMessage
              id = { 'upload.validate' }
            />
          </Button>
        }
      </MainContainer>
    )
  }
}

const mapStateToProps = state => {
  return {}
};

const mapDispatchToProps = dispatch => {
  return {}
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Upload);
