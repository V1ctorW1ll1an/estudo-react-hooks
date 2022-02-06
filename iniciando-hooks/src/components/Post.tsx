import _ from "lodash";
import { useEffect, useState } from "react";

export interface IPosts {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Post = (): JSX.Element => {
    const [posts, setPosts] = useState<Array<IPosts>>([]);

    const getPosts = async (): Promise<void> => {
        await fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response: Response) => response.json())
            .then((response: Array<IPosts>) => setPosts(response))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <ul>
            {_.map(posts, (post: IPosts) => {
                return (
                    <li className="post" key={post.id}>
                        <h1 className="post-title">{post.title}</h1>
                        <p className="post-body">{post.body}</p>
                    </li>
                );
            })}
        </ul>
    );
};

export { Post };
