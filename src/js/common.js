define([],function(){
    return {
        transitionEnd:function(){
            var el = document.createElement('element'),t;
            var transitions = {
                'WebkitTransform': 'webkitTransitionEnd',
                'OTransform': 'oTransitionEnd',
                'MozTransform': 'TransitionEnd',
                'MsTransform': 'msTransitionEnd',
                'transform': 'transitionEnd'
            };
            for (t in transitions) {
                if (el.style[t] !== undefined) {
                    this.transform = t;
                    return transitions[t];
                }
            }
        },
        addZero: function(num){
            if(num <= 0) throw new error("the number must > 0");
            return num < 10 && num >0 ? "0"+num : num;
        },
        minusZero:function(num){
            return num.charAt(0) == 0 ? num.substr(1) : num;
        }
    }
});