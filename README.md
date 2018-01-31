# react-native-toast
react native app 的toast 组件

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
 
 
1.import Toast from '路径'

2.<Toast ref={(ref) => {this.toast = ref }} /> 

3.this.toast.show({text:"显示的内容")})
