import { Author, PostType } from "../redux/postsSlice"

interface RandomUsers {
    info: {
        page: number
        results: number
        seed: string
        version: string
    }
    results: Array<RandomUser>
}

interface RandomUser {
    name: {
        first: string
        last: string
        title: string
    }
    picture: {
        large: string
        medium: string
        thumbnail: string
    }
    login: {
        uuid: string
    }
    [key: string]: any
}



export const postsApi = {
    getPosts(quantity: number) {
        return Promise.all([this.getRandomUsers.call(this, quantity), this.getRandomContentPhotos.call(this, quantity)])
            .then(result => {
                let posts: Array<PostType> = []
                let [users, photos] = result;
                for (let i = 0; i < quantity; i++) {
                    posts.push({author: users[i], contentImageUrl: photos[i], id: Math.random()})
                }
                return posts
            })
    },
    getRandomUsers(quantity: number) {
        return fetch(`https://randomuser.me/api/?results=${quantity}&inc=name,picture,login`)
        .then(r => r.json())
        .then((randomUsers: RandomUsers) => {
            let users: Array<Author> = []
            randomUsers.results.forEach((randomUser) => {
                users.push({
                    firstname: randomUser.name.first,
                    lastname: randomUser.name.last,
                    avatarUrl: randomUser.picture.large,
                    id: randomUser.login.uuid
                })
            })
            return users
        })
    },
    getRandomContentPhotos(quantity: number) {
        let requests = []
        for (let i = 0 ; i < quantity; i++) {
            requests.push(fetch('https://picsum.photos/500/600'));
        }
        return Promise.all(requests)
            .then(responses => {
                let images: Array<string> = [];
                responses.forEach(response => images.push(response.url));
                return images;
            })
    }
}