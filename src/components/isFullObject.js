/* eslint-disable consistent-return */
/* eslint-disable no-unused-vars */
/* eslint-disable no-empty */
/* eslint-disable no-lonely-if */
/* eslint-disable no-else-return */
function isFullObject(obj){
    if( obj === null || typeof obj !== "object" ) return false;
    else {
        if( Object.keys(obj).length === 0 ) return false;
        else {
            let flag = false;
            for( let key in obj ){
                obj[key] !== '' ? flag = true : flag = false;
                if(flag) return true;
            }
            return false;
        }
    }
}