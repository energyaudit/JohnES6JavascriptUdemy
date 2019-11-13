////////////////version1
//var budgetController=(function(){
//    var x=23;
//    var add=function(a){
//         return x+a;
//      }
//    //IFFIE encasulation
//    
//    return {
//       publicTest : function(b) {
//           console.log(add(b));
//       }
//    }
//})();
//
//
////////////////version2
//
//var budgetController=(function(){
//    var x=23;
//    var add=function(a){
//        return x+a;
//    }
//    //IFFIE encasulation
//
//    return {
//        publicTest : function(b) {
//           return add(b);
//        }
//    }
//})();
//
//var UIController=(function(){
//    
//})();
//
//var controller=(function(budgetCtrl,UICtrl){
//    var z=budgetCtrl.publicTest(5);
//    return {
//        antotherPublic:function(){
//            console.log(z);
//        }
//    }
//    
//})(budgetController,UIController)

////////////////version3
//var budgetController=(function(){
//   
//})();
//
//var UIController=(function(){
//
//})();
////global controller
//var controller=(function(budgetCtrl,UICtrl){
//    document.querySelector('.add__btn').addEventListener('click',function(){
//      console.log('Button was clicked')
//    
//                           });
//    document.addEventListener('keypress',function(event){
//        console.log(event)
//    })   
//   
//})(budgetController,UIController);
//
//var budgetController=(function(){
//
//})();

////////////////version4
//var budgetController = (function () {
//
//})();
//
//var UIController = (function () {
//
//})();
////global controller
//var controller = (function (budgetCtrl, UICtrl) {
//    document.querySelector('.add__btn').addEventListener('click', function () {
//        console.log('Button was clicked')
//
//    });
//    document.addEventListener('keypress', function (event) {
//        if (event.keyCode === 13 || event.which === 13) {
//            console.log('enter was pressed')
//        }
//
//    });
//
//})(budgetController, UIController);



////////////////version5
//var budgetController = (function () {
//
//})();
//var UIController = (function () {
//    return {
//        getInput: function () {
//            return {
//                type: document.querySelector('.add__type').value,
//                description: document.querySelector('.add__description').value,
//                value: document.querySelector('.add__value').value
//            }
//
//
//        }
//    }
//})();
////global controller
//var controller = (function (budgetCtrl, UICtrl) {
//    var ctrlAddItem = function () {
//        //1.get filed input data
//        var input = UICtrl.getInput();
//        console.log(input);
//        //2.Add the item
//
//    }
//    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
//    document.addEventListener('keypress', function (event) {
//        if (event.keyCode === 13 || event.which === 13) {
//            ctrlAddItem();
//        }
//    });
//
//})(budgetController, UIController);
////////////////version6
//var budgetController = (function () {
//
//})();
//var UIController = (function () {
//    var DOMstrings = {
//        inputType: '.add__type',
//        inputDescription: '.add__description',
//        inputValue: '.add__value'
//
//    };
//    return {
//        getInput: function () {
//            return {
//                type: document.querySelector(DOMstrings.inputType).value,
//                description: document.querySelector(DOMstrings.inputDescription).value,
//                value: document.querySelector(DOMstrings.inputValue).value
//            };
//        }
//     
//    };
//})();
////global controller
//var controller = (function (budgetCtrl, UICtrl) {
//  //  var DOM = UICtrl.getDOMstrings();
//    var ctrlAddItem = function () {
//        //1.get filed input data
//        var input = UICtrl.getInput();
//        console.log(input);
//        //2.Add the item
//
//    }
//    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
//    document.addEventListener('keypress', function (event) {
//        if (event.keyCode === 13 || event.which === 13) {
//            ctrlAddItem();
//        }
//    });
//
//})(budgetController, UIController);

////////////////version7
var budgetController = (function () {

})();
var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn:'.add__btn'

    };
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },
        getDOMstrings:function(){
        return DOMstrings
    }

    };
})();
//global controller
var controller = (function (budgetCtrl, UICtrl) {
      var DOM = UICtrl.getDOMstrings();
    var ctrlAddItem = function () {
        //1.get filed input data
        var input = UICtrl.getInput();
        console.log(input);
        //2.Add the item

    }
    document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
    document.addEventListener('keypress', function (event) {
        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();
        }
    });

})(budgetController, UIController);