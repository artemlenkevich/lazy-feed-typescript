import styles from './App.module.css';
import { Controls } from './components/Controls/Controls';
import { Header } from './components/Header/Header';
import PostsWallContainer from './containers/PostsWallContainer/PostsWallContainer';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.feed}>
                <div className={styles.feedContainer}>
                    <PostsWallContainer />
                    <Controls />
                </div>
            </main>
        </div>
    );
}

export default App;

// (store.dispatch as ThunkDispatch<AppStateType, unknown, AnyAction>)(requestPosts(5))