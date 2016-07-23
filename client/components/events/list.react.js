import React from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import {grey400, darkBlack, lightBlack} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';

const list = React.createClass({

    _handleClick: function() {
        
    },

    render: function() {
        return (
            <div>
                
                    <ListItem onClick={this._handleClick}
                      leftAvatar={<Avatar src="images/ok-128.jpg" />}
                      primaryText={this.props.name}
                      secondaryText={
                        <p>
                          <span style={{color: darkBlack}}>{this.props.date}</span> --
                          {this.props.done}
                        </p>
                      }
                      secondaryTextLines={2}
                    />
                    <Divider inset={true} />
              
            </div>
        )
    }
});

export default list;