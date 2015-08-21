import React, { Component, PropTypes} from 'react';
import classNames from 'classnames';

import './Avatar.scss';

/*
    Displays circular avatar. Applies crossfade when src image is changed.
*/
export default class Avatar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            current: 'first',
            oldSrc: null
        };
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.src !== nextProps.src) {
            this.setState({
                current: this.state.current == 'first' ? 'second' : 'first',
                oldSrc: this.props.src
            });
        }
    }

    render() {
        let { src, size, isSelected, isEnabled, onClick } = this.props;

        let classes = classNames(
            'avatar',
            {'avatar-large' : size == 'large'},
            {'avatar-is-selected': isSelected},
            {'avatar-is-disabled' : !isEnabled}
        );

        let firstStyle = { opacity: this.state.current == 'first' ? 1 : 0 };
        let secondStyle = { opacity: this.state.current == 'second' ? 1 : 0 };
        let firstSource = this.state.current == 'first' ? src : this.state.oldSrc;
        let secondSource = this.state.current == 'second' ? src : this.state.oldSrc;

        return (
            <div className={classes} onClick={isEnabled ? onClick : null}>
                <div className="overlay" />
                <img style={firstStyle} src={firstSource} />
                <img style={secondStyle} src={secondSource} />
            </div>
        );
    }
}

Avatar.propTypes = {
    src: PropTypes.string,
    size: PropTypes.oneOf(['small', 'large']),
    isSelected: PropTypes.bool,
    isEnabled: PropTypes.bool,
    onClick: PropTypes.func
};

Avatar.defaultProps = {
    isSelected: false,
    isEnabled: true,
    size: 'small'
};