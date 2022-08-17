export default class CommonValidationFunctions{
    constructor(){
        this.err="";
    }
    
    // sample validation methods
    
    nwts(s) {
     return s.replace(/\s+/g, '');
    }

    nullCheck(s) {
      this.err = s.length ? 0 : 5;
    return this.err;
    }
    
    lastname(s){
        this.err = s.length > 4 ? 0 : 5;
    return this.err;
    }
    
    email(s) {   
        let email = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(s));
        this.err = s ? 0 : 6;
    return this.err;
    }
    
    number(s) {
        s =  s.replace(/,/g , "");
        s = (s.replace(/\s+/g, '')) - 0;
        this.err =  isNaN(s) ? 10 : 0;
        return this.err;
    }

    floatNum(s) {
        const RE = /^[0-9]{1,4}(\.[0-9]{0,3})?$/;
        s = parseFloat(s.replace(/\s+/g, ''));
        this.err = RE.test(s) ? 0 : 10;
    return this.err;
  }
}
