import { Formik, Form, Field, ErrorMessage } from 'formik'
import { setAuthData } from '../../../redux/authSlice'
import { useAppDispatch } from '../../../redux/hooks'
import styles from '../Auth.module.css'

interface IError {
    firstname: string
    lastname: string
    password: string
}

export let SignUp: React.FC<{}> = () => {
    const dispatch = useAppDispatch()

    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                password: ''
            }}
            onSubmit={({firstname, lastname}) => {
                firstname = firstname[0].toUpperCase() + firstname.slice(1)
                lastname = lastname[0].toUpperCase() + lastname.slice(1)
                dispatch(setAuthData({firstname, lastname}))
            }}
            validate={(values) => {
                const errors = {} as IError

                if (!values.password) {
                    errors.password = 'Required'
                }
                if (!values.firstname) {
                    errors.firstname = 'Required'
                }
                if (!values.lastname) {
                    errors.lastname = 'Required'
                }

                return errors
            }}
        >
            <div className={styles.signUp}>
                <Form>
                    <h3 className={styles.title}>Join Lazy Feed today</h3>
                    <div className={styles.inputWrapper}>
                        <Field className={styles.input} name='firstname' type='text' placeholder='Firstname'/>
                        <ErrorMessage name='firstname'>{(message) => <div className={styles.errorMessage}>{message}</div>}</ErrorMessage>
                    </div>
                    <div className={styles.inputWrapper}>
                        <Field className={styles.input} name='lastname' type='text' placeholder='Lastname'/>
                        <ErrorMessage name='lastname'>{(message) => <div className={styles.errorMessage}>{message}</div>}</ErrorMessage>
                    </div>
                    <div className={styles.inputWrapper}>
                        <Field className={styles.input} name='password' type='text' placeholder='Password'/>
                        <ErrorMessage name='password'>{(message) => <div className={styles.errorMessage}>{message}</div>}</ErrorMessage>
                    </div>
                    <button className={styles.submit} type='submit'>SignUp</button>
                </Form>
            </div>
        </Formik >
    )
}

