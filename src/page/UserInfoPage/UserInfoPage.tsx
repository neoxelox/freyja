import { Component } from "react";
import BasePage from "../BasePage/BasePage";
import "./UserInfoPage.scss";
import CreatePostOrIssue from "../../component/molecule/CreatePostOrIssue/CreatePostOrIssue";
import RoleBadge from "../../component/atom/RoleBadge/RoleBadge";
import { Row } from "../../component/atom/Row/Row";
import { Col } from "../../component/atom/Col/Col";
import Icon from "../../component/atom/Icon/Icon";
import { RouteComponentProps, withRouter } from "react-router-dom";
import ImageUpload from "../../component/atom/ImageUpload/ImageUpload";
import { Image } from "../../component/atom/Image/Image";

interface Props extends RouteComponentProps {
    loading: boolean;
}

interface state {
    name: string;
    phone: string;
    email: string;
    birthday: string;
    img: File | null;
}

export default class UserInfoPage extends Component<Props, state> {
    constructor(Props) {
        super(Props);
        this.state = {
            name: "",
            phone: "",
            email: "",
            birthday: "",
            img: null,
        };
    }

    updateName(evt) {
        this.setState({ name: evt.target.value });
    }
    async submitName(e) {
        e.preventDefault();
    }

    updatePhone(evt) {
        this.setState({ phone: evt.target.value });
    }
    async submitPhone(e) {
        e.preventDefault();
    }

    updateEmail(evt) {
        this.setState({ email: evt.target.value });
    }
    async submitEmail(e) {
        e.preventDefault();
    }

    updateBirthday(evt) {
        this.setState({ email: evt.target.value });
    }
    async submitBirthday(e) {
        e.preventDefault();
    }

    render(): JSX.Element {
        const { img } = this.state;
        const { loading } = this.props;

        return (
            <BasePage>
                <Row gap={10} alignItems="center" justifyContent="center">
                    <ImageUpload onNewImageSelected={(val) => this.setState({ img: val })} showUploadIcon={true}>
                        {img ? (
                            <Image src={URL.createObjectURL(img)} className="settings-profile-image" />
                        ) : (
                            <Image
                                src="https://esporters.today/__export/1596476953368/sites/gammers/img/2020/08/03/willyrex.jpg_1745358785.jpg"
                                className="settings-profile-image"
                            />
                        )}
                    </ImageUpload>
                </Row>
                <Row gap={10} alignItems="center" justifyContent="center" className="username">
                    Willirex
                </Row>
                <Row gap={10} alignItems="center" style={{ textAlign: "center" }} justifyContent="center">
                    Cambiar foto de perfil
                </Row>
                <div className="user-info">
                    <form id="updateName" onSubmit={(e) => this.submitName(e)}>
                        <Row gap={10} alignItems="center" justifyContent="left">
                            <b>Nombre</b>
                        </Row>
                        <Row gap={10} alignItems="center" justifyContent="left">
                            Guillermo Díaz Willy
                        </Row>
                    </form>
                </div>
                <div className="user-info">
                    <form id="updatePhone" onSubmit={(e) => this.submitPhone(e)}>
                        <Row gap={10} alignItems="center" justifyContent="space-between">
                            <b>Teléfono</b>
                            Guardar
                        </Row>
                        <Row gap={10} alignItems="center" justifyContent="left">
                            <input type="text" name="name" value="+34 666 12 31 23" onChange={(evt) => this.updatePhone(evt)} />
                        </Row>
                    </form>
                </div>
                <div className="user-info">
                    <form id="updateEmail" onSubmit={(e) => this.submitEmail(e)}>
                        <Row gap={10} alignItems="center" justifyContent="space-between">
                            <b>Correo electrónico</b>
                            Guardar
                        </Row>
                        <Row gap={10} alignItems="center" justifyContent="left">
                            <input type="text" name="name" value="willyrex@gmail.com" onChange={(evt) => this.updateEmail(evt)} />
                        </Row>
                    </form>
                </div>
                <div className="user-info">
                    <form id="updateBirthday" onSubmit={(e) => this.submitBirthday(e)}>
                        <Row gap={10} alignItems="center" justifyContent="space-between">
                            <b>Fecha de nacimiento</b>
                            Guardar
                        </Row>
                        <Row gap={10} alignItems="center" justifyContent="left">
                            <input type="date" name="nacimiento" value="1993-05-09" onChange={(evt) => this.updateBirthday(evt)} />
                        </Row>
                    </form>
                </div>
            </BasePage>
        );
    }
}
