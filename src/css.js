const string = `.pikachu * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.pikachu *::before,
.pikachu *::after {
  box-sizing: border-box;
}
.pikachuWrapper{
  width: 100vw;
  height: 100vh;
  background: #ffe600;
}
.pikachu {
  position: absolute;
  width: 420px;
  height: 235px;
  left: 50%;
  top: 50%;
  transform: translateX(-50%) translateY(-50%);
}
.nose {
  border: 11px solid black;
  border-top-width: 9px;
  border-color: black transparent transparent;
  border-bottom: none;
  position: absolute;
  width: 0;
  height: 0;
  left: 50%;
  margin-left: -11px;
  margin-top: 38px;
  box-shadow: 0 -1px 0 black;
}
.nose::before {
  content: "";
  display: block;
  width: 22px;
  height: 5px;
  border: 1px solid black;
  background: #000000;
  position: absolute;
  top: -14px;
  left: -11px;
  border-top-left-radius: 11px 5px;
  border-top-right-radius: 11px 5px;
}
.nose:hover {
  animation-name: swing;
  animation-duration: 0.3s;
  animation-iteration-count: infinite;
}
@keyframes swing {
  from {
    transform: rotate(0deg);
  }
  33%{
    transform: rotate(-5deg);
  }
  67%{
    transform: rotate(5deg);
  }
  to {
    transform: rotate(0deg);
  }
}
.eye {
  border: 3px solid #000000;
  border-radius: 100%;
  width: 63px;
  height: 63px;
  position: absolute;
  left: 50%;
  margin-left: -31px;
  background: #2e2e2e;
}
.eye.left {
  transform: translateX(-119px);
}
.eye.left::before {
  content: "";
  display: block;
  width: 31px;
  height: 31px;
  background: white;
  border: 3px solid black;
  border-radius: 100%;
  margin-top: -2px;
  margin-left: 7px;
}
.eye.right {
  transform: translateX(118px);
}
.eye.right::before {
  content: "";
  display: block;
  width: 31px;
  height: 31px;
  background: white;
  border: 3px solid black;
  border-radius: 100%;
  margin-top: -2px;
  margin-left: 7px;
}
.mouth {
  width: 228px;
  height: 180px;
  position: absolute;
  top: 65px;
  left: 50%;
  margin-left: -114px;
  overflow: hidden;
}
.mouth::before,
.mouth::after{
  content: "";
  display: block;
  box-sizing: content-box;
  border: 3px solid black;
  width: 80px;
  height: 25px;
  background: #ffe600;
  border-top: none;
}
.mouth::before {
  border-right: none;
  border-bottom-left-radius: 60px 30px;
  transform: rotate(-25deg);
  position: absolute;
  left: 30px;
  top: -5px;
  z-index: 1;
  box-shadow: 0 -10px 0 #ffe600, 5px -3px 0 #ffe600;
}
.mouth::after {
  border-left: none;
  border-bottom-right-radius: 60px 30px;
  transform: rotate(25deg);
  position: absolute;
  right: 30px;
  top: -5px;
  box-shadow: 0 -10px 0 #ffe600, -5px -3px 0 #ffe600;
}
.mouth > div {
  position: absolute;
  background: #ff485f;
  border: 4px solid black;
  width: 236px;
  height: 808px;
  left: 50%;
  margin-left: -118px;
  border-bottom-left-radius: 118px 800px;
  border-bottom-right-radius: 118px 800px;
  margin-top: -637px;
  overflow: hidden;
}
.mouth > div::after {
  content: "";
  display: block;
  position: absolute;
  bottom: 35px;
  left: 50%;
  margin-left: -65px;
  width: 130px;
  height: 100px;
  border-top-left-radius: 100%;
  border-top-right-radius: 100%;
  box-shadow: 0 -70px 0 #9b000a;
}
.face {
  border: 3px solid black;
  width: 88px;
  height: 88px;
  border-radius: 100%;
  background: #f00;
  position: absolute;
  top: 110px;
}
.face.right {
  right: 0;
}
`
export default string;