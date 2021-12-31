import React, { Component } from "react";
import Icon from "../../../component/atom/Icon/Icon";
import "../Auth.scss";
import { RouteComponentProps, withRouter } from "react-router-dom";
import { RootState } from "../../../store";
import { MainRouterPage } from "../../../router/MainRouter";
import Auth from "../Auth";
import { Col } from "../../../component/atom/Col/Col";
import ImageUpload from "../../../component/atom/ImageUpload/ImageUpload";
import { Image } from "../../../component/atom/Image/Image";
import { connect } from "react-redux";
import Button from "../../../component/atom/Button/Button";
import { UserService } from "../../../services/api/services/user.service";
import { FileService } from "../../../services/api/services/file.service";
import { AppService } from "../../../services/api/services/app.service";
import { toast } from "react-hot-toast";

interface Props extends RouteComponentProps {
    loading: boolean;
}

interface state {
    email: string;
    birthday: string;
    img: File | null;
}

class RegisterInfoPage extends Component<Props, state> {
    constructor(Props) {
        super(Props);
        this.state = {
            email: "",
            birthday: "",
            img: null,
        };
    }

    componentDidMount() {
        toast("Recomendamos omitir esta parte para no distraeros :)", { duration: 3000 });
    }

    getInitialState() {
        return {
            code: "",
        };
    }

    async submit(e) {
        e.preventDefault();

        const { email, img, birthday } = this.state;
        let picture: string;

        if (img) {
            picture = await FileService.updateFile(img);
            if (!picture) return;
        }
        if (birthday || picture) {
            const success = await UserService.update({ birthday: birthday !== "" ? birthday : undefined, picture });
            if (!success) return;
        }
        if (!email) await this.omit();
        else {
            const success = await UserService.updateEmailStart(email);
            if (!success) return;
            this.props.history.replace(MainRouterPage.REGISTERCODE);
        }
    }

    async omit() {
        AppService.setLoadingTimeout();
        await AppService.refresh();
        this.props.history.replace(MainRouterPage.HOME);
    }

    updateEmail(evt) {
        this.setState({ email: evt.target.value });
    }

    updateBirthday(evt) {
        this.setState({ birthday: evt.target.value });
    }

    render(): JSX.Element {
        const { img } = this.state;
        const { loading } = this.props;

        return (
            <Auth>
                <h4>Si quieres puedes decirnos algo más sobre ti</h4>
                <form id="info" onSubmit={(e) => this.submit(e)}>
                    <Col gap={20}>
                        <ImageUpload onNewImageSelected={(val) => this.setState({ img: val })} showUploadIcon={false}>
                            {img ? <Image src={URL.createObjectURL(img)} /> : <Icon icon="camera" size="lg" className={"add-photo-icon"} />}
                        </ImageUpload>
                        <Col gap={5}>
                            <label>Correo electrónico</label>
                            <input type="text" name="email" placeholder="Tu correo electrónico" onChange={(evt) => this.updateEmail(evt)} />
                            <label>
                                <h5>Tendrás que verificarlo antes de acabar</h5>
                            </label>
                        </Col>
                        <Col gap={5}>
                            <label>Fecha de nacimiento</label>
                            <input type="date" name="nacimiento" onChange={(evt) => this.updateBirthday(evt)} />
                        </Col>

                        <Button type="submit" loading={loading}>
                            SIGUIENTE
                        </Button>
                    </Col>
                </form>
                <h5 onClick={() => this.omit()} role="button">
                    Omitir
                </h5>
            </Auth>
        );
    }
}

export default connect((state: RootState) => ({
    loading: state.auth.loading || state.file.loading,
}))(withRouter(RegisterInfoPage));
