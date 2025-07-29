import { FormControl, InputLabel, MenuItem, Select, FormHelperText } from '@mui/material'
import React from 'react'

const MultiSelectForm = ({ 
    label = "", 
    options = [], 
    value = [], 
    onChange, 
    name, 
    error = false, 
    helperText = "", 
    ...props 
}) => {
    const id = React.useMemo(() => `${name}-select`, [name]);

    // Ensure options is always an array and has valid structure
    const safeOptions = React.useMemo(() => {
        if (!options || !Array.isArray(options)) {
            return [];
        }
        return options.filter(option => 
            option && 
            typeof option === 'object' && 
            (option.id !== undefined && option.id !== null) &&
            option.name
        );
    }, [options]);

    // Ensure value is always an array
    const safeValue = React.useMemo(() => {
        if (!value) return [];
        return Array.isArray(value) ? value : [];
    }, [value]);

    return (
        <FormControl fullWidth error={error}>
            <InputLabel id={`${id}-label`}>{label}</InputLabel>
            <Select
                id={id}
                labelId={`${id}-label`}
                multiple
                value={safeValue}
                label={label}
                onChange={onChange}
                name={name}
                aria-describedby={helperText ? `${id}-helper-text` : undefined}
                {...props}
            >
                {safeOptions.length > 0 ? (
                    safeOptions.map((option) => (
                        <MenuItem key={option.id} value={option.id}>
                            {option.name}
                        </MenuItem>
                    ))
                ) : (
                    <MenuItem disabled value="">
                        No options available
                    </MenuItem>
                )}
            </Select>
            {helperText && (
                <FormHelperText id={`${id}-helper-text`}>
                    {helperText}
                </FormHelperText>
            )}
        </FormControl>
    );
};

export default MultiSelectForm;
