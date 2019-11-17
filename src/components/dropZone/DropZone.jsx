import { colors } from "assets/styles";
import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { CheckCircle, Upload, XCircle } from 'react-feather';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

const getColor = props => {
  if (props.error) {
    return colors.reject;
  }

  if (props.isDragAccept) {
    return colors.accept;
  }

  if (props.isDragReject) {
    return colors.reject;
  }

  if (props.isDragActive) {
    return colors.white;
  }

  if (props.file) {
    return colors.accept;
  }

  return colors.darkBlue
};

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${ props => getColor(props) };
  border-style: dashed;
  background-color: ${ colors.background };
  color: ${ colors.blue };
  outline: none;
  cursor: pointer;
  transition: border 0.24s ease-in-out;
`;

const DropZoneTitle = styled.div`
  font-size: 12px;
  color: ${ colors.blue };
  line-height: 20px;
`;

const InputBody = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  padding-right: 12px;
`;

const DropZoneContainer = styled.div`
  padding-bottom: 10px;
`;

const DropZone = ({ messageId, name, onChange, value, error }) => {
  const [ file, setFile ] = useState(value);

  const onDrop = files => {
    setFile(files[ 0 ]);
    onChange(files[ 0 ]);
  };

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({ onDrop });

  return (
    <DropZoneContainer>
      <DropZoneTitle>
        <FormattedMessage id = { messageId } />
      </DropZoneTitle>
      <Container
        { ...getRootProps({ isDragActive, isDragAccept, isDragReject }) } error = { error } file = { file }
      >
        <input { ...getInputProps() } name = { name } />
        <InputBody>
          <IconContainer>
            { file ? (
              error ? (
                <XCircle size = { 20 } color = { colors.reject } />
              ) : (
                <CheckCircle size = { 20 } color = { colors.accept } />
              )
            ) : (
                <Upload size = { 20 } color = { colors.blue } />
              ) }
          </IconContainer>
          { file ? (
            file.name
          ) : (
              <FormattedMessage id = "dropzone.empty" />
            ) }
        </InputBody>
      </Container>
    </DropZoneContainer>
  )
};

export default DropZone
