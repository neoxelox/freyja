import { store } from "../../../store";
import { IssueFilter, PostAction } from "../../../store/PostStore";
import { IssueOrder as StoreIssueOrder } from "../../../store/PostStore";

export type IssueOrder = "date" | "priority" | undefined;
export type OrderType = "asc" | "desc";

export class PostService {
    static setIssuesOrder(order: IssueOrder, type: OrderType): void {
        if (order) store.dispatch(PostAction.setOrder((order + "-" + type) as StoreIssueOrder));
    }

    static resetIssuesOrder(): void {
        store.dispatch(PostAction.setOrder(undefined));
    }

    static setIssuesFilter(filter: IssueFilter): void {
        store.dispatch(PostAction.setFilter(filter));
    }

    static resetIssuesFilter(): void {
        store.dispatch(PostAction.setFilter(undefined));
    }
}
