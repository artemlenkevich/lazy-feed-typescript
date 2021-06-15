import styles from './App.module.css';
import { Controls } from './components/Controls/Controls';
import { Header } from './components/Header/Header';
import { Post } from './components/Post/Post';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.feed}>
                <div className={styles.feedContainer}>
                    <div className={styles.postWall}>
                        <Post />
                    </div>
                    <Controls />
                </div>
            </main>
        </div>
    );
}

export default App;
