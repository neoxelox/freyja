import React, { Component } from "react";
import Post from "../../component/atom/Post/Post";
import "./DashboardPage.scss";

export default class DashboardPage extends Component {
    render(): JSX.Element {
        return (
            <div className="App">
                <header className="App-header">
                    <Post
                        isIncident={true}
                        image="https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"
                        likeCount={16}
                        commentCount={12}
                        dayCount={5}
                        name="Guillermo Díaz Willy"
                        flatID="2º - 1º"
                        isAnchored={true}
                        incidentState="approved"
                    ></Post>
                    <Post
                        isIncident={true}
                        image="https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"
                        likeCount={16}
                        commentCount={12}
                        dayCount={5}
                        name="Guillermo Díaz Willy"
                        flatID="2º - 1º"
                        isAnchored={true}
                        incidentState="pending"
                    ></Post>
                    <Post
                        isIncident={true}
                        image="https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"
                        likeCount={16}
                        commentCount={12}
                        dayCount={5}
                        name="Guillermo Díaz Willy"
                        flatID="2º - 1º"
                        isAnchored={false}
                        incidentState="progress"
                    ></Post>
                    <Post
                        isIncident={true}
                        image="https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"
                        likeCount={16}
                        commentCount={12}
                        dayCount={5}
                        name="Guillermo Díaz Willy"
                        flatID="2º - 1º"
                        isAnchored={true}
                        incidentState="rejected"
                    ></Post>
                    <Post
                        isIncident={true}
                        image="https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"
                        likeCount={16}
                        commentCount={12}
                        dayCount={5}
                        name="Guillermo Díaz Willy"
                        flatID="2º - 1º"
                        isAnchored={true}
                        incidentState="solved"
                    ></Post>
                    <Post
                        isIncident={false}
                        image="https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"
                        likeCount={16}
                        commentCount={12}
                        dayCount={5}
                        name="Guillermo Díaz Willy"
                        flatID="2º - 1º"
                        isAnchored={false}
                    ></Post>
                </header>
            </div>
        );
    }
}
