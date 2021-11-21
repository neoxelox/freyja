import React, { Component } from "react";

export interface InfiniteScrollProps {
    callbackOnMount?: boolean;
    callback: () => Promise<any> | any;
    onLoading?: () => any;
}

interface InfiniteScrollState {
    mounted: boolean;
    prevY: number;
}

export class InfiniteScroll extends Component<InfiniteScrollProps, InfiniteScrollState> {
    constructor(props: InfiniteScrollProps) {
        super(props);
        this.loadingRef = React.createRef();
    }

    state: InfiniteScrollState = {
        mounted: false,
        prevY: 0,
    };

    observer = new IntersectionObserver(() => undefined);
    loadingRef: React.RefObject<HTMLDivElement> | null = null;

    componentDidMount(): void {
        this.setState({ mounted: true });
        if (this.props.callbackOnMount === undefined || this.props.callbackOnMount) this.props.callback();

        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 1.0,
        };

        this.observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => this.handleObserver(entries), options);
        if (this.loadingRef?.current) this.observer.observe(this.loadingRef.current);
    }

    componentWillUnmount(): void {
        this.setState({ mounted: false });
    }

    async handleObserver(entries: IntersectionObserverEntry[]): Promise<void> {
        if (this.state.mounted) {
            const y = entries[0].boundingClientRect.y;
            if (this.state.prevY > y) {
                await this.props.callback();
            }
            this.setState({ prevY: y });
        }
    }

    render(): JSX.Element {
        const { children } = this.props;

        return (
            <>
                {children}
                <div ref={this.loadingRef} />
            </>
        );
    }
}
