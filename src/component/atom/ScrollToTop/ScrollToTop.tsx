import { Component } from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

class ScrollToTopComponent extends Component<RouteComponentProps> {
    componentDidUpdate(prevProps: RouteComponentProps) {
        if (this.props.location.pathname !== prevProps.location.pathname) {
            window.scrollTo(0, 0);
        }
    }

    render() {
        return null;
    }
}

export const ScrollToTop = withRouter(ScrollToTopComponent);
