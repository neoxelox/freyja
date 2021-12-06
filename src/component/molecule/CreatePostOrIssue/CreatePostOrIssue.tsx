import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { PostDto } from "../../../services/model/post.dto";
import Icon from "../../atom/Icon/Icon";
import "./CreatePostOrIssue.scss";
import "../../atom/Post/Post.scss";
import ProfileImage from "../../atom/ProfileImage/ProfileImage";
import { Row } from "../../atom/Row/Row";
import { Col } from "../../atom/Col/Col";
import { classNames } from "@agustinmj/class-names";
import { UserDto } from "../../../services/model/user.dto";
import { MembershipDto } from "../../../services/model/membership.dto";
import { connect } from "react-redux";
import { RootState } from "../../../store";
import { selectCommunity } from "../../../store/CommunityStore";
import { role } from "../../../utils/role";
import Button from "../../atom/Button/Button";
import { PostService } from "../../../services/api/services/post.service";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { MainRouterPage } from "../../../router/MainRouter";
import { toast } from "react-hot-toast";

interface Props extends RouteComponentProps {
    user: UserDto;
    membership: MembershipDto;
    communityId: string;
    type: PostDto["type"];
    loading: boolean;
}

interface State {
    postText: string;
    priority: PostDto["priority"];
}

class CreatePostOrIssue extends Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = {
            postText: "",
            priority: 0,
        };
    }

    async createPost(): Promise<void> {
        const { type, communityId, history } = this.props;
        const { postText, priority } = this.state;

        const success = await PostService.createPost(communityId, {
            type,
            message: postText,
            priority: type === "ISSUE" ? priority : undefined,
        });
        if (success) {
            const message = (type === "PUBLICATION" ? "Publicación" : "Incidencia") + " creada";
            toast.success(message, { id: message });
            history.replace(MainRouterPage.HOME);
        }
    }

    render(): JSX.Element {
        const { type, user, membership, loading } = this.props;
        const { priority, postText } = this.state;
        return (
            <div className="mt-3">
                <Row gap={10} alignItems="center" className="create-post-user">
                    <ProfileImage image={user.picture} role={membership.role} />

                    <Col gap={2}>
                        <Row gap={5}>
                            <p className="username">{user.name}</p>
                            <p className="flat-id">· {membership.door}</p>
                        </Row>
                        <Row>
                            <p className="light">{role(membership.role)}</p>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Form className="form">
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control
                                as="textarea"
                                rows={12}
                                placeholder="¿Qué ocurre?"
                                className="text-input"
                                value={postText}
                                onChange={(val) => this.setState({ postText: val.target.value })}
                            />
                        </Form.Group>
                    </Form>
                </Row>
                <div className="createPostFooter">
                    {type === "ISSUE" && (
                        <Row className="footer-option" justifyContent="space-between">
                            <Row>
                                <span> Prioridad </span>
                            </Row>
                            <Row gap={20} alignItems="center" justifyContent="flex-end">
                                <Icon
                                    icon="lowPriorityFilterIcon"
                                    className={classNames("inline-incidence-icon-right", priority == 0 && "priority-selected")}
                                    onClick={() => this.setState({ priority: 0 })}
                                />
                                <Icon
                                    icon="mediumPriorityFilterIcon"
                                    className={classNames("inline-incidence-icon-right", priority == 5 && "priority-selected")}
                                    onClick={() => this.setState({ priority: 5 })}
                                />
                                <Icon
                                    icon="highPriorityFilterIcon"
                                    className={classNames("inline-incidence-icon-right", priority === 10 && "priority-selected")}
                                    onClick={() => this.setState({ priority: 10 })}
                                />
                            </Row>
                        </Row>
                    )}
                    <div className="footer-option">
                        <div style={{ display: "contents" }} onClick={() => undefined} role="button">
                            <Icon icon="worldIcon" />
                            <span> Público </span>
                        </div>
                    </div>
                    <Row className="footer-option" justifyContent="space-between">
                        <Row alignItems="center" gap={10}>
                            <Icon icon="cameraIcon" size="xs" onClick={() => undefined} />
                            {type === "PUBLICATION" && <Icon icon="pollIcon" size="xs" onClick={() => undefined} />}
                        </Row>
                        <Button
                            appearence="secondary"
                            size="sm"
                            disabled={postText === ""}
                            loading={loading}
                            onClick={() => this.createPost()}
                        >
                            Publicar
                        </Button>
                    </Row>
                </div>
            </div>
        );
    }
}

export default connect((state: RootState) => {
    const { community, membership } = selectCommunity(state.community);
    return {
        user: state.user.info,
        membership: membership,
        communityId: community.id,
        loading: state.post.loading,
    };
})(withRouter(CreatePostOrIssue));
