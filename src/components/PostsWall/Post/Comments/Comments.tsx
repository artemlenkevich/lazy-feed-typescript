import commentsAvatar from './assets/user.jpg'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import styles from './Comments.module.css'
import { useAppDispatch, useAppSelector } from '../../../../redux/hooks'
import { setAutoUpdate } from '../../../../redux/postsSlice'
import { useEffect } from 'react'

interface IComments {
    commentsIsShow: boolean
    setShowComments: (show: boolean) => void
    comments: Array<string>
    setComment: React.Dispatch<React.SetStateAction<Array<string>>>
}

interface IComment {
    comment: string
    userName: string
}

interface IWriteComment {
    isAuth: boolean
    setComment: React.Dispatch<React.SetStateAction<string[]>>
    setShowComments: (show: boolean) => void
    onCommentFieldFocus: () => void
}

export const Comments: React.FC<IComments> = ({ commentsIsShow, setShowComments, comments, setComment }) => {
    const userName = useAppSelector(state => state.auth.firstname + ' ' + state.auth.lastname)
    const isAuth = useAppSelector(state => state.auth.isAuth)
    const dispatch = useAppDispatch()

    const onCommentFieldFocus = () => {
        dispatch(setAutoUpdate(false))
    }

    return (
        <div>
            {commentsIsShow &&
                <>
                    <div className={styles.hideComments} onClick={() => setShowComments(false)}>Hide comments</div>
                    <div className={styles.commentsHolder}>
                        {comments.map((comment, index) => <Comment key={index} comment={comment} userName={userName} />)}
                    </div>
                </>
            }
            <WriteComment isAuth={isAuth} setComment={setComment} setShowComments={setShowComments} onCommentFieldFocus={onCommentFieldFocus} />
        </div>
    )
}

const Comment: React.FC<IComment> = ({ comment, userName }) => {
    return (
        <div className={styles.comment}>
            <div className={styles.commentsAvatarWrapper}>
                <img className={styles.commentAvatar} src={commentsAvatar} alt="avatar" />
            </div>
            <div className={styles.commentBody}>
                <div className={styles.commentUsername}>{userName}</div>
                <div className={styles.commentText}>{comment}</div>
            </div>
        </div>
    )
}

const WriteComment: React.FC<IWriteComment> = ({ isAuth, setComment, setShowComments, onCommentFieldFocus }) => {
    return (
        <div className={styles.writeComment}>
            <img className={styles.commentAvatar} src={commentsAvatar} alt="avatar" />
            <Formik
                initialValues={{
                    comment: ''
                }}
                onSubmit={(values, { resetForm, setFieldError }) => {
                    if (!isAuth) {
                        setFieldError('comment', 'You should be registered for writing comments')
                        setTimeout(() => resetForm({ values: { comment: values.comment } }), 3000)
                    } else if (!values.comment.length) {
                        setFieldError('comment', 'Please enter something')
                    } else {
                        setComment(comments => [...comments, values.comment])
                        setShowComments(true)
                        resetForm()
                    }
                }}
            >
                <Form className={styles.commentForm}>
                    <Field className={styles.commentFormInput} onFocus={onCommentFieldFocus} name='comment' type='text' placeholder='Write you comment here' />
                    <ErrorMessage name='comment'>
                        {(msg) => <div className={styles.errorMessage}>{msg}</div>}
                    </ErrorMessage>
                    <button className={styles.commentFormButton} type='submit' />
                </Form>
            </Formik>
        </div>
    )
}