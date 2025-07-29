import React from 'react';
import { TextField } from '@mui/material';

const DescriptionForm = ({ label, name, value, onChange, error, helperText, ...props }) => {
    const id = React.useMemo(() => `${name}-textarea`, [name]);
    
    return (
        <TextField
            id={id}
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            error={error}
            helperText={helperText}
            fullWidth
            multiline
            aria-describedby={helperText ? `${id}-helper-text` : undefined}
            {...props}
        />
    )
}

export default DescriptionForm;
