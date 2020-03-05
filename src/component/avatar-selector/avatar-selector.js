import React from 'react';
import PropTypes from 'prop-types';
import { Grid, List } from 'antd-mobile';

class AvatarSelector extends React.Component {
    static propTypes = {
        selectAvatar: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        const avatarList = 'girl,boy,woman,emotional,female,angry,nerd,red,blonde,asian,old,handsome,strict,leifeng,glass'
                            .split(',')
                            .map(v => ({
                                icon: require(`../img/${v}.png`),
                                text: v
                            }));
        const gridHeader = this.state.text ? 
                    (<div>
                        <span>Selected Img</span>
                        <img style={{width:20}} src={this.state.icon} alt="" />
                    </div>) : 'Please select img';
        return (
            <div>
                <List renderHeader={()=>gridHeader}>
                    <Grid 
                        data={avatarList}
                        columnNum={5} 
                        onClick={el => {
                            this.setState(el)
                            this.props.selectAvatar(el.text)
                        }} />
                </List>
                
            </div>
        )
    };
}

export default AvatarSelector;