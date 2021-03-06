import React, { Component } from 'react';
import { Slider, InputNumber, Row, Col } from 'antd';

class CounterSlider extends Component {
  state = {
    inputValue: this.props.value
  }

  onChange = (value) => {
    const cleanValue = Number(value) ? value: this.state.inputValue;
    this.setState({
      inputValue: cleanValue,
    });
    this.props.onCountSliderChange(cleanValue);
  }

 render() {
   return (
     <Row>
       <p class="indicator">Minimum Frequency Filter</p>
       <Col span={12}>
         <Slider min={1} max={20} onChange={this.onChange} value={this.state.inputValue} />
       </Col>
       <Col span={4}>
         <InputNumber
           min={1}
           max={20}
           style={{ width: 60 }}
           value={this.state.inputValue}
           onChange={this.onChange}
         />
       </Col>
     </Row>
   );
 }
}

export default CounterSlider;