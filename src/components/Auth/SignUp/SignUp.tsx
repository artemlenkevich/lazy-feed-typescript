import { Formik, Form, Field } from 'formik'
import styles from './SignUp.module.css'

export let SignUp: React.FC = () => {

    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                password: ''
            }}
            onSubmit={(values) => {
                console.log(values)
            }}
        >
            <div className={styles.signUp}>
                <Form>
                    <h3 className={styles.title}>Join Lazy Feed today</h3>
                    <div className={styles.inputWrapper}>
                        <Field className={styles.input} name='firstname' type='text' placeholder='Firstname'/>
                    </div>
                    <div className={styles.inputWrapper}>
                        <Field className={styles.input} name='lastname' type='text' placeholder='Lastname'/>
                    </div>
                    <div className={styles.inputWrapper}>
                        <Field className={styles.input} name='password' type='text' placeholder='Password'/>
                    </div>
                    <button className={styles.submit} type='submit'>Submit</button>
                </Form>
            </div>
        </Formik >
    )
}