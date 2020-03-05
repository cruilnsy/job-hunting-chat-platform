import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Button, InputItem, NavBar, TextareaItem } from 'antd-mobile';

import AvatarSelector from '../../component/avatar-selector/avatar-selector';
import { update } from '../../redux/user.redux';

@connect(
    state => state.user,
    {update}
)
class GeniusInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: ''
        }
    }

    onChange(key, val) {
        this.setState({
            [key]: val
        })
    }

    render() {
        const path = this.props.location.pathname;
        const redirect = this.props.redirectTo;
        return (
            <div>
                { redirect && redirect !== path ? <Redirect to={this.props.redirectTo}></Redirect>: null}
                <NavBar mode="dark">Genius Information</NavBar>
                <AvatarSelector
                    selectAvatar={ imgName => {
                        this.setState({
                            avatar: imgName
                        })
                    }}
                ></AvatarSelector>
                <InputItem onChange={(v) => this.onChange('title', v)}>
                    Position
                </InputItem>
                <TextareaItem 
                    rows={3}
                    title='Self Intro'
                    autoHeight
                    onChange={(v) => this.onChange('desc', v)}>
                </TextareaItem>
                <Button 
                    type='primary'
                    onClick={() => {
                        this.props.update(this.state)
                    }}
                >Save</Button>
            </div>
        )
    }
}

export default GeniusInfo;