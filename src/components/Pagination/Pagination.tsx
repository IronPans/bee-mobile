import * as React from 'react';
import * as classNames from 'classnames';
import PaginationItem from './PaginationItem';
import {getOtherProperties} from '../common/Utils';
import {PaginationProps, PaginationState} from './PropsType';

export default class Pagination extends React.PureComponent<PaginationProps, PaginationState> {
    static defaultProps = {
        maxPage: 5,
        prefixCls: 'bm-Pagination',
        pageSize: 10,
        value: 1,
    };
    state: PaginationState = {
        pages: [],
        value: 1,
    };
    isFirstPage: boolean = false;
    isLastPage: boolean = false;
    startEllipsis: boolean = false;
    endEllipsis: boolean = false;
    start: number;
    end: number;
    pageOffset: number = 0;
    pageCount: number;
    totalRecord: number;

    componentDidMount() {
        const {maxPage, pageSize, total, value}: any = this.props;
        if (value >= 1) {
            this.setState({
                value: value,
            }, () => {
                this.totalRecord = total;
                this.pageCount = Math.ceil(total / pageSize);
                this.countPage(maxPage);
                this.checkStartOrEnd(this.state.value);
                this.changePage(this.state.value!);
            });
        }
    }

    componentWillReceiveProps(nextProps: PaginationProps) {
        if ('total' in nextProps && this.props.total! !== nextProps.total) {
            const {maxPage, pageSize, total}: any = nextProps;
            this.totalRecord = nextProps.total!;
            this.pageCount = Math.ceil(total / pageSize);
            this.countPage(maxPage);
            this.checkStartOrEnd(this.state.value);
        }
        if ('value' in nextProps && this.props.value! !== nextProps.value) {
            let value: number = nextProps.value!;
            if (value < 0) {
                value = 1;
            } else if (value > this.pageCount) {
                value = this.pageCount;
            }
            this.setState({
                value: value,
            });
        }
    }

    countPage(end: number, start: number = 0) {
        const pages: any = [];
        const min = Math.min(end, this.pageCount);
        for (let i = start; i < min; i++) {
            pages.push(i + 1);
        }
        this.setState({
            pages,
        });
    }

    changePage = (index?: any) => {
        const {maxPage}: any = this.props;
        const middle = Math.ceil(maxPage / 2);
        if (index <= 1) {
            index = 1;
        } else if (index >= this.getPage()) {
            index = this.getPage();
        }
        this.start = index - middle;
        this.end = Math.min((index + maxPage - middle), this.pageCount);
        if (index < maxPage) {
            this.end = maxPage;
        }
        if (this.end - this.start <= maxPage) {
            this.start = this.end - maxPage;
        }
        if (this.start <= 0 || index < maxPage) {
            this.start = 0;
        }
        this.countPage(this.end, this.start);
        this.checkStartOrEnd(index);
        this.setState({
            value: index,
        });
        if (this.props.onPageChange) {
            this.props.onPageChange({
                value: this.state.value,
            });
        }
    }

    checkStartOrEnd(index: number) {
        const {maxPage}: any = this.props;
        this.isFirstPage = false;
        this.isLastPage = false;
        this.startEllipsis = false;
        this.endEllipsis = false;
        if (index === 1) {
            this.isFirstPage = true;
        }
        if (index === this.pageCount) {
            this.isLastPage = true;
        }
        if (maxPage < this.pageCount && !this.isLastPage && this.end !== this.pageCount) {
            this.endEllipsis = true;
        }
        if (maxPage < this.pageCount && !this.isFirstPage && index >= maxPage) {
            this.startEllipsis = true;
        }
    }

    getPage() {
        return Math.max(this.props.maxPage!, this.pageCount);
    }

    render() {
        const {className, maxPage, prefixCls, shape, ...other}: any = this.props;
        const styleClass = classNames(
            prefixCls, {
                [`${prefixCls}-circle`]: shape === 'circle',
            },
            className,
        );
        const {pages, value} = this.state;
        const prev = value - 1,
            next = value + 1;
        const otherProps = getOtherProperties(other, ['pageSize']);
        return (
            <div className={styleClass} {...otherProps}>
                <ul>
                    <PaginationItem
                        disabled={this.isFirstPage}
                        onClick={this.changePage.bind(this, prev)}
                        component={<span className={`${prefixCls}-backward`}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
    <path d="M30.83 32.67l-9.17-9.17 9.17-9.17L28 11.5l-12 12 12 12z"/>
    <path d="M0-.5h48v48H0z" fill="none"/>
</svg>
                                    </span>}
                    />
                    { this.startEllipsis ?
                        <PaginationItem
                            onClick={this.changePage.bind(this, 1)}
                            index={1}
                            component={<span className={`${prefixCls}-number`}>
                                    1
                                </span>}
                        /> : null }
                    { this.startEllipsis ? <PaginationItem
                        disabled={true}
                        index={1}
                        component={<span
                            className={`${prefixCls}-number ${prefixCls}-ellipsis`}
                        />}
                    /> : null }
                    {
                        (pages as Array<number>).map((page) => {
                            return (
                                <PaginationItem
                                    key={page}
                                    active={page === this.state.value}
                                    index={page}
                                    onClick={this.changePage.bind(this, page)}
                                    component={<span className={`${prefixCls}-number`}>
                                    {page}
                                </span>}
                                />
                            );
                        })
                    }
                    {this.endEllipsis ?
                        <PaginationItem
                            disabled={true}
                            component={<span
                                className={`${prefixCls}-number ${prefixCls}-ellipsis`}
                            />}
                        /> : null}
                    {(this.pageCount > maxPage && !this.isLastPage && this.endEllipsis) ?
                        <PaginationItem
                            onClick={this.changePage}
                            index={this.pageCount}
                            component={<span
                                className={`${prefixCls}-number`}
                            >
                                            {this.pageCount}
                            </span>}
                        /> : null}
                    <PaginationItem
                        disabled={this.isLastPage}
                        onClick={this.changePage.bind(this, next)}
                        component={<span className={`${prefixCls}-forward`}>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="48"
                                            height="48"
                                            viewBox="0 0 48 48"
                                        >
    <path d="M17.17 32.92l9.17-9.17-9.17-9.17L20 11.75l12 12-12 12z"/>
    <path d="M0-.25h48v48H0z" fill="none"/>
                                        </svg>
                                    </span>}
                    />
                </ul>
            </div>
        );
    }
}
