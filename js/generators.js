var hardstyle_generator = function(limb_structure, dominant_frequency) {

        var stroke = limb_structure;
        var linear_multiplier = 0.5;
        var angular_multiplier = 0.3;

        for(limb in stroke) {
            var state = stroke[limb];
            switch(limb) {
               case 'head' : {
                     //state.left = (parseInt(state.left) +  linear_multiplier  * dominant_frequency  * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Z") + "(" + (parseInt(state.transform || 0) +  0.5 * angular_multiplier * dominant_frequency * (random_bit()==0? 1 : -1)).toFixed() + "deg)";
                    break;
                }
                case'rightarm': {
                     state.right = (parseInt(state.right) +  0.08 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "Y" : "X") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'leftarm' : {
                     state.left = (parseInt(state.left) +  0.08 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "Y" : "X") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'leftleg' : {
                     state.top = (parseInt(state.top) +  0.2 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'rightleg' : {
                     state.top = (parseInt(state.top) +  0.2 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'thorax' : {
                     //state.left = (parseInt(state.left) +  linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
            }
            stroke[limb] = state;
        }

        return stroke;
}

var techno_generator = function(limb_structure, dominant_frequency) {

        var stroke = limb_structure;
        var linear_multiplier = 0.5;
        var angular_multiplier = 0.1;

        for(limb in stroke) {
            var state = stroke[limb];
            switch(limb) {
               case 'head' : {
                     state.top = (parseInt(state.top || 0) +  0.08 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.left = (parseInt(state.left) +  0.1 * linear_multiplier  * dominant_frequency  * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Z") + "(" + (parseInt(state.transform || 0) +  Math.random() * angular_multiplier * dominant_frequency * (random_bit()==0? 1 : -1)).toFixed() + "deg)";
                    break;
                }
                case'rightarm': {
                     state.right = (parseInt(state.right) +  0.1 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "Z" : "X") + "(" + (parseInt(state.transform || 0) +  2 * angular_multiplier * dominant_frequency * (random_bit()==0? -1: -1)).toFixed() + "deg)";
                    break;
                }
                case'leftarm' : {
                     state.left = (parseInt(state.left) +  0.1 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "Z" : "X") + "(" + (parseInt(state.transform || 0) +  2 * angular_multiplier * dominant_frequency * (random_bit()==0? 1: 1)).toFixed() + "deg)";
                    break;
                }
                case'leftleg' : {
                     state.top = (parseInt(state.top) +  0.2 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'rightleg' : {
                     state.top = (parseInt(state.top) +  0.2 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'thorax' : {
                     //state.left = (parseInt(state.left) +  linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
            }
            stroke[limb] = state;
        }

        return stroke;
}


var classical_generator = function(limb_structure, dominant_frequency) {

        var stroke = limb_structure;
        var linear_multiplier = 0.5;
        var angular_multiplier = 0.1;

        for(limb in stroke) {
            var state = stroke[limb];
            switch(limb) {
               case 'head' : {
                     //state.left = (parseInt(state.left) +  linear_multiplier  * dominant_frequency  * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Z") + "(" + (parseInt(state.transform || 0) +  Math.random() * angular_multiplier * dominant_frequency * (random_bit()==0? 1 : -1)).toFixed() + "deg)";
                    break;
                }
                case'rightarm': {
                     state.right = (parseInt(state.right) +  0.08 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "Y" : "X") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'leftarm' : {
                     state.left = (parseInt(state.left) +  0.08 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "Y" : "X") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'leftleg' : {
                     //state.top = (parseInt(state.top) +  0.2 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'rightleg' : {
                     //state.top = (parseInt(state.top) +  0.2 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'thorax' : {
                     //state.left = (parseInt(state.left) +  linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
            }
            stroke[limb] = state;
        }

        return stroke;
}

var ragga_generator = function(limb_structure, dominant_frequency) {

        var stroke = limb_structure;
        var linear_multiplier = 0.7;
        var angular_multiplier = 0.1;

        for(limb in stroke) {
            var state = stroke[limb];
            switch(limb) {
               case 'head' : {
                     //state.left = (parseInt(state.left) +  linear_multiplier  * dominant_frequency  * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Z") + "(" + (parseInt(state.transform || 0) +  Math.random() * angular_multiplier * dominant_frequency * (random_bit()==0? 1 : -1)).toFixed() + "deg)";
                    break;
                }
                case'rightarm': {
                     state.right = (parseInt(state.right) +  0.08 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "Y" : "X") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'leftarm' : {
                     state.left = (parseInt(state.left) +  0.08 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "Y" : "X") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'leftleg' : {
                     state.top = (parseInt(state.top) +  0.2 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Z") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'rightleg' : {
                     state.top = (parseInt(state.top) +  0.2 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "Z" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'thorax' : {
                     state.left = (parseInt(state.left) + 0.08 *  linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "Z" : "Y") + "(" + (parseInt(state.transform || 0) +  1 * angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
            }
            stroke[limb] = state;
        }

        return stroke;
}


var hiphop_generator = function(limb_structure, dominant_frequency) {

        var stroke = limb_structure;
        var linear_multiplier = 0.5;
        var angular_multiplier = 0.1;

        for(limb in stroke) {
            var state = stroke[limb];
            switch(limb) {
               case 'head' : {
                     //state.left = (parseInt(state.left) +  linear_multiplier  * dominant_frequency  * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Z") + "(" + (parseInt(state.transform || 0) +  Math.random() * angular_multiplier * dominant_frequency * (random_bit()==0? 1 : -1)).toFixed() + "deg)";
                    break;
                }
                case'rightarm': {
                     state.right = (parseInt(state.right) +  0.08 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "Z" : "X") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'leftarm' : {
                     state.left = (parseInt(state.left) +  0.08 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "Z" : "X") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'leftleg' : {
                     state.top = (parseInt(state.top) +  0.2 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'rightleg' : {
                     state.top = (parseInt(state.top) +  0.2 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'thorax' : {
                     //state.left = (parseInt(state.left) +  linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
            }
            stroke[limb] = state;
        }

        return stroke;
}

var dubstep_generator = function(limb_structure, dominant_frequency) {

        var stroke = limb_structure;
        var linear_multiplier = 0.5;
        var angular_multiplier = 0.1;

        for(limb in stroke) {
            var state = stroke[limb];
            switch(limb) {
               case 'head' : {
                     //state.left = (parseInt(state.left) +  linear_multiplier  * dominant_frequency  * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Z") + "(" + (parseInt(state.transform || 0) +  Math.random() * angular_multiplier * dominant_frequency * (random_bit()==0? 1 : -1)).toFixed() + "deg)";
                    break;
                }
                case'rightarm': {
                     state.right = (parseInt(state.right) +  0.08 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "Y" : "X") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'leftarm' : {
                     state.left = (parseInt(state.left) +  0.08 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "Y" : "X") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'leftleg' : {
                     state.top = (parseInt(state.top) +  0.2 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'rightleg' : {
                     state.top = (parseInt(state.top) +  0.2 * linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
                case'thorax' : {
                     //state.left = (parseInt(state.left) +  linear_multiplier * dominant_frequency * ( random_bit() == 0 ? 1 : -1)) + "px";
                     state.transform = "rotate" + (random_bit()==0? "X" : "Y") + "(" + (parseInt(state.transform || 0) +  angular_multiplier * dominant_frequency * (random_bit()==0? 1: -1)).toFixed() + "deg)";
                    break;
                }
            }
            stroke[limb] = state;
        }

        return stroke;
}
