/**
 * @desc modal页面的样式
 * @author ws
 * @date 2017-11-17
 **/

import { StyleSheet, PixelRatio, Dimensions} from 'react-native'
//import { Window, Size, Color, Radius } from '../../global'

const Window = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
}

const Size = {
  pixel: 1 / PixelRatio.get(),
}

const Radius = {
  default: 4,
}

const Color = {
  // 主色调
  primary: '#3EC9B6',                  // 绿色
}

const styles = StyleSheet.create({
  box: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  opacityBox: {
    position: 'absolute',
    // backgroundColor: '#999',
    // opacity: 0.7,
    borderRadius: 4,
    width: '100%',
    height: '100%',
  },
  content: {
    position: 'absolute',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 8,
    paddingBottom: 8,
    color: '#000',
  },
  icon: {
    marginLeft: 8
  }
})

export default styles
