import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { PostsWall } from './components/PostsWall/PostsWall';
import { Controls } from './components/Controls/Controls';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.feed}>
                <div className={styles.feedContainer}>
                    <PostsWall />
                    <Controls />
                </div>
            </main>
        </div>
    );
}

export default App;