import * as Yup from 'yup';

export const YupValidation = 

    Yup.object({
        email: Yup.string()
            .email('Enter a valid email address')
            .required('Email is required')
    });