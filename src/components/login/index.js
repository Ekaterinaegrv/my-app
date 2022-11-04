import React from 'react';
import styles from '../../Styles.module.scss';
import { Formik, Form, Field } from 'formik';
import { SCHEMA } from '../../schema';
import CustomField from '../customField';
import cx from 'classnames';
import imgGoogle from '../icons/google-logo.png';


const initialState = {
    email: '',
    password: '',
    remember: false
}

const Login = () => {

    const handleSubmit = (values,actions) => {
        actions.resetForm();
     }

    return (
        <>
        <Formik 
                initialValues={initialState} 
                onSubmit={handleSubmit}
                validationSchema={SCHEMA}>
            {(formikProps)=>{

                return (
                    <main className={styles.container}>

                    <section className={styles.info}>
                    <h1>LOGIN TO YOUR ACCOUNT</h1>
                    </section>
                       

                    <Form className={styles.form}>

                        <section className={styles.inputContainer}>
                        <CustomField type="text" name="email" placeholder="Email Adress"/>
                        <CustomField type="password" name="password" placeholder="Password"/>
                        </section>

                        <section className={cx(styles.buttonsContainer, styles.buttonsContainerLogin)}>                   
                       
                        <section className={styles.checkbox}>
                            <label className={styles.textAlign}>
                                <Field type="checkbox" name="confirm"/>Remember Me</label> 
                                <a href='#' className={styles.link}><p>Forgot Password</p></a>
                        </section>

                        
                        <button type='submit' className={cx(styles.submitButton, styles.btn)}>
                        Login</button>

                    
                        <button className={cx(styles.googleButton, styles.btn)}>
                        <img src={imgGoogle} className={styles.imgGoogle} href='#'/>
                        Sign up with Google</button>

                        </section>
                        
                    </Form>
                    </main>
                    )
            }}
        </Formik>
        
        </>
    );
}

export default Login;
