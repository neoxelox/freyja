import { PostDto } from "../services/model/post.dto";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type IssueFilter = PostDto["state"] | PostDto["priority"] | undefined;
export type IssueOrder = "date-asc" | "date-desc" | "priority-asc" | "priority-desc" | undefined;

interface PostState {
    posts: PostDto[];
    filter: IssueFilter;
    order: IssueOrder;
    loading: boolean;
}

const initialState: PostState = {
    posts: [],
    filter: undefined,
    order: undefined,
    loading: false,
};

const PostSlice = createSlice({
    name: "post",
    initialState,
    reducers: {
        setPosts: (state, { payload }: PayloadAction<PostDto[]>) => {
            state.posts = payload;
            return state;
        },
        setPost: (state, { payload }: PayloadAction<PostDto>) => {
            state.posts = state.posts.map((post) => (post.id === payload.id ? payload : post));
            return state;
        },
        setFilter: (state, { payload }: PayloadAction<IssueFilter>) => {
            state.filter = payload;
            return state;
        },
        setOrder: (state, { payload }: PayloadAction<IssueOrder>) => {
            state.order = payload;
            return state;
        },
        setLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loading = payload;
            return state;
        },
    },
});

export function isStateFilter(filter: IssueFilter): boolean {
    switch (filter) {
        case "PENDING":
        case "IN_PROGRESS":
        case "REJECTED":
        case "ACCEPTED":
        case "RESOLVED":
            return true;
        default:
            return false;
    }
}

export function isPriorityFilter(filter: IssueFilter): boolean {
    return typeof filter === "number";
}

function compareOrderAsc(a: PostDto, b: PostDto): number {
    if (a.created_at > b.created_at) return 1;
    else if (a.created_at < b.created_at) return -1;
    else return 0;
}

function compareOrderDesc(a: PostDto, b: PostDto): number {
    return compareOrderAsc(b, a);
}

function comparePriorityAsc(a: PostDto, b: PostDto): number {
    if (a.priority > b.priority) return 1;
    else if (a.priority < b.priority) return -1;
    else return 0;
}

function comparePriorityDesc(a: PostDto, b: PostDto): number {
    return comparePriorityAsc(b, a);
}

function getCompareFunction(order: IssueOrder): (a: PostDto, b: PostDto) => number | undefined {
    switch (order) {
        case "date-asc":
            return compareOrderAsc;
        case "date-desc":
            return compareOrderDesc;
        case "priority-asc":
            return comparePriorityAsc;
        case "priority-desc":
            return comparePriorityDesc;
        default:
            return undefined;
    }
}

function filterByPriority(post: PostDto, priorityFilter: number): boolean {
    if (priorityFilter === 0) return post.priority < 5;
    else if (priorityFilter === 5) return post.priority >= 5 && post.priority < 10;
    else {
        return post.priority >= 10;
    }
}

function orderIssues(issues: PostDto[], order: IssueOrder): PostDto[] {
    const compareFunction = getCompareFunction(order);
    return compareFunction ? issues.sort((a, b) => compareFunction(a, b)) : issues;
}

export const selectIssues = (state: PostState) => {
    const { posts, filter, order } = state;

    const stateFilter = isStateFilter(filter) ? filter : undefined;
    const priorityFilter = isPriorityFilter(filter) ? filter : undefined;

    const issues = posts.filter(
        (post) =>
            post.type === "ISSUE" &&
            (filter === undefined ||
                (stateFilter && post.state === stateFilter) ||
                (priorityFilter !== undefined && filterByPriority(post, priorityFilter as number))),
    );
    return orderIssues(issues, order);
};

export const PostAction = PostSlice.actions;
export default PostSlice.reducer;
