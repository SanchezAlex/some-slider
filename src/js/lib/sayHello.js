function sayHello() {
  if (navigator.userAgent.toLowerCase().indexOf('chrome') > -1) {
    var args = ['\n %c Coded by %c malinovskiy.alexandr@gmail.com %c %c  \n\n', 'border: 1px solid #000;color: #000; background: #00DB2B  ; padding:5px 0;', 'color: #fff; background: #1c1c1c; padding:5px 0;border: 1px solid #000;', 'background: #fff; padding:5px 0;', 'color: #b0976d; background: #fff; padding:5px 0;'];
    window.console.log.apply(console, args);
  } else if (window.console) {
    window.console.log('Coded by malinovskiy.alexandr@gmail.com️');
  }
}
module.exports = sayHello;
