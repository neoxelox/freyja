import { Component } from "react";
import BasePage from "../BasePage/BasePage";
import FloatingButton from "../../component/atom/FloatingButton/FloatingButton";

export default class DashboardPage extends Component {
    render(): JSX.Element {
        return (
            <BasePage>
                <FloatingButton />
            </BasePage>
        );
    }
}
