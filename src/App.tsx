import styles from './App.module.css';
import ControlsContainer from './containers/ControlsContainer/ControlsContainer';
import { Header } from './components/Header/Header';
import PostsWallContainer from './containers/PostsWallContainer/PostsWallContainer';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.feed}>
                <div className={styles.feedContainer}>
                    <PostsWallContainer />
                    <ControlsContainer />
                </div>
            </main>
        </div>
    );
}

export default App;