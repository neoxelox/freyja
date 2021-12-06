import React, { Component } from "react";
import "./PostReply.scss";
import { PostDto } from "../../../services/model/post.dto";
import { Row } from "../../../component/atom/Row/Row";
import { Col } from "../../../component/atom/Col/Col";
import { connect } from "react-redux";
import { RootState } from "../../../store";
import { selectCommunity } from "../../../store/CommunityStore";
import Button from "../../../component/atom/Button/Button";
import { Form } from "react-bootstrap";
import { PostService } from "../../../services/api/services/post.service";

interface Props {
    post: PostDto;
    communityId: string;
    postCreatorName: string;
    onReply: () => any;
}

interface State {
    message: string;
    loading: boolean;
}

class PostReply extends Component<Props, State> {
    state: State = {
        message: "",
        loading: false,
    };

    handleMessageChange(message: string): void {
        if (message.length < 280) this.setState({ message });
    }

    async submitReply(): Promise<void> {
        const { onReply, communityId, post } = this.props;
        const { message } = this.state;
        this.setState({ loading: true });
        await PostService.createPost(communityId, { type: "PUBLICATION", message, thread_id: post.id });
        this.setState({ loading: false, message: "" });
        onReply();
    }

    render(): JSX.Element {
        const { postCreatorName } = this.props;
        const { message, loading } = this.state;

        return (
            <Row className="post-reply">
                <Col flex={5} gap={10}>
                    <h5 className="light">
                        Responde a <b>{postCreatorName}...</b>
                    </h5>
                    <Form.Control
                        as="textarea"
                        rows={12}
                        placeholder="Escribe tu respuesta"
                        className="text-input reply-input"
                        value={message}
                        onChange={(val) => this.handleMessageChange(val.target.value)}
                    />
                    <Row justifyContent="flex-end">
                        <Button
                            appearence="secondary"
                            size="sm"
                            disabled={message === ""}
                            loading={loading}
                            onClick={() => this.submitReply()}
                        >
                            Responder
                        </Button>
                    </Row>
                </Col>
            </Row>
        );
    }
}

export default connect((state: RootState) => {
    const community = selectCommunity(state.community);
    return {
        communityId: community?.community?.id,
    };
})(PostReply);
