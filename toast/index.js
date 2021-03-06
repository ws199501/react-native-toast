/**
 * @desc 提醒框
 * @author ws
 * @date 2017-12-06
 * 1. text,
 * 2. position: one of 'center', 'top', 'bottom' 默认 center
 * 3. type: one of  'success' , 'error' , 'warning' 默认 success
 * 4. duration: 动画持续时间 默认 400 单位毫秒
 * 5. keeping: 提示存在时间 默认 2000 单位毫秒
 * 6. backgroundColor: '#666', 背景颜色，
 * 7. opacity: 0.7, 背景透明度
 * 8. fontColor: '#fff', 自体颜色
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
  Text,
  View,
  Modal,
  Image,
  Dimensions,
  Animated,
  Easing,
  TouchableOpacity
} from 'react-native'
import styles from './style'

const Window = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

export default class Toast extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '无内容',
      position: this.props.position,
      type: this.props.type,
      opacity: new Animated.Value(0),
      visible: false,
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
    clearTimeout(this.beLater)
  }

  // 恢复隐藏
  hide() {
    //渐出动画
    Animated.timing(
      this.state.opacity,
      {
        toValue: 0,
        duration: this.props.duration,
        easing: Easing.linear,
      }
    ).start()
    //等待动画结束再关闭moadl
    clearTimeout(this.timer)
    this.timer = setTimeout(() => {
      this.setState({
        visible: false,
      })
    }, this.props.duration)
  }

  //出现在视野中
  show(data) {
    let obj = {}
    this.setState({
      visible: true,
      text: data.text,                                                 //内容
      type: data.type ? data.type : this.props.type ,                  //种类
    },() => {
      Animated.timing(
        this.state.opacity,
        {
          toValue: 1,
          duration: this.props.duration,
          easing: Easing.linear,
        }
      ).start()
    })
    clearTimeout(this.timer)
    this.timer = setTimeout(() => this.hide(), this.props.keeping)
  }

  render() {
    const { text, type, position, opacity, visible } = this.state
    // 选择图标
    let icon = ''
    let contentStyle
    if(type == 'error') {
      icon= require('./close-circle.png')
    }else if (type == 'warning') {
      icon= require('./alert-circle.png')
      iconColor= '#eeff33'
    }else if(type == 'success') {
      icon= require('./check-circle.png')
      iconColor= '#009900'
    }
    if(this.props.position === 'bottom') {
      contentStyle = [styles.content, {bottom: 20}]
    }else if (this.props.position === 'top') {
      contentStyle = [styles.content, {top: 40}]
    }else {
      contentStyle = styles.content
    }

    return (
      <Modal
        animationType="none"
        transparent={ true }
        onRequestClose={ () => this.close() }
        visible={visible}
      >
        <Animated.View style={[styles.box, {opacity: opacity}]}>
          <View style={ contentStyle }>
            <View style={ [styles.opacityBox,{backgroundColor: this.props.backgroundColor, opacity: this.props.opacity}] }/>
            <Image source={icon} style={styles.icon}/>
            <Text style={ [styles.text,{color: this.props.fontColor}] }>{text}</Text>
          </View>
        </Animated.View>
      </Modal>
    )
  }
}

Toast.propTypes = {
  position: PropTypes.oneOf(['center', 'bottom','top']),
  keeping: PropTypes.number,
  duration: PropTypes.number,
  type: PropTypes.oneOf(['success', 'error','warning']),
  backgroundColor: PropTypes.string,
  opacity: PropTypes.number,
  fontColor: PropTypes.string,
}

Toast.defaultProps = {
  keeping: 2000,
  position: 'center',
  type: 'success',
  duration: 400,
  backgroundColor: '#666',
  opacity: 0.7,
  fontColor: '#fff',
}
