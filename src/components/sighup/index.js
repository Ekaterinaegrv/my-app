import React from 'react';
import styles from '../../Styles.module.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import cx from 'classnames';
import '../../reset-style.css';
import { SCHEMA } from '../../schema';
import CustomField from '../customField';
import imgGoogle from '../icons/google-logo.png';


const initialState = {
    firstName:'',
    lastName:'',
    displayName: '',
    email: '',
    password: '',
    passwordConfirm: '',
    role: '',
    subscribe: false
}


const Signup = (props) => {

    // const clNames = cx({
    //     styles.header
    // })


    const handleSubmit = (values,actions) => {
        actions.resetForm();
     }
   
    return (
        <>
        <Formik 
        initialValues={initialState} 
        onSubmit={handleSubmit}
        validationSchema={SCHEMA}

        >
            {(formikProps)=>{

                return (
                    <main className={styles.container}>

                    <section className={styles.info}>
                    <h1>CREATE AN ACCOUNT</h1>
                    <h3>We always keep your name and email address private.</h3>
                    </section>

                    <Form className={styles.form}>

                        <section className={styles.inputContainer}>
                        <CustomField name="firstName" placeholder="First name" type="text"/>
                        <CustomField name="lastName" placeholder="Last name" type="text"/>
                        <CustomField name="displayName" placeholder="Display Name" type="text"/>
                        <CustomField name="email" placeholder="Email Adress" type="text"/>
                        <CustomField name="password" placeholder="Password" type="password"/>
                        <CustomField name="passwordConfirm" placeholder="Password Confirmation" type="password"/>
                        </section>

                        <section className={cx(styles.buttonsContainer, styles.buttonsContainerSignup)}>
                            
                            <section className={styles.radioField}>
                                <Field 
                                    type="radio" 
                                    name="role" 
                                    value="buyer"
                                    className={styles.inputPount}
                                    required
                                    />
                            <div className={styles.radioLabel}>
                                <label>Join As a Buyer</label>
                                <p>I am looking for a Name, Logo or Tagline for my business, brand or product.</p>
                            </div>
                            </section>

                            <section className={styles.radioField}>
                                <Field 
                                    type="radio" 
                                    name="role" 
                                    value="creator"
                                    className={styles.inputPount}
                                    required
                                    />
                            <div className={styles.radioLabel}>
                                <label>Join As a Creative or Marketplace Seller</label>
                                <p>I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.</p>
                            </div>
                            </section>
                        
                        <label className={styles.textAlign}>
                            <Field type="checkbox" name="subscribe"/>
                            Allow Squadhelp to send marketing/promotional offers from time to time
                        </label> 

                        <button type='submit' className={cx(styles.submitButton, styles.btn)}>
                        Login</button>

                        <p className={styles.textAlign}>
                            By clicking this button, you agree to our <a href='#' className={styles.link}>Terms of Service.</a></p>

                        <button className={cx(styles.googleButton, styles.btn)}href='#'>
                            <img src={imgGoogle} className={styles.imgGoogle}/>
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

export default Signup;
