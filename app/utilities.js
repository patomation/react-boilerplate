var Utilities = {

  /*
  * Merge Objects
  */
  merge: function(obj1,obj2) {
      var obj3 = {};
      for (var attrname in obj1) { obj3[attrname] = obj1[attrname]; }
      for (var attrname in obj2) { obj3[attrname] = obj2[attrname]; }
      return obj3;
  },

  /*
  * Clone Object
  */
  clone: function(obj){
    return JSON.parse(JSON.stringify(obj));
  }

};

export default Utilities
