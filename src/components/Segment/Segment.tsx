import * as React from 'react';
import * as classNames from 'classnames';
import {SegmentProps, SegmentState} from './propType';

export default class Segment extends React.PureComponent<SegmentProps, SegmentState> {
    static defaultProps = {
        prefixCls: 'bm-Segment',
        value: [],
    };

    constructor(props: SegmentProps) {
        super(props);
        const {activeIndex = 0} = props;
        this.state = {
            activeIndex,
        };
    }

    componentWillReceiveProps(nextProps: SegmentProps) {
        if ('activeIndex' in nextProps && nextProps.activeIndex! >= 0 &&
            nextProps.activeIndex !== this.props.activeIndex) {
            this.setState({
                activeIndex: nextProps.activeIndex!,
            });
        }
    }

    handleClick = (index: number, item: string) => {
        const {disabled} = this.props;
        if (disabled) {
            return;
        }
        this.setState({
            activeIndex: index,
        });
        if (this.props.onChange) {
            (this.props.onChange as (event: any) => void)({
                index, item,
            });
        }
    }

    render() {
        const {className, disabled, prefixCls, value}: any = this.props;
        const styleClass = classNames(
            prefixCls, className,
        );
        const {activeIndex} = this.state;
        return (
            <div className={styleClass}>
                {
                    value.map((item: string, index: number) => {
                        const itemClass = classNames(
                            `${prefixCls}-item`,
                            {
                                [`${prefixCls}-item-selected`]: activeIndex === index,
                                [`${prefixCls}-item-disabled`]: disabled,
                            },
                        );
                        return (
                            <div key={index} className={itemClass} onClick={this.handleClick.bind(this, index, item)}>
                                {item.toString()}
                            </div>
                        );
                    })
                }
            </div>
        );
    }
}
