import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./ProfileLink.scss";
import { RootState } from "../../../../store";
import { Image } from "../../../atom/Image/Image";

interface Props {
    profileImg: string;
}

class ProfileLink extends Component<Props> {
    render(): JSX.Element {
        const { profileImg } = this.props;

        return (
            <Link to="/settings">
                <Image src={profileImg} className="profile-link" />
            </Link>
        );
    }
}

export default connect((state: RootState) => ({
    profileImg: state.user.info?.picture,
}))(ProfileLink);
