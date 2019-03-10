class BattleStation {
 
    constructor(x, y){
      this.x = x
      this.y = y
    }
  
    draw(){
        var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) {if (window.CP.shouldStopExecution(2)){break;} var source = arguments[i]; for (var key in source) {if (window.CP.shouldStopExecution(1)){break;} if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } }
        window.CP.exitedLoop(1);
         }
        window.CP.exitedLoop(2);
         return target; };
        
        function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
        
        var COLORS = {
          white: '#ffffff',
          black: '#000000',
          green: '#49F2CC',
          pink: '#777',
          grey: '#29363B',
          cyan: 'cyan',
          yellow: '#FFE202',
          hotpink: 'deeppink'
        };
        var blendMode = 'screen';
        
        var y = -50;
        
        var staticTriangle = new mojs.Shape({
          shape: 'polygon',
          duration: 1160,
          radius: { 6: 6.5 },
          angle: -60,
          fill: 'none',
          stroke: COLORS.white,
          strokeWidth: { 3: 0.5 },
          easing: 'cubic.out',
         // isShowEnd: false,
          width: 17,
          height: 17,
          y: y
        });
        
        // small triangles
        
        var shift1 = 8.7,
            shift2 = 5,
            SMALL_OPTS = {
          shape: 'polygon',
          duration: 1160,
          radius: 1.4,
          angle: -60,
          fill: 'none',
          stroke: COLORS.white,
          strokeWidth: { 1.4: 0.4 },
          easing: 'expo.out',
          //isShowEnd: false
        };
        
        var small1 = new mojs.Shape(_extends({}, SMALL_OPTS, {
          x: { 0: -shift1 },
          y: _defineProperty({}, y, -shift2 + y)
        }));
        
        var small2 = new mojs.Shape(_extends({}, SMALL_OPTS, {
          x: { 0: shift1 },
          y: _defineProperty({}, y, -shift2 + y)
        }));
        
        var small3 = new mojs.Shape(_extends({}, SMALL_OPTS, {
          y: _defineProperty({}, y, 1.15 * shift1 + y)
        }));
        
        // supporting large triangles
        
        var SUPP_OPTS = {
          shape: 'polygon',
          duration: 1000,
          radius: { 4: 2 },
          angle: -60,
          fill: 'white',
          fillOpacity: { 0: 1 },
          stroke: COLORS.white,
          strokeWidth: { 0.7: 0 },
          easing: 'cubic.out',
          delay: 60,
          y: y,
          // x:            1,
          //isShowEnd: false
        };
        var support1 = new mojs.Shape(SUPP_OPTS);
        
        var support2 = new mojs.Transit(_extends({}, SUPP_OPTS, {
          strokeWidth: { 0.4: 0 },
          fill: 'none',
           duration:     810,
          radius: { 8.5: 9.5 }
        }));
        
        var timeline = new mojs.Timeline();
        timeline.add(staticTriangle, [small1, small2, small3], [support1, support2]);

      timeline.play()
   
    }
  }