import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';

import AvatarSelector from '../../component/avatar-selector/avatar-selector';
import { update } from '../../redux/user.redux';

@connect(
    state => state.user,
    {update}
)
class BossInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            desc: '',
            company: '',
            money: ''
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
                <NavBar mode="dark">Boss Information</NavBar>
                <AvatarSelector
                    selectAvatar={imgName => {
                        this.setState({
                            avatar: imgName
                        })
                    }}
                ></AvatarSelector>
                <InputItem onChange={(v) => this.onChange('title', v)}>
                    Hiring Pos
                </InputItem>
                <InputItem onChange={(v) => this.onChange('company', v)}>
                    Company name
                </InputItem>
                <InputItem onChange={(v) => this.onChange('salary', v)}>
                    Salary
                </InputItem>
                <TextareaItem 
                    rows={3}
                    title='Position Requirements'
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

export default BossInfo;