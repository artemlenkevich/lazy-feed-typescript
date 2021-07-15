import styles from './App.module.css';
import { Header } from './components/Header/Header';
import { PostsWall } from './components/PostsWall/PostsWall';
import { Controls } from './components/Controls/Controls';
import { Auth } from './components/Auth/Auth';
import { ScrollTopBtn } from './components/ScrollTopBtn/ScrollTopBtn';
import { FixedControls } from './components/Controls/FixedControls/FixedControls';
import { LeftSideControls } from './components/Controls/LeftSideControls/LeftSideControls';

function App() {
    return (
        <div className={styles.App}>
            <Header />
            <main className={styles.feed}>
                <div className={styles.feedContainer}>
                    <PostsWall />
                    <FixedControls>
                        <Controls />
                    </FixedControls>
                </div>
            </main>
            <Auth />
            <ScrollTopBtn />
            <LeftSideControls>
                <Controls />
            </LeftSideControls>
        </div>
    );
}
export default App;