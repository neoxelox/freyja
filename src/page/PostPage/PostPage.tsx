import Button from "../../component/atom/Button/Button";
import React, { Component } from "react";
import Post from "../../component/atom/Post/Post";
import StateUpdate from "../../component/atom/StateUpdate/StateUpdate";
import PostView from "../../component/molecule/PostView/PostView";
import { PostDto } from "../../services/model/post.dto";
import BasePage from "../BasePage/BasePage";
import { Row } from "../../component/atom/Row/Row";
import { Col } from "../../component/atom/Col/Col";
import "./PostPage.scss";

interface Params {
    id: string;
}

interface Comments {
    comments: PostDto[];
}

type State = Partial<PostDto> &
    Comments & {
        showComments: boolean;
        records: any[];
    };

export default class PostPage extends Component<any> {
    state: State = {
        comments: [],
        records: [],
        showComments: true,
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
            isIncident: true,
            type: "ISSUE",
            state: "RESOLVED",
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
                    type: "PUBLICATION",
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
                    type: "PUBLICATION",
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
                    type: "PUBLICATION",
                    dayCount: 16,
                },
            ],
            records: [
                {
                    id: "2abcd",
                    image: "https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg",
                    name: "Willy",
                    flatID: "2-2",
                    createdAt: "December 17, 1995 03:24:00",
                    newState: "RESOLVED",
                },
                {
                    id: "2abcd",
                    image: "https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg",
                    name: "Willy",
                    flatID: "2-2",
                    createdAt: "December 17, 1995 03:24:00",
                    newState: "IN PROGRESS",
                },
                {
                    id: "2abcd",
                    image: "https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg",
                    name: "Willy",
                    flatID: "2-2",
                    createdAt: "December 17, 1995 03:24:00",
                    newState: "PENDING",
                },
            ],
        });
    }

    render(): JSX.Element {
        const { comments, type, showComments, records } = this.state;

        return (
            <BasePage>
                {type === "PUBLICATION" && (
                    <div>
                        <PostView {...this.state} />
                        {comments.map((comment: PostDto, i: number) => (
                            <Post key={i.toString()} {...comment} />
                        ))}
                    </div>
                )}
                {type === "ISSUE" && (
                    <div>
                        <PostView {...this.state} />
                        <Row gap={8} alignItems="center" justifyContent="space-around" className="comment-or-record-btns">
                            <Col alignItems="center">
                                <Button
                                    appearence={showComments ? "secondary" : "tertiary"}
                                    size="sm"
                                    onClick={() => this.setState({ showComments: true })}
                                >
                                    Comentarios
                                </Button>
                            </Col>
                            <Col alignItems="center">
                                <Button
                                    appearence={showComments ? "tertiary" : "secondary"}
                                    size="sm"
                                    onClick={() => this.setState({ showComments: false })}
                                >
                                    Historial
                                </Button>
                            </Col>
                        </Row>
                        {showComments && comments.map((comment: PostDto, i: number) => <Post key={i.toString()} {...comment} />)}
                        {!showComments && records.map((record: any, i: number) => <StateUpdate key={i.toString()} {...record} />)}
                    </div>
                )}
            </BasePage>
        );
    }
}
