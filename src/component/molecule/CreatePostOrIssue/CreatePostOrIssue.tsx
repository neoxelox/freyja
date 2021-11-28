import React, { Component } from "react";
import { Badge, Button, Card, Form } from "react-bootstrap";
import { PostDto } from "../../../services/model/post.dto";
import { getPostPreview } from "../../../utils/get-post-preview";
import Icon from "../../atom/Icon/Icon";
import "./CreatePostOrIssue.scss";
import "../../atom/Post/Post.scss";
import { Link } from "react-router-dom";
import ProfileImage from "../../atom/ProfileImage/ProfileImage";
import { Row } from "../../atom/Row/Row";
import { Col } from "../../atom/Col/Col";

export default class CreatePostOrIssue extends Component<any, any> {
    constructor(props) {
        super(props);
        this.state = {
            postText: "",
            priority: "low",
        };
    }

    handleWorld = () => {
        console.log("world");
    };

    render(): JSX.Element {
        const { type } = this.props;
        return (
            <div className="mt-3" style={{ marginLeft: "50px important" }}>
                <Row gap={10} alignItems="flex-start" justifyContent="flex-start" className="mb-2 ml-50p">
                    <ProfileImage
                        image={"https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"}
                        role="SECRETARY"
                    />

                    <Col gap={2}>
                        <Row gap={5}>
                            <p style={{ marginBottom: 0 }} className="username">
                                hola
                            </p>
                            <p style={{ marginBottom: 0 }} className="flat-id">
                                · 1º 2ª
                            </p>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Form className="form">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control as="textarea" rows={12} placeholder="    ¿Qué ocurre?" className="text-input" />
                        </Form.Group>
                        {/* <Button variant="primary" type="submit">
                            Submit
                        </Button> */}
                    </Form>
                </Row>
                {type === "post" ? (
                    <div className="createPostFooter">
                        <div className="footer-option">
                            <Icon icon="worldIcon" className="inline-incidence-icon"></Icon>
                            <span style={{ marginLeft: "5px" }}> Público </span>
                        </div>
                        <div className="footer-option-last">
                            <Icon icon="cameraIcon" size="xs" className="inline-incidence-icon"></Icon>
                            <Icon icon="pollIcon" size="xs" className="inline-incidence-icon"></Icon>
                            <Button className="publish-btn">Publicar</Button>
                        </div>
                    </div>
                ) : (
                    <div className="createPostFooter">
                        <div className="footer-option">
                            <span style={{ marginLeft: "5px" }}> Prioridad: </span>
                            {this.state.priority === "low" && <span style={{ color: "#38bdf8" }}>BAJA</span>}
                            {this.state.priority === "medium" && <span style={{ color: "#eab308" }}>MEDIA</span>}
                            {this.state.priority === "high" && <span style={{ color: "#ef4444" }}>ALTA</span>}
                            <Icon
                                icon="highPriorityFilterIcon"
                                className="inline-incidence-icon-right"
                                onClick={() => this.setState({ priority: "high" })}
                            ></Icon>
                            <Icon
                                icon="mediumPriorityFilterIcon"
                                className="inline-incidence-icon-right"
                                onClick={() => this.setState({ priority: "medium" })}
                            ></Icon>
                            <Icon
                                icon="lowPriorityFilterIcon"
                                className="inline-incidence-icon-right"
                                onClick={() => this.setState({ priority: "low" })}
                            ></Icon>
                        </div>
                        <div className="footer-option" onClick={() => this.handleWorld()}>
                            <Icon icon="worldIcon" className="inline-incidence-icon"></Icon>
                            <span style={{ marginLeft: "5px" }}> Público </span>
                        </div>
                        <div className="footer-option-last">
                            <Icon icon="cameraIcon" className="inline-incidence-icon"></Icon>
                            <Button className="publish-btn">Publicar</Button>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
