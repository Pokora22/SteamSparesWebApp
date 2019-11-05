import React, { Component, Fragment } from "react";
import api from '../../dataStore/stubAPI'

class Game extends Component{
    state = {
        type: "",
        id: this.props.id,
        name: this.props.name,

    }
}