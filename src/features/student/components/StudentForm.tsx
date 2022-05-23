import { yupResolver } from "@hookform/resolvers/yup";
import { Alert, Box, Button, CircularProgress } from "@mui/material";
import { useAppSelector } from "app/hooks";
import InputField from "components/FormFields/InputField";
import RadioGroupField from "components/FormFields/RadioGroupField";
import SelectField from "components/FormFields/SelectField";
import { selectCityOptions } from "features/city/citySlice";
import { Student } from "models";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";

export interface StudentFormProps {
    initialValue?: Student;
    onSubmit?: (formValue: Student) => void;
}

const schema = yup.object().shape({
    name: yup
        .string()
        .required("Please enter your name!")
        .test("two-words", "Please enter at least two words", (value) => {
            if (!value) return true;
            const parts = value.split(" ") || [];
            return parts.filter((p) => Boolean(p)).length >= 2;
        }),
    age: yup
        .number()
        .positive("Please enter a positive number!")
        .min(18, "min is 18!")
        .max(50, "max is 50!")
        .required("Please enter your age!")
        .integer("Age is integer!")
        .typeError("Please enter valid number!"),
    mark: yup
        .number()
        .min(0, "min is 0")
        .max(10, "max is 10")
        .required("Please enter your mark!")
        .typeError("Please enter valid number!"),
    gender: yup
        .string()
        .oneOf(["male", "female"], "Please enter either Male or Female!")
        .required("Please select your gender!"),
    city: yup.string().required("Please select city!"),
});

const StudentForm = ({ initialValue, onSubmit }: StudentFormProps) => {
    const cityOptions = useAppSelector(selectCityOptions);
    const [error, setError] = useState<string>("");

    const {
        control,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<Student>({
        defaultValues: initialValue,
        resolver: yupResolver(schema),
    });

    const handleFormSubmit = async (formValues: Student) => {
        console.log("Form values: ", formValues);
        try {
            setError("");
            await onSubmit?.(formValues);
        } catch (err) {
            setError((err as Error).message);
        }
    };

    console.log("isSubmitting: ", isSubmitting);
    useEffect(() => {
        console.log('cityOP: ', cityOptions);
    }, [cityOptions]);

    console.log("CityOption: ", cityOptions);
    return (
        <Box maxWidth={400}>
            <form onSubmit={handleSubmit(handleFormSubmit)}>
                <InputField name='name' control={control} label='Full Name' />
                <RadioGroupField
                    name='gender'
                    control={control}
                    label='Gender'
                    options={[
                        { label: "Male", value: "male" },
                        { label: "Female", value: "female" },
                    ]}
                />
                <InputField
                    name='age'
                    control={control}
                    label='Age'
                    type='number'
                />
                <InputField
                    name='mark'
                    control={control}
                    label='Mark'
                    type='number'
                />
                {Array.isArray(cityOptions) && cityOptions.length > 0 && (
                    <SelectField
                        name='city'
                        control={control}
                        label='City'
                        options={cityOptions}
                    />
                )}
                {error && <Alert severity='error'>{error}</Alert>}
                <Box mt={3}>
                    <Button
                        variant='contained'
                        type='submit'
                        color='primary'
                        disabled={isSubmitting}
                    >
                        {isSubmitting && (
                            <CircularProgress
                                size={16}
                                sx={{ color: "#fff" }}
                            />
                        )}
                        &nbsp;Save
                    </Button>
                </Box>
            </form>
        </Box>
    );
};

export default StudentForm;
