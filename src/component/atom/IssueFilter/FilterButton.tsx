import React, { Component } from "react";
import { isPriorityFilter, isStateFilter, IssueFilter } from "../../../store/PostStore";
import { showModal } from "../Modal/modal-store";
import FilterModal from "../../molecule/FilterModal/FilterModal";
import Icon from "../Icon/Icon";
import Button from "../Button/Button";
import { StateBullet } from "../../molecule/FilterModal/StateFilters/StateFilters";
import { PostDto } from "../../../services/model/post.dto";
import { connect } from "react-redux";
import { RootState } from "../../../store";
import { Row } from "../Row/Row";

interface Props {
    filter: IssueFilter;
}

class FilterButton extends Component<Props> {
    icon(filter: IssueFilter): React.ReactElement {
        if (isStateFilter(filter)) return <StateBullet state={filter as PostDto["state"]} />;
        else if (isPriorityFilter(filter)) {
            const iconKey = () => {
                if (filter < 5) return "lowPriorityFilterIcon";
                else if (filter < 10) return "mediumPriorityFilterIcon";
                else return "highPriorityFilterIcon";
            };
            return <Icon icon={iconKey()} />;
        } else return <Icon icon="filterIcon" />;
    }

    text(filter: IssueFilter): string {
        if (isStateFilter(filter)) return "Estado";
        else if (isPriorityFilter(filter)) return "Prioridad";
        else return "Filtrar";
    }

    render(): JSX.Element {
        const { filter } = this.props;

        return (
            <Button
                className="filter-btn"
                onClick={() => showModal(<FilterModal />, { modalName: "filter_modal" })}
                appearence="tertiary"
                size="sm"
            >
                <Row gap={8} alignItems="center" justifyContent="center">
                    {this.icon(filter)}
                    {this.text(filter)}
                </Row>
            </Button>
        );
    }
}

export default connect((state: RootState) => ({
    filter: state.post.filter,
}))(FilterButton);
