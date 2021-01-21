import React, { FC } from 'react';
import { TextField, TextFieldProps } from 'react-admin';

const TextFieldEmpty: FC<TextFieldProps> = (props) => <TextField emptyText="-" {...props} />;

export default TextFieldEmpty;