import React from 'react'
import { TextField,Grid } from '@material-ui/core'
import { useFormContext,Controller } from 'react-hook-form'

const FormInput = ({name,label,required}) => {
const {control}  = useFormContext();
const isError=false;

    return (
        <Grid item={12} sm={6} >
            <Controller
            render={({ field }) => <TextField {...field} />}
            control={control}
            fullWidth
            name={name}
            label={label}
            error={isError}
            />
        </Grid>
    );
}

export default FormInput 
