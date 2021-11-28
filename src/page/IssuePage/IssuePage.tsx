import Button from "@restart/ui/esm/Button";
import React, { Component } from "react";
import Post from "../../component/atom/Post/Post";
import BasePage from "../BasePage/BasePage";
import FloatingButton from "../../component/atom/FloatingButton/FloatingButton";
import IssueFilter from "../../component/atom/IssueFilter/IssueFilter";

const mockPostText =
    "Duis velit do veniam laborum. Exercitation mollit eiusmod tempor duis eu ipsum sunt. Irure excepteur occaecat do reprehenderit laborum laboris sit quis nostrud occaecat. Duis occaecat exercitation ut cillum ex amet laborum eiusmod cillum et magna. Sunt est ut culpa voluptate fugiat exercitation. Laboris ipsum enim aliqua labore est officia nisi sunt laborum incididunt laboris et dolor.";

export default class DashboardPage extends Component {
    render(): JSX.Element {
        return (
            <BasePage>
                <IssueFilter />
                <Post
                    id={"1"}
                    type="POST"
                    isIncident={true}
                    image="https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"
                    likeCount={16}
                    commentCount={12}
                    dayCount={5}
                    name="Guillermo Díaz Willy"
                    flatID="2º - 1º"
                    isAnchored={true}
                    incidentState="solved"
                    text={mockPostText}
                ></Post>
                <Post
                    id={"1"}
                    type="POST"
                    isIncident={true}
                    image="https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"
                    likeCount={16}
                    commentCount={12}
                    dayCount={5}
                    name="Guillermo Díaz Willy"
                    flatID="2º - 1º"
                    isAnchored={true}
                    incidentState="pending"
                    text={mockPostText}
                ></Post>
                <Post
                    id={"1"}
                    type="POST"
                    isIncident={true}
                    image="https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"
                    likeCount={16}
                    commentCount={12}
                    dayCount={5}
                    name="Guillermo Díaz Willy"
                    flatID="2º - 1º"
                    isAnchored={true}
                    incidentState="approved"
                    text={mockPostText}
                ></Post>
                <Post
                    id={"1"}
                    type="POST"
                    isIncident={true}
                    image="https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"
                    likeCount={16}
                    commentCount={12}
                    dayCount={5}
                    name="Guillermo Díaz Willy"
                    flatID="2º - 1º"
                    isAnchored={false}
                    incidentState="progress"
                    text={mockPostText}
                ></Post>
                <Post
                    id={"1"}
                    type="POST"
                    isIncident={true}
                    image="https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"
                    likeCount={16}
                    commentCount={12}
                    dayCount={5}
                    name="Guillermo Díaz Willy"
                    flatID="2º - 1º"
                    isAnchored={true}
                    incidentState="rejected"
                    text={mockPostText}
                ></Post>
                <FloatingButton />
            </BasePage>
        );
    }
}
