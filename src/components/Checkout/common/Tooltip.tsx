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

class Tooltip extends PureComponent<IProps, IState> {
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
      this.refs.container.measureInWindow((x, y, containerWidth) => {
        this.setState({ x: containerWidth / 2, y: y, tooltipExtended: !tooltipExtended })
      })
    } 
    else {
      this.setState({tooltipExtended: !tooltipExtended})
    }
  }

  getRenderTooltip = () => {
    const { toolTipText } = this.props
    const { tooltipExtended, x, y } = this.state
    const { tooltipStyle, upTriangleContainer, upTriangle } = styles;
    let renderTooltip = null;

    if (tooltipExtended) {
      renderTooltip = (
        <View style={{ top: 5, left: x - 200/2, position: "absolute" }}>
          <View style={upTriangleContainer}>
          <View style={upTriangle}/>
          </View>
          <View style={tooltipStyle}>
            <StylizedText>{toolTipText}</StylizedText>
          </View>
        </View>
      )
    }
    return renderTooltip;
  }

  render() {
    const { toolTipLink } = this.props
    const { } = styles;

    const tooltip = this.getRenderTooltip();

    return (
      <View>
        <TouchableOpacity onPress={this.toggleTooltipHandler}  ref={'container'}>
          {toolTipLink}
        </TouchableOpacity>
        {tooltip}
      </View>
    );
  }
};

export default Tooltip;
