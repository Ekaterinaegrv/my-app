import { Field } from "formik";
import styles from '../../Styles.module.scss';
import cx from 'classnames';



function CustomField(props) {
    
    return(
        <Field {...props} >
            {({ field, form, meta }) => {
                const inputStyles = cx(styles.input, {
                    [styles.valid]: meta.touched && meta.error,
                    [styles.invalid]: meta.touched && !meta.error,
                })

                return (
                   
                    <div className={styles.inputBox}>
                    <input
                        className={inputStyles}
                        type={props.type} 
                        {...field}
                        name = {props.name}
                        placeholder={props.placeholder}/>
                         {meta.touched && meta.error && <div className={styles.errorMessage}>{meta.error}</div>}
                    </div>
                   
                    
                )}}
        </Field>
    )
}

export default CustomField;