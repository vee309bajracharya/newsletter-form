import * as Yup from 'yup';

export const YupValidation = 

    Yup.object({
        email: Yup.string()
            .email()
            .required('Valid email required')
    });