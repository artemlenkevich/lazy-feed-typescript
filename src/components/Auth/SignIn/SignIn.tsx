import { Formik, Form, Field } from 'formik'
import { setAuthData } from '../../../redux/authSlice'
import { useAppDispatch } from '../../../redux/hooks'
import styles from '../Auth.module.css'

export let SignIn: React.FC<{}> = () => {
    const dispatch = useAppDispatch()

    return (
        <Formik
            initialValues={{
                firstname: '',
                lastname: '',
                password: ''
            }}
            onSubmit={(values) => {
                dispatch(setAuthData({firstname: values.firstname, lastname: values.lastname}))
            }}
        >
            <div className={styles.signUp}>
                <Form>
                    <h3 className={styles.title}>Hey!</h3>
                    <div className={styles.inputWrapper}>
                        <Field className={styles.input} name='firstname' type='text' placeholder='Firstname'/>
                    </div>
                    <div className={styles.inputWrapper}>
                        <Field className={styles.input} name='lastname' type='text' placeholder='Lastname'/>
                    </div>
                    <div className={styles.inputWrapper}>
                        <Field className={styles.input} name='password' type='text' placeholder='Password'/>
                    </div>
                    <button className={styles.submit} type='submit'>SignIn</button>
                </Form>
            </div>
        </Formik >
    )
}