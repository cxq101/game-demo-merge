/**
 * 设置LayaNative屏幕方向，可设置以下值
 * landscape           横屏
 * portrait            竖屏
 * sensor_landscape    横屏(双方向)
 * sensor_portrait     竖屏(双方向)
 */
window.screenOrientation = "sensor_landscape";

//-----libs-begin-----
loadLib("libs/min/laya.core.min.js")
loadLib("libs/min/laya.ui.min.js")
loadLib("libs/min/laya.d3.min.js")
loadLib("libs/min/gunzip.min.js")
loadLib("libs/min/gzip.min.js")
loadLib("libs/min/jszip.min.js")
loadLib("libs/min/laya.physics3D.min.js")
loadLib("libs/min/protobuf-alibrary.min.js")
loadLib("libs/min/protobuf-bundles.min.js")
//-----libs-end-------
loadLib("js/bundle.js");
