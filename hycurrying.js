//  realize hycurring
function hycurring(fn){
    return function curring(...args){
        if(args.length >= fn.length){
            return fn.call(this,...args)
        }else{
            for(var i=0;i<(fn.length-args.length);i++){
                function curring1(...arges2){
                    return curring.call(this,...args.concat(...arges2))
                }
                return curring1
            }

        }

    }

}