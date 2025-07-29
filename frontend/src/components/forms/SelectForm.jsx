import React from 'react';
import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from '@mui/material';

const SelectForm = ({ label, options = [], value, onChange, name, error, helperText, ...props }) => {
    const id = React.useMemo(() => `${name}-select`, [name]);

    return (
        <FormControl fullWidth error={error}>
            <InputLabel id={`${id}-label`}>{label}</InputLabel>
            <Select
                id={id}
                labelId={`${id}-label`}
                value={value}
                label={label}
                onChange={onChange}
                name={name}
                aria-describedby={helperText ? `${id}-helper-text` : undefined}
                {...props}
            >
                {options.map((option) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
            </Select>
            {helperText && (
                <FormHelperText id={`${id}-helper-text`}>
                    {helperText}
                </FormHelperText>
            )}
        </FormControl>
    )
}

export default SelectForm;
