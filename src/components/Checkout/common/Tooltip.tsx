import React, { PureComponent } from "react";
import { View, Animated, TouchableOpacity, Dimensions } from "react-native";

import styles from "./styles";
import StylizedText from "../../common/StyledText";

interface IProps {
  toolTipLink: any;
  toolTipText: String;
}

interface IState {
  tooltipExtended: boolean;
  x: number;
  y: number;
}

class CheckoutCells extends PureComponent<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      tooltipExtended: false,
      x: 0,
      y: 0,
    }
  }

  toggleTooltipHandler = () => {
    const { tooltipExtended } = this.state;
    if (!tooltipExtended) {
      this.refs.container.measureInWindow((x, y, containerWidth, containerHeight) => {

      })
    } 
    else {
      this.setState({tooltipExtended: !tooltipExtended})
    }
  }

  getRenderTooltip = () => {
    const { toolTipText } = this.props
    const { tooltipExtended, x, y } = this.state
    const { tooltipStyle } = styles;
    let renderTooltip;

    if (tooltipExtended) {
      renderTooltip = (
        <Animated.View style={{ top: y, left: x, position: "absolute" }}>
          <View style={tooltipStyle}>
            <StylizedText>{toolTipText}</StylizedText>
          </View>
        </Animated.View>
      )
    }
    return renderTooltip;
  }

  render() {
    const { toolTipLink } = this.props
    const { } = styles;

    const tooltip = this.getRenderTooltip;

    return (
      <View ref={'container'}>
        <TouchableOpacity onPress={this.toggleTooltipHandler}>
          {toolTipLink}
        </TouchableOpacity>
        {tooltip}
      </View>
    );
  }
};

export default CheckoutCells;
