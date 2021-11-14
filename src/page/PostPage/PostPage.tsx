import React, { Component } from "react";
import { RouteComponentProps } from "react-router-dom";
import Post from "../../component/atom/Post/Post";
import PostView from "../../component/molecule/PostView/PostView";
import { PostDto } from "../../services/model/post.dto";
import BasePage from "../BasePage/BasePage";

interface Params {
    id: string;
}

interface Comments {
    comments: PostDto[];
}

type State = Partial<PostDto> & Comments;

export default class PostPage extends Component<RouteComponentProps<Params>, State> {
    state: State = {
        comments: [],
    };

    componentDidMount(): void {
        //Fetch post and comments and set page state with them
        this.setState({
            id: "1abcd",
            text: "Hola! Este es el nuevo espacio de la comunidad. Aquí podeis poner problemas o inquietudes que tengais dentro de la misma.",
            image: "https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg",
            likeCount: 2,
            commentCount: 1,
            name: "Willy",
            flatID: "2-2",
            isIncident: false,
            type: "POST",
            dayCount: 16,
            comments: [
                {
                    id: "2abcd",
                    text: "Hola! Este es el nuevo espacio de la comunidad. Aquí podeis poner problemas o inquietudes que tengais dentro de la misma.",
                    image: "https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg",
                    likeCount: 2,
                    commentCount: 1,
                    name: "Willy",
                    flatID: "2-2",
                    isIncident: false,
                    type: "POST",
                    dayCount: 16,
                },
                {
                    id: "3abcd",
                    text: "Hola! Este es el nuevo espacio de la comunidad. Aquí podeis poner problemas o inquietudes que tengais dentro de la misma.",
                    image: "https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg",
                    likeCount: 2,
                    commentCount: 1,
                    name: "Willy",
                    flatID: "2-2",
                    isIncident: false,
                    type: "POST",
                    dayCount: 16,
                },
                {
                    id: "4abcd",
                    text: "Hola! Este es el nuevo espacio de la comunidad. Aquí podeis poner problemas o inquietudes que tengais dentro de la misma.",
                    image: "https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg",
                    likeCount: 2,
                    commentCount: 1,
                    name: "Willy",
                    flatID: "2-2",
                    isIncident: false,
                    type: "POST",
                    dayCount: 16,
                },
            ],
        });
    }

    render(): JSX.Element {
        const { text, image, likeCount, commentCount, name, flatID, comments } = this.state;

        return (
            <BasePage>
                <PostView {...this.state} />
                {comments.map((comment: PostDto, i: number) => (
                    <Post key={i.toString()} {...comment} />
                ))}
            </BasePage>
        );
    }
}
