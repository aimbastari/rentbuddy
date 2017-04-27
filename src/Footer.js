import React from 'react';
import {Link} from 'react-router-dom';
import { Segment, Label } from 'semantic-ui-react';


class Footer extends React.Component {
  render() {

    return (
      <Segment secondary textAlign='center' size="mini">
          <Label as='a' color="orange" tag size="mini">RentBuddy-</Label> powered by Propframe technology
      </Segment>  

    )
  }

}


export default Footer;
