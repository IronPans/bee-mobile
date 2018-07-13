import * as React from 'react';
import * as classNames from 'classnames';
import Chip from './Chip';
import {ChipGroupProps, ChipGroupState} from './PropsType';

export default class ChipGroup extends React.PureComponent<ChipGroupProps, ChipGroupState> {
    state: ChipGroupState = {
        data: [],
        value: '',
        focus: false,
    };
    input: any;

    constructor(props: ChipGroupProps) {
        super(props);
        let data: any = [];
        if (Array.isArray(props.data!)) {
            data = props.data!;
        }
        this.state = {
            data,
        };
    }

    componentWillReceiveProps(nextProps: ChipGroupProps) {
        if ('data' in nextProps) {
            const {data} = this.props;
            this.setState({
                data: data!,
            });
        }
    }

    handleDelete = (data: any) => {
        const chipData = [...this.state.data!];
        const chipToDelete = chipData.indexOf(data);
        chipData.splice(chipToDelete, 1);
        this.setState({
            data: chipData,
        });
        if (this.props.onDelete) {
            this.props.onDelete({
                label: data.label!,
                value: data.value!,
            });
        }
    }

    handleClick = (data: any) => {
        if (this.props.onClick) {
            this.props.onClick({
                label: data.label!,
                value: data.value!,
            });
        }
    }

    handleFocus = () => {
        this.setState({
            focus: !this.state.focus!,
        });
    }

    handleChange = (event: any) => {
        const target: any = event.target;
        const value = target.value;
        this.setState({value});
    }

    handleKeyUp = (event: any) => {
        if (event.keyCode === 13) {
            const target: any = event.target;
            let value = target.value;
            const data = [...this.state.data!];
            data.push({
                label: value,
                value: value,
            });
            value = '';
            this.setState({value, data});
        }
    }

    render() {
        const {className, placeholder} = this.props;
        const styleClass = classNames(
            'ChipGroup',
            {
                'Chip-input': !!placeholder,
                'Chip-focus': this.state.focus,
            },
            className,
        );
        const chipData = this.state.data;
        return (
            <div className={styleClass}>
                {
                    chipData.map((node, index) => {
                        return (<Chip
                            key={index}
                            {...node}
                            onDelete={this.handleDelete.bind(this, node)}
                            onClick={this.handleClick.bind(this, node)}
                        />);
                    })
                }
                {placeholder ?
                    (<input
                        value={this.state.value}
                        ref={node => this.input = node}
                        spellCheck={false}
                        type="text"
                        placeholder={placeholder}
                        onKeyUp={this.handleKeyUp}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                    />) : null}
            </div>
        );
    }
}
