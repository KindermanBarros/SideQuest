import React from "react";
import { FormControl, InputLabel, Input, Box } from "@mui/material";

interface GenericInputProps {
    label: string;
    id: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    sx?: any;
}

const InputField: React.FC<GenericInputProps> = ({ label, id, type, value, onChange, sx }) => {
    return (
            <Box sx={{ backgroundColor: 'background.paper', p: 2, borderRadius: 4, width:500 }}>
                <FormControl
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",

                        ...sx
                    }}
                >
                    <InputLabel htmlFor={id}>{label}</InputLabel>
                    <Input id={id} type={type} value={value} onChange={onChange} />
                </FormControl>
            </Box>
    );
};

export default InputField;    