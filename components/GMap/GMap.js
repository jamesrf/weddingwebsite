/**
 * React Static Boilerplate
 * https://github.com/kriasoft/react-static-boilerplate
 *
 * Copyright © 2015-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';

class GMap extends React.Component {

  render() {
    console.dir(this.props);
    let srcField = "https://www.google.com/maps/embed/v1/place?key=" + 
            this.props.ApiKey + "&q=" + this.props.LocationQuery
            + "&zoom=10";

    return (<iframe width="100%" src={srcField}/>);
  }

}

export default GMap;
