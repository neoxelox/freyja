import { ReactNode } from "react";
import { Col } from "react-bootstrap";
import Footer from "../../component/molecule/Footer/Footer";
import Header from "../../component/molecule/Header/Header";
import LeftMenu from "../../component/molecule/LeftMenu/LeftMenu";
import "./BasePage.scss";

interface Props {
    children: ReactNode;
}

export default function BasePage(props: Props): JSX.Element {
    const { children } = props;
    return (
        <div className="base-page">
            <LeftMenu />
            <Header />
            <Col className="page-content">{children}</Col>
            <Footer />
        </div>
    );
}
