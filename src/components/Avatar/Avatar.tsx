import * as React from 'react';
import * as classNames from 'classnames';
import {getOtherProperties} from '../common/Utils';
import {AvatarProps, AvatarState} from './PropsType';

export default class Avatar extends React.PureComponent<AvatarProps, AvatarState> {
    static defaultProps: AvatarProps = {
        prefixCls: 'bm-Avatar',
    };

    render() {
        const { height, src: srcProps, alt, lazyLoad, className,
            children, shape, title, prefixCls, width, ...other } = this.props;
        const styleClass = classNames(
            prefixCls,
            className,
            {
                [`${prefixCls}-circle`]: shape === 'circle',
            },
        );
        const otherProps = getOtherProperties(other, ['']);
        const src = lazyLoad ? this.state.src! : srcProps;
        const styles = {
            width,
            height,
        };
        return (
            <div className={styleClass} {...otherProps}>
                {src ? <img style={styles} src={src} alt={alt} title={title}/> : children}
            </div>
        );
    }
}
