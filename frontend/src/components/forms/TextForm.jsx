import React from 'react';
import { TextField } from '@mui/material';

const TextForm = ({ label, name, value, onChange, error, helperText, ...props }) => {
    const id = React.useMemo(() => `${name}-input`, [name]);
    
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
            aria-describedby={helperText ? `${id}-helper-text` : undefined}
            autoComplete={name}
            {...props}
        />
    )
}

export default TextForm;
