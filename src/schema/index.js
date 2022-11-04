import React, { Component } from 'react';
import * as yup from 'yup';


export const SCHEMA = yup.object({  
    firstName: yup.string().required('Field cannot be empty'),
    lastName:  yup.string().required('Field cannot be empty'),
    displayName: yup.string().required('Display name should be more than 4 characters'), 
    email: yup.string().required('Please check the format of email address').matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'Please check the format of email address'),
    password: yup.string().required('Field cannot be empty'),
    passwordConfirm: yup.string().required('Password confirmation needs to match original password').oneOf([yup.ref('password')], 'Password confirmation needs to match original password'),
    role: yup.string().required().oneOf(['buyer', 'creator']),
    subscribe: yup.boolean(),
})

