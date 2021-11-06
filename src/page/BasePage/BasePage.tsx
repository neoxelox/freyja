import { ReactNode } from "react";
import { Col, Row } from "react-bootstrap";
import Footer from "../../component/molecule/Footer/Footer";
import LeftMenu from "../../component/molecule/LeftMenu/LeftMenu";
import "./BasePage.scss";

interface Props {
    children: ReactNode;
}

export default function BasePage(props: Props): JSX.Element {
    const { children } = props;
    return (
        <div className="base-page">
            <Row>
                <LeftMenu />
                <Col className="page-content">{children}</Col>
                <Col className="left-menu" />
            </Row>
            <Footer />
        </div>
    );
}
