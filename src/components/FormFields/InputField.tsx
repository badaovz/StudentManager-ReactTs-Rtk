import { TextField } from '@mui/material'
import { Control, useController } from 'react-hook-form'

export interface InputFieldProps {
    name: string,
    control: Control<any>,
    label?: string,
    [key:string]:any
}

function InputField({name, control, label, ...inputProps}: InputFieldProps) {
    const {
        field: {value, onChange, onBlur, ref},
        fieldState: {invalid, error},
    } = useController({
        name,
        control,
    })
 
    return (
    <TextField 
        fullWidth
        size='small'
        margin='normal'
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        label={label}
        variant='outlined'
        inputRef={ref}
        error={invalid}
        helperText={error?.message}
        inputProps={inputProps}
    />
    )
}

export default InputField