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
//        if (event.keyCode === 13 || event.which === 13) {//enter,some customer //not click add button and just hit enter instead
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

//////////////////version7 initializer
//var budgetController = (function () {
//
//})();
//var UIController = (function () {
//    var DOMstrings = {
//        inputType: '.add__type',
//        inputDescription: '.add__description',
//        inputValue: '.add__value',
//        inputBtn: '.add__btn'
//
//    };
//    return {
//        getInput: function () {
//            return {
//                type: document.querySelector(DOMstrings.inputType).value,
//                description: document.querySelector(DOMstrings.inputDescription).value,
//                value: document.querySelector(DOMstrings.inputValue).value
//            };
//        },
//        getDOMstrings: function () {
//            return DOMstrings
//        }
//
//    };
//})();
////GLOBAL APP CONTROLLER
//var controller = (function (budgetCtrl, UICtrl) {
//    var setupEventListeners = function () {
//        var DOM = UICtrl.getDOMstrings();
//        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
//        document.addEventListener('keypress', function (event) {
//            if (event.keyCode === 13 || event.which === 13) {
//                ctrlAddItem();
//            }
//        });
//
//    };
//
//
//    var ctrlAddItem = function () {
//        //1.get filed input data
//        var input = UICtrl.getInput();
//        console.log(input);
//        //2.Add the item to budget controller
//        //3.Add the item to the UI
//        //4.Calculate the budget
//        //5.Display the budget on the  UI
//    };
//    return {//make init function public by return
//        init: function () {
//            console.log('Application has started');
//            setupEventListeners();
//        }
//    }
//})(budgetController, UIController);
//
//controller.init();
////////////////version8 Creating Income and Expense Function Constructors
// var budgetController = (function () {
//     var Expense = function (id, description, value) { //function constructor first letter capital
//         this.id = id;
//         this.description = description;
//         this.value = value;
//     };
//     var Income = function (id, description, value) { //function constructor first letter capital
//         this.id = id;
//         this.description = description;
//         this.value = value;
//     };

//     var data = {
//         allItems: {
//             exp:[],
//             inc:[]
//         },
//         totals:{
//             exp:0,
//             inc:0
//         }
//     };
//     return{
//         addItem:function(type,des,val){
//             var newItem,ID;
//             //create new ID 
//             if(data.allItems[type].length>0){ 
//                  ID=data.allItems[type][data.allItems[type].length-1].id+1;
//                 }else{
//                   ID=0;  
//                 }

//             //create new iem based on 'inc' or 'exp' type
//             if(type==='exp'){newItem =new Expense(ID,des,val);}
//             else if (type==='inc'){newItem =new Income(ID,des,val);}
//                   //push it into ur data structure 
//                    data.allItems[type].push(newItem);
//                    //return the new element
//                    return newItem;
//                 },
//                 testing:function(){
//                     console.log(data);
//                 }
//     };
// })();


// var UIController = (function () {
//     var DOMstrings = {
//         inputType: '.add__type',
//         inputDescription: '.add__description',
//         inputValue: '.add__value',
//         inputBtn: '.add__btn'

//     };
//     return {
//         getInput: function () {
//             return {
//                 type: document.querySelector(DOMstrings.inputType).value,//will be either inc or exp
//                 description: document.querySelector(DOMstrings.inputDescription).value,
//                 value: document.querySelector(DOMstrings.inputValue).value
//             };
//         },
//         getDOMstrings: function () {
//             return DOMstrings
//         }

//     };
// })();
// //GLOBAL APP CONTROLLER
// var controller = (function (budgetCtrl, UICtrl) {
//     var input,newItem;
//     var setupEventListeners = function () {
//         var DOM = UICtrl.getDOMstrings();
//         document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
//         document.addEventListener('keypress', function (event) {
//             if (event.keyCode === 13 || event.which === 13) {
//                 ctrlAddItem();
//             }
//         });

//     };


//     var ctrlAddItem = function () {
//         //1.get filed input data
//         var input = UICtrl.getInput();
//         console.log(input);
//         //2.Add the item to budget controller
//         var newItem=budgetController.addItem(input.type,input.description,input.value);
//         //3.Add the item to the UI
//         //4.Calculate the budget
//         //5.Display the budget on the  UI
//     };
//     return { //make init function public by return
//         init: function () {
//             console.log('Application has started');
//             setupEventListeners();
//         }
//     }
// })(budgetController, UIController);

// controller.init();
////////////////version8 Adding a New Item to Our Budget Controller
//var budgetController = (function () {
//    var Expense = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var Income = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//
//    var data = {
//        allItems: {
//            exp: [],
//            inc: []
//        },
//        totals: {
//            exp: 0,
//            inc: 0
//        }
//    };
//    return {
//        addItem: function (type, des, val) {
//            var newItem, ID;
//            //create new ID 
//            if (data.allItems[type].length > 0) {
//                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
//            } else {
//                ID = 0;
//            }
//
//            //create new iem based on 'inc' or 'exp' type
//            if (type === 'exp') {
//                newItem = new Expense(ID, des, val);
//            } else if (type === 'inc') {
//                newItem = new Income(ID, des, val);
//            }
//            //push it into ur data structure 
//            data.allItems[type].push(newItem);
//            //return the new element
//            return newItem;
//        },
//        testing: function () {
//            console.log(data);
//        }
//    };
//})();
//
//
//var UIController = (function () {
//    var DOMstrings = {
//        inputType: '.add__type',
//        inputDescription: '.add__description',
//        inputValue: '.add__value',
//        inputBtn: '.add__btn',
//        incomeContainer: '.income__list',
//        expensesContainer: '.expenses__list',
//
//    };
//    return {
//        getInput: function () {
//            return {
//                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
//                description: document.querySelector(DOMstrings.inputDescription).value,
//                value: document.querySelector(DOMstrings.inputValue).value
//            };
//        },
//        addListItem: function (obj, type) {
//            var html, newHtml, element;
//            //create html string with placeholder text
//            if (type === 'inc') {
//                element = DOMstrings.incomeContainer;
//                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
//            } else if (type === 'exp') {
//                element = DOMstrings.expensesContainer;
//                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">'
//            }
//            //replace the placeholder text with some actual data
//            newHtml = html.replace('%id%', obj.id);
//            newHtml = newHtml.replace('%description%', obj.description);
//            newHtml = newHtml.replace('%value%', obj.value);
//
//            //Insert the HTML into the DOM
//            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
//        },
//        getDOMstrings: function () {
//            return DOMstrings
//        }
//
//    };
//})();
////GLOBAL APP CONTROLLER
//var controller = (function (budgetCtrl, UICtrl) {
//    var input, newItem;
//    var setupEventListeners = function () {
//        var DOM = UICtrl.getDOMstrings();
//        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
//        document.addEventListener('keypress', function (event) {
//            if (event.keyCode === 13 || event.which === 13) {
//                ctrlAddItem();
//            }
//        });
//
//    };
//
//
//    var ctrlAddItem = function () {
//        //1.get filed input data
//        var input = UICtrl.getInput();
//        console.log(input);
//        //2.Add the item to budget controller
//        var newItem = budgetController.addItem(input.type, input.description, input.value);
//        //3.Add the item to the UI
//        UICtrl.addListItem(newItem, input.type);
//        //4.Calculate the budget
//        //5.Display the budget on the  UI
//    };
//    return { //make init function public by return
//        init: function () {
//            console.log('Application has started');
//            setupEventListeners();
//        }
//    }
//})(budgetController, UIController);
//
//controller.init();
////////////////version9  Clear the input fields in the UI
//var budgetController = (function () {
//    var Expense = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var Income = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//
//    var data = {
//        allItems: {
//            exp: [],
//            inc: []
//        },
//        totals: {
//            exp: 0,
//            inc: 0
//        }
//    };
//    return {
//        addItem: function (type, des, val) {
//            var newItem, ID;
//            //create new ID 
//            if (data.allItems[type].length > 0) {
//                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
//            } else {
//                ID = 0;
//            }
//
//            //create new iem based on 'inc' or 'exp' type
//            if (type === 'exp') {
//                newItem = new Expense(ID, des, val);
//            } else if (type === 'inc') {
//                newItem = new Income(ID, des, val);
//            }
//            //push it into ur data structure 
//            data.allItems[type].push(newItem);
//            //return the new element
//            return newItem;
//        },
//        testing: function () {
//            console.log(data);
//        }
//    };
//})();
//
//
//var UIController = (function () {
//    var DOMstrings = {
//        inputType: '.add__type',
//        inputDescription: '.add__description',
//        inputValue: '.add__value',
//        inputBtn: '.add__btn',
//        incomeContainer: '.income__list',
//        expensesContainer: '.expenses__list',
//
//    };
//    return {
//        getInput: function () {
//            return {
//                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
//                description: document.querySelector(DOMstrings.inputDescription).value,
//                value: document.querySelector(DOMstrings.inputValue).value
//            };
//        },
//        addListItem: function (obj, type) {
//            var html, newHtml, element;
//            //create html string with placeholder text
//            if (type === 'inc') {
//                element = DOMstrings.incomeContainer;
//                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
//            } else if (type === 'exp') {
//                element = DOMstrings.expensesContainer;
//                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">'
//            }
//            //replace the placeholder text with some actual data
//            newHtml = html.replace('%id%', obj.id);
//            newHtml = newHtml.replace('%description%', obj.description);
//            newHtml = newHtml.replace('%value%', obj.value);
//
//            //Insert the HTML into the DOM
//            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
//        },
//        clearFields: function () {
//            var fields, filedsArr;
//            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue); //list not have those methods,so change list into array
//            var fieldsArr = Array.prototype.slice.call(fields);
//            fieldsArr.forEach(function (current, index, array) {
//                current.value = "";
//            });
//            fieldsArr[0].focus();
//        },
//        getDOMstrings: function () {
//            return DOMstrings
//        }
//
//    };
//})();
////GLOBAL APP CONTROLLER
//var controller = (function (budgetCtrl, UICtrl) {
//    var input, newItem;
//    var setupEventListeners = function () {
//        var DOM = UICtrl.getDOMstrings();
//        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
//        document.addEventListener('keypress', function (event) {
//            if (event.keyCode === 13 || event.which === 13) {
//                ctrlAddItem();
//            }
//        });
//
//    };
//
//
//    var ctrlAddItem = function () {
//        //1.get filed input data
//        var input = UICtrl.getInput();
//        console.log(input);
//        //2.Add the item to budget controller
//        var newItem = budgetController.addItem(input.type, input.description, input.value);
//        //3.Add the item to the UI
//        UICtrl.addListItem(newItem, input.type);
//        //4.clear the fields
//        UICtrl.clearFields();
//        //4.Calculate the budget
//        //5.Display the budget on the  UI
//    };
//    return { //make init function public by return
//        init: function () {
//            console.log('Application has started');
//            setupEventListeners();
//        }
//    }
//})(budgetController, UIController);
//
//controller.init();
//////////////////version9 Verfiy the UI not input empty description or value
//var budgetController = (function () {
//    var Expense = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var Income = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//
//    var data = {
//        allItems: {
//            exp: [],
//            inc: []
//        },
//        totals: {
//            exp: 0,
//            inc: 0
//        }
//    };
//    return {
//        addItem: function (type, des, val) {
//            var newItem, ID;
//            //create new ID 
//            if (data.allItems[type].length > 0) {
//                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
//            } else {
//                ID = 0;
//            }
//
//            //create new iem based on 'inc' or 'exp' type
//            if (type === 'exp') {
//                newItem = new Expense(ID, des, val);
//            } else if (type === 'inc') {
//                newItem = new Income(ID, des, val);
//            }
//            //push it into ur data structure 
//            data.allItems[type].push(newItem);
//            //return the new element
//            return newItem;
//        },
//        testing: function () {
//            console.log(data);
//        }
//    };
//})();
//
//
//var UIController = (function () {
//    var DOMstrings = {
//        inputType: '.add__type',
//        inputDescription: '.add__description',
//        inputValue: '.add__value',
//        inputBtn: '.add__btn',
//        incomeContainer: '.income__list',
//        expensesContainer: '.expenses__list',
//
//    };
//    return {
//        getInput: function () {
//            return {
//                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
//                description: document.querySelector(DOMstrings.inputDescription).value,
//                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
//            };
//        },
//        addListItem: function (obj, type) {
//            var html, newHtml, element;
//            //create html string with placeholder text
//            if (type === 'inc') {
//                element = DOMstrings.incomeContainer;
//                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
//            } else if (type === 'exp') {
//                element = DOMstrings.expensesContainer;
//                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">'
//            }
//            //replace the placeholder text with some actual data
//            newHtml = html.replace('%id%', obj.id);
//            newHtml = newHtml.replace('%description%', obj.description);
//            newHtml = newHtml.replace('%value%', obj.value);
//
//            //Insert the HTML into the DOM
//            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
//        },
//        clearFields: function () {
//            var fields, filedsArr;
//            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue); //list not have those methods,so change list into array
//            var fieldsArr = Array.prototype.slice.call(fields);
//            fieldsArr.forEach(function (current, index, array) {
//                current.value = "";
//            });
//            fieldsArr[0].focus();
//        },
//        getDOMstrings: function () {
//            return DOMstrings
//        }
//
//    };
//})();
////GLOBAL APP CONTROLLER
//var controller = (function (budgetCtrl, UICtrl) {
//    var input, newItem;
//    var setupEventListeners = function () {
//        var DOM = UICtrl.getDOMstrings();
//        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
//        document.addEventListener('keypress', function (event) {
//            if (event.keyCode === 13 || event.which === 13) {
//                ctrlAddItem();
//            }
//        });
//
//    };
//    var updateBudget = function () {
//        //1.Calculate the budget
//        //2.retun the budget
//        //5.Display the budget on the  UI 
//    }
//
//    var ctrlAddItem = function () {
//        //1.get filed input data
//        var input = UICtrl.getInput();
//        console.log(input); //nan:not a number
//        if (input.description !== "" && !isNaN(input.value) && input.value > 0) { //verify not input empty description or value
//            //2.Add the item to budget controller
//            var newItem = budgetController.addItem(input.type, input.description, input.value);
//            //3.Add the item to the UI
//            UICtrl.addListItem(newItem, input.type);
//            //4.clear the fields
//            UICtrl.clearFields();
//            //5.Calculate and update the budget
//            updateBudget();
//        }
//
//
//    };
//    return { //make init function public by return
//        init: function () {
//            console.log('Application has started');
//            setupEventListeners();
//        }
//    }
//})(budgetController, UIController);
//
//controller.init();

//////////////////version9 udpating budget
//var budgetController = (function () {
//    var Expense = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var Income = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var calculateTotal = function (type) {
//        var sum = 0;
//        data.allItems[type].forEach(function (cur) {
//            //  sum=sum+cur.value;
//            sum += cur.value;
//        });
//        data.totals[type] = sum;
//    };
//
//    var data = { //global for budgetController
//        allItems: {
//            exp: [],
//            inc: []
//        },
//        totals: {
//            exp: 0,
//            inc: 0
//        },
//        budget: 0,
//        percentage: -1 //-1 means something not exisit 
//    };
//    return {
//        addItem: function (type, des, val) {
//            var newItem, ID;
//            //create new ID 
//            if (data.allItems[type].length > 0) {
//                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
//            } else {
//                ID = 0;
//            }
//
//            //create new iem based on 'inc' or 'exp' type
//            if (type === 'exp') {
//                newItem = new Expense(ID, des, val);
//            } else if (type === 'inc') {
//                newItem = new Income(ID, des, val);
//            }
//            //push it into ur data structure 
//            data.allItems[type].push(newItem);
//            //return the new element
//            return newItem;
//        },
//        calculateBudget: function () {
//            //calculate total income and Expense
//            calculateTotal('exp');
//            calculateTotal('inc');
//            //calculate the budget:income-expenses
//            data.budget = data.totals.inc - data.totals.exp;
//            //calculate the percentage of income that we spent
//                       if (data.totals.inc > 0) {
//                data.percentage = Math.round(data.totals.exp / data.totals.inc) * 100
//            } else {
//                data.percentage = -1;
//            }//use math object
//        },
//        getBudget: function () {
//            return { //return object that it will have multiple values return same time
//                budget: data.budget,
//                totalInc: data.totals.inc, //data.total.inc property
//                totalExp: data.totals.exp,
//                percentage: data.percentage
//            }
//        },
//        testing: function () {
//            console.log(data);
//        }
//    };
//})();
//
//
//var UIController = (function () {
//    var DOMstrings = {
//        inputType: '.add__type',
//        inputDescription: '.add__description',
//        inputValue: '.add__value',
//        inputBtn: '.add__btn',
//        incomeContainer: '.income__list',
//        expensesContainer: '.expenses__list',
//
//    };
//    return {
//        getInput: function () {
//            return {
//                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
//                description: document.querySelector(DOMstrings.inputDescription).value,
//                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
//            };
//        },
//        addListItem: function (obj, type) {
//            var html, newHtml, element;
//            //create html string with placeholder text
//            if (type === 'inc') {
//                element = DOMstrings.incomeContainer;
//                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
//            } else if (type === 'exp') {
//                element = DOMstrings.expensesContainer;
//                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">'
//            }
//            //replace the placeholder text with some actual data
//            newHtml = html.replace('%id%', obj.id);
//            newHtml = newHtml.replace('%description%', obj.description);
//            newHtml = newHtml.replace('%value%', obj.value);
//
//            //Insert the HTML into the DOM
//            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
//        },
//        clearFields: function () {
//            var fields, filedsArr;
//            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue); //list not have those methods,so change list into array
//            var fieldsArr = Array.prototype.slice.call(fields);
//            fieldsArr.forEach(function (current, index, array) {
//                current.value = "";
//            });
//            fieldsArr[0].focus();
//        },
//        getDOMstrings: function () {
//            return DOMstrings
//        }
//
//    };
//})();
////GLOBAL APP CONTROLLER
//var controller = (function (budgetCtrl, UICtrl) {
//    var input, newItem;
//    var setupEventListeners = function () {
//        var DOM = UICtrl.getDOMstrings();
//        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
//        document.addEventListener('keypress', function (event) {
//            if (event.keyCode === 13 || event.which === 13) {
//                ctrlAddItem();
//            }
//        });
//
//    };
//    var updateBudget = function () {
//        //1.Calculate the budget
//        budgetCtrl.calculateBudget();
//        //2.retun the budget
//        var budget = budgetCtrl.getBudget();
//        //5.Display the budget on the  UI 
//        console.log(budget);
//    }
//
//    var ctrlAddItem = function () {
//        //1.get filed input data
//        var input = UICtrl.getInput();
//        console.log(input); //nan:not a number
//        if (input.description !== "" && !isNaN(input.value) && input.value > 0) { //verify not input empty description or value
//            //2.Add the item to budget controller
//            var newItem = budgetController.addItem(input.type, input.description, input.value);
//            //3.Add the item to the UI
//            UICtrl.addListItem(newItem, input.type);
//            //4.clear the fields
//            UICtrl.clearFields();
//            //5.Calculate and update the budget
//            updateBudget();
//        }
//
//
//    };
//    return { //make init function public by return
//        init: function () {
//            console.log('Application has started');
//            setupEventListeners();
//        }
//    }
//})(budgetController, UIController);
//
//controller.init();
//////////////////version9 display total income and expenses to the UI
//var budgetController = (function () {
//    var Expense = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var Income = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var calculateTotal = function (type) {
//        var sum = 0;
//        data.allItems[type].forEach(function (cur) {
//            //  sum=sum+cur.value;
//            sum += cur.value;
//        });
//        data.totals[type] = sum;
//    };
//
//    var data = { //global for budgetController
//        allItems: {
//            exp: [],
//            inc: []
//        },
//        totals: {
//            exp: 0,
//            inc: 0
//        },
//        budget: 0,
//        percentage: -1 //-1 means something not exisit 
//    };
//    return {
//        addItem: function (type, des, val) {
//            var newItem, ID;
//            //create new ID 
//            if (data.allItems[type].length > 0) {
//                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
//            } else {
//                ID = 0;
//            }
//
//            //create new iem based on 'inc' or 'exp' type
//            if (type === 'exp') {
//                newItem = new Expense(ID, des, val);
//            } else if (type === 'inc') {
//                newItem = new Income(ID, des, val);
//            }
//            //push it into ur data structure 
//            data.allItems[type].push(newItem);
//            //return the new element
//            return newItem;
//        },
//        calculateBudget: function () {
//            //calculate total income and Expense
//            calculateTotal('exp');
//            calculateTotal('inc');
//            //calculate the budget:income-expenses
//            data.budget = data.totals.inc - data.totals.exp;
//            //calculate the percentage of income that we spent
//            if (data.totals.inc > 0) {
//                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
//                console.log(data.percentage);
//            } else {
//                data.percentage = -1;
//            }
//            //use math object
//        },
//        getBudget: function () {
//            return { //return object that it will have multiple values return same time
//                budget: data.budget,
//                totalInc: data.totals.inc, //data.total.inc property
//                totalExp: data.totals.exp,
//                percentage: data.percentage
//            }
//        },
//        testing: function () {
//            console.log(data);
//        }
//    };
//})();
//
//
//var UIController = (function () {
//    var DOMstrings = {
//        inputType: '.add__type',
//        inputDescription: '.add__description',
//        inputValue: '.add__value',
//        inputBtn: '.add__btn',
//        incomeContainer: '.income__list',
//        expensesContainer: '.expenses__list',
//        budgetLabel: '.budget__value',
//        incomeLabel: '.budget__income--value',
//        expensesLabel: '.budget__expenses--value',
//        percentageLabel: '.budget__expenses--percentage'
//
//    };
//    return {
//        getInput: function () {
//            return {
//                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
//                description: document.querySelector(DOMstrings.inputDescription).value,
//                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
//            };
//        },
//        addListItem: function (obj, type) {
//            var html, newHtml, element;
//            //create html string with placeholder text
//            if (type === 'inc') {
//                element = DOMstrings.incomeContainer;
//                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
//            } else if (type === 'exp') {
//                element = DOMstrings.expensesContainer;
//                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">'
//            }
//            //replace the placeholder text with some actual data
//            newHtml = html.replace('%id%', obj.id);
//            newHtml = newHtml.replace('%description%', obj.description);
//            newHtml = newHtml.replace('%value%', obj.value);
//
//            //Insert the HTML into the DOM
//            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
//        },
//        clearFields: function () {
//            var fields, filedsArr;
//            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue); //list not have those methods,so change list into array
//            var fieldsArr = Array.prototype.slice.call(fields);
//            fieldsArr.forEach(function (current, index, array) {
//                current.value = "";
//            });
//            fieldsArr[0].focus();
//        },
//        displayBudget: function (obj) {
//            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
//            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
//            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
//            document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage;
//            
//
//        },
//        getDOMstrings: function () {
//            return DOMstrings
//        }
//
//    };
//})();
////GLOBAL APP CONTROLLER
//var controller = (function (budgetCtrl, UICtrl) {
//    var input, newItem;
//    var setupEventListeners = function () {
//        var DOM = UICtrl.getDOMstrings();
//        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
//        document.addEventListener('keypress', function (event) {
//            if (event.keyCode === 13 || event.which === 13) {
//                ctrlAddItem();
//            }
//        });
//
//    };
//    var updateBudget = function () {
//        //1.Calculate the budget
//        budgetCtrl.calculateBudget();
//        //2.retun the budget
//        var budget = budgetCtrl.getBudget();
//        //5.Display the budget on the  UI 
//        console.log(budget);
//        UICtrl.displayBudget(budget);
//    }
//
//    var ctrlAddItem = function () {
//        //1.get filed input data
//        var input = UICtrl.getInput();
//        console.log(input); //nan:not a number
//        if (input.description !== "" && !isNaN(input.value) && input.value > 0) { //verify not input empty description or value
//            //2.Add the item to budget controller
//            var newItem = budgetController.addItem(input.type, input.description, input.value);
//            //3.Add the item to the UI
//            UICtrl.addListItem(newItem, input.type);
//            //4.clear the fields
//            UICtrl.clearFields();
//            //5.Calculate and update the budget
//            updateBudget();
//        }
//
//
//    };
//    return { //make init function public by return
//        init: function () {
//            console.log('Application has started');
//            setupEventListeners();
//        }
//    }
//})(budgetController, UIController);
//
//controller.init();

//////////////////version9 display total income and expenses to the UI,improve if percentage >0 then add percentage sign or not display sth else
//var budgetController = (function () {
//    var Expense = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var Income = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var calculateTotal = function (type) {
//        var sum = 0;
//        data.allItems[type].forEach(function (cur) {
//            //  sum=sum+cur.value;
//            sum += cur.value;
//        });
//        data.totals[type] = sum;
//    };
//
//    var data = { //global for budgetController
//        allItems: {
//            exp: [],
//            inc: []
//        },
//        totals: {
//            exp: 0,
//            inc: 0
//        },
//        budget: 0,
//        percentage: -1 //-1 means something not exisit 
//    };
//    return {
//        addItem: function (type, des, val) {
//            var newItem, ID;
//            //create new ID 
//            if (data.allItems[type].length > 0) {
//                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
//            } else {
//                ID = 0;
//            }
//
//            //create new iem based on 'inc' or 'exp' type
//            if (type === 'exp') {
//                newItem = new Expense(ID, des, val);
//            } else if (type === 'inc') {
//                newItem = new Income(ID, des, val);
//            }
//            //push it into ur data structure 
//            data.allItems[type].push(newItem);
//            //return the new element
//            return newItem;
//        },
//        calculateBudget: function () {
//            //calculate total income and Expense
//            calculateTotal('exp');
//            calculateTotal('inc');
//            //calculate the budget:income-expenses
//            data.budget = data.totals.inc - data.totals.exp;
//            //calculate the percentage of income that we spent
//            if (data.totals.inc > 0) {
//                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
//                console.log(data.percentage);
//            } else {
//                data.percentage = -1;
//            }
//            //use math object
//        },
//        getBudget: function () {
//            return { //return object that it will have multiple values return same time
//                budget: data.budget,
//                totalInc: data.totals.inc, //data.total.inc property
//                totalExp: data.totals.exp,
//                percentage: data.percentage
//            }
//        },
//        testing: function () {
//            console.log(data);
//        }
//    };
//})();
//
//
//var UIController = (function () {
//    var DOMstrings = {
//        inputType: '.add__type',
//        inputDescription: '.add__description',
//        inputValue: '.add__value',
//        inputBtn: '.add__btn',
//        incomeContainer: '.income__list',
//        expensesContainer: '.expenses__list',
//        budgetLabel: '.budget__value',
//        incomeLabel: '.budget__income--value',
//        expensesLabel: '.budget__expenses--value',
//        percentageLabel: '.budget__expenses--percentage',
//        container: '.container'
//
//    };
//    return {
//        getInput: function () {
//            return {
//                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
//                description: document.querySelector(DOMstrings.inputDescription).value,
//                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
//            };
//        },
//        addListItem: function (obj, type) {
//            var html, newHtml, element;
//            //create html string with placeholder text
//            if (type === 'inc') {
//                element = DOMstrings.incomeContainer;
//                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
//            } else if (type === 'exp') {
//                element = DOMstrings.expensesContainer;
//                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">'
//            }
//            //replace the placeholder text with some actual data
//            newHtml = html.replace('%id%', obj.id);
//            newHtml = newHtml.replace('%description%', obj.description);
//            newHtml = newHtml.replace('%value%', obj.value);
//
//            //Insert the HTML into the DOM
//            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
//        },
//        clearFields: function () {
//            var fields, filedsArr;
//            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue); //list not have those methods,so change list into array
//            var fieldsArr = Array.prototype.slice.call(fields);
//            fieldsArr.forEach(function (current, index, array) {
//                current.value = "";
//            });
//            fieldsArr[0].focus();
//        },
//        displayBudget: function (obj) {
//            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
//            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
//            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
//            if (obj.percentage > 0) {
//                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + "%";
//            } else {
//                document.querySelector(DOMstrings.percentageLabel).textContent = '---'
//            }
//
//
//
//        },
//        getDOMstrings: function () {
//            return DOMstrings
//        }
//
//    };
//})();
////GLOBAL APP CONTROLLER
//var controller = (function (budgetCtrl, UICtrl) {
//    var input, newItem;
//    var setupEventListeners = function () {
//        var DOM = UICtrl.getDOMstrings();
//        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
//        document.addEventListener('keypress', function (event) {
//            if (event.keyCode === 13 || event.which === 13) {
//                ctrlAddItem();
//            }
//        });
//
//    };
//    var updateBudget = function () {
//        //1.Calculate the budget
//        budgetCtrl.calculateBudget();
//        //2.retun the budget
//        var budget = budgetCtrl.getBudget();
//        //5.Display the budget on the  UI 
//        console.log(budget);
//        UICtrl.displayBudget(budget);
//    }
//
//    var ctrlAddItem = function () {
//        //1.get filed input data
//        var input = UICtrl.getInput();
//        console.log(input); //nan:not a number
//        if (input.description !== "" && !isNaN(input.value) && input.value > 0) { //verify not input empty description or value
//            //2.Add the item to budget controller
//            var newItem = budgetController.addItem(input.type, input.description, input.value);
//            //3.Add the item to the UI
//            UICtrl.addListItem(newItem, input.type);
//            //4.clear the fields
//            UICtrl.clearFields();
//            //5.Calculate and update the budget
//            updateBudget();
//        }
//
//
//    };
//    return { //make init function public by return
//        init: function () {
//            console.log('Application has started');
//            UICtrl.displayBudget({ //initial total and percentage showing
//                budget: 0, //copy object keys from method dispalyBudget
//                totalInc: 0, //data.total.inc property
//                totalExp: 0,
//                percentage: -1
//            });
//            setupEventListeners();
//        }
//    }
//})(budgetController, UIController);
//
//controller.init();
//////////////////version11 add delte event,and check by budgetController.testing()
//var budgetController = (function () {
//    var Expense = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var Income = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var calculateTotal = function (type) {
//        var sum = 0;
//        data.allItems[type].forEach(function (cur) {
//            //  sum=sum+cur.value;
//            sum += cur.value;
//        });
//        data.totals[type] = sum;
//    };
//
//    var data = { //global for budgetController
//        allItems: {
//            exp: [],
//            inc: []
//        },
//        totals: {
//            exp: 0,
//            inc: 0
//        },
//        budget: 0,
//        percentage: -1 //-1 means something not exisit 
//    };
//    return {
//        addItem: function (type, des, val) {
//            var newItem, ID;
//            //create new ID 
//            if (data.allItems[type].length > 0) {
//                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
//            } else {
//                ID = 0;
//            }
//
//            //create new iem based on 'inc' or 'exp' type
//            if (type === 'exp') {
//                newItem = new Expense(ID, des, val);
//            } else if (type === 'inc') {
//                newItem = new Income(ID, des, val);
//            }
//            //push it into ur data structure 
//            data.allItems[type].push(newItem);
//            //return the new element
//            return newItem;
//        },
//        calculateBudget: function () {
//            //calculate total income and Expense
//            calculateTotal('exp');
//            calculateTotal('inc');
//            //calculate the budget:income-expenses
//            data.budget = data.totals.inc - data.totals.exp;
//            //calculate the percentage of income that we spent
//            if (data.totals.inc > 0) {
//                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
//                console.log(data.percentage);
//            } else {
//                data.percentage = -1;
//            }
//            //use math object
//        },
//        deleteItem: function (type, id) {
//            var ids, index;
//            //id=3
//            //[1 2 4 6 8]
//            //index =3
//            var ids = data.allItems[type].map(function (current) { //map always backw with new array
//                return current.id;
//
//            });
//            index = ids.indexOf(id);
//            if (index !== -1) { //if not exist ,no delete 
//                data.allItems[type].splice(index, 1);
//            }
//        },
//
//        getBudget: function () {
//            return { //return object that it will have multiple values return same time
//                budget: data.budget,
//                totalInc: data.totals.inc, //data.total.inc property
//                totalExp: data.totals.exp,
//                percentage: data.percentage
//            }
//        },
//        testing: function () {
//            console.log(data);
//        }
//    };
//})();
//
//
//var UIController = (function () {
//    var DOMstrings = {
//        inputType: '.add__type',
//        inputDescription: '.add__description',
//        inputValue: '.add__value',
//        inputBtn: '.add__btn',
//        incomeContainer: '.income__list',
//        expensesContainer: '.expenses__list',
//        budgetLabel: '.budget__value',
//        incomeLabel: '.budget__income--value',
//        expensesLabel: '.budget__expenses--value',
//        percentageLabel: '.budget__expenses--percentage',
//        container: '.container'
//
//    };
//    return {
//        getInput: function () {
//            return {
//                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
//                description: document.querySelector(DOMstrings.inputDescription).value,
//                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
//            };
//        },
//        addListItem: function (obj, type) {
//            var html, newHtml, element;
//            //create html string with placeholder text
//            if (type === 'inc') {
//                element = DOMstrings.incomeContainer;
//                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
//            } else if (type === 'exp') {
//                element = DOMstrings.expensesContainer;
//                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">'
//            }
//            //replace the placeholder text with some actual data
//            newHtml = html.replace('%id%', obj.id);
//            newHtml = newHtml.replace('%description%', obj.description);
//            newHtml = newHtml.replace('%value%', obj.value);
//
//            //Insert the HTML into the DOM
//            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
//        },
//        clearFields: function () {
//            var fields, filedsArr;
//            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue); //list not have those methods,so change list into array
//            var fieldsArr = Array.prototype.slice.call(fields);
//            fieldsArr.forEach(function (current, index, array) {
//                current.value = "";
//            });
//            fieldsArr[0].focus();
//        },
//        displayBudget: function (obj) {
//            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
//            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
//            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
//            if (obj.percentage > 0) {
//                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + "%";
//            } else {
//                document.querySelector(DOMstrings.percentageLabel).textContent = '---'
//            }
//
//
//
//        },
//        getDOMstrings: function () {
//            return DOMstrings
//        }
//
//    };
//})();
////GLOBAL APP CONTROLLER
//var controller = (function (budgetCtrl, UICtrl) {
//    var input, newItem;
//    var setupEventListeners = function () {
//        var DOM = UICtrl.getDOMstrings();
//        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
//        document.addEventListener('keypress', function (event) {
//            if (event.keyCode === 13 || event.which === 13) {
//                ctrlAddItem();
//            }
//        });
//        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem); //event bubbling
//    };
//    var updateBudget = function () {
//        //1.Calculate the budget
//        budgetCtrl.calculateBudget();
//        //2.retun the budget
//        var budget = budgetCtrl.getBudget();
//        //5.Display the budget on the  UI 
//        console.log(budget);
//        UICtrl.displayBudget(budget);
//    }
//
//    var ctrlAddItem = function () {
//        //1.get filed input data
//        var input = UICtrl.getInput();
//        console.log(input); //nan:not a number
//        if (input.description !== "" && !isNaN(input.value) && input.value > 0) { //verify not input empty description or value
//            //2.Add the item to budget controller
//            var newItem = budgetController.addItem(input.type, input.description, input.value);
//            //3.Add the item to the UI
//            UICtrl.addListItem(newItem, input.type);
//            //4.clear the fields
//            UICtrl.clearFields();
//            //5.Calculate and update the budget
//            updateBudget();
//        }
//
//
//    }; //different controller sepearted by ;
//
//    var ctrlDeleteItem = function (event) { //cally by event listener
//        var itemID, splitID, type, ID;
//        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
//        //console.log(event.target.parentNode.parentNode.parentNode.parentNode.id);
//        if (itemID) {
//            splitID = itemID.split('-');
//            type = splitID[0]; //first array
//            ID = parseInt(splitID[1]); //second array, string,if not parseint .THIS IS  string make click delete nothing happened,
//            //1.delete the item from data structure
//            budgetCtrl.deleteItem(type, ID);
//            //2.delete the item from UI
//            //3.update and show the new budget
//
//        }
//
//    };
//    return { //make init function public by return
//        init: function () {
//            console.log('Application has started');
//            UICtrl.displayBudget({ //initial total and percentage showing
//                budget: 0, //copy object keys from method dispalyBudget
//                totalInc: 0, //data.total.inc property
//                totalExp: 0,
//                percentage: -1
//            });
//            setupEventListeners();
//        }
//    }
//})(budgetController, UIController);
//
//controller.init();
//////////////////version11 add delte event in data structure first,and check by budgetController.testing()
//var budgetController = (function () {
//    var Expense = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var Income = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var calculateTotal = function (type) {
//        var sum = 0;
//        data.allItems[type].forEach(function (cur) {
//            //  sum=sum+cur.value;
//            sum += cur.value;
//        });
//        data.totals[type] = sum;
//    };
//
//    var data = { //global for budgetController
//        allItems: {
//            exp: [],
//            inc: []
//        },
//        totals: {
//            exp: 0,
//            inc: 0
//        },
//        budget: 0,
//        percentage: -1 //-1 means something not exisit 
//    };
//    return {
//        addItem: function (type, des, val) {
//            var newItem, ID;
//            //create new ID 
//            if (data.allItems[type].length > 0) {
//                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
//            } else {
//                ID = 0;
//            }
//
//            //create new iem based on 'inc' or 'exp' type
//            if (type === 'exp') {
//                newItem = new Expense(ID, des, val);
//            } else if (type === 'inc') {
//                newItem = new Income(ID, des, val);
//            }
//            //push it into ur data structure 
//            data.allItems[type].push(newItem);
//            //return the new element
//            return newItem;
//        },
//        calculateBudget: function () {
//            //calculate total income and Expense
//            calculateTotal('exp');
//            calculateTotal('inc');
//            //calculate the budget:income-expenses
//            data.budget = data.totals.inc - data.totals.exp;
//            //calculate the percentage of income that we spent
//            if (data.totals.inc > 0) {
//                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
//                console.log(data.percentage);
//            } else {
//                data.percentage = -1;
//            }
//            //use math object
//        },
//        deleteItem: function (type, id) {
//            var ids, index;
//            //id=3
//            //[1 2 4 6 8]
//            //index =3
//            var ids = data.allItems[type].map(function (current) { //map always backw with new array
//                return current.id;
//
//            });
//            index = ids.indexOf(id);
//            if (index !== -1) { //if not exist ,no delete 
//                data.allItems[type].splice(index, 1);
//            }
//        },
//
//        getBudget: function () {
//            return { //return object that it will have multiple values return same time
//                budget: data.budget,
//                totalInc: data.totals.inc, //data.total.inc property
//                totalExp: data.totals.exp,
//                percentage: data.percentage
//            }
//        },
//        testing: function () {
//            console.log(data);
//        }
//    };
//})();
//
//
//var UIController = (function () {
//    var DOMstrings = {
//        inputType: '.add__type',
//        inputDescription: '.add__description',
//        inputValue: '.add__value',
//        inputBtn: '.add__btn',
//        incomeContainer: '.income__list',
//        expensesContainer: '.expenses__list',
//        budgetLabel: '.budget__value',
//        incomeLabel: '.budget__income--value',
//        expensesLabel: '.budget__expenses--value',
//        percentageLabel: '.budget__expenses--percentage',
//        container: '.container'
//
//    };
//    return {
//        getInput: function () {
//            return {
//                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
//                description: document.querySelector(DOMstrings.inputDescription).value,
//                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
//            };
//        },
//        addListItem: function (obj, type) {
//            var html, newHtml, element;
//            //create html string with placeholder text
//            if (type === 'inc') {
//                element = DOMstrings.incomeContainer;
//                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
//            } else if (type === 'exp') {
//                element = DOMstrings.expensesContainer;
//                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">'
//            }
//            //replace the placeholder text with some actual data
//            newHtml = html.replace('%id%', obj.id);
//            newHtml = newHtml.replace('%description%', obj.description);
//            newHtml = newHtml.replace('%value%', obj.value);
//
//            //Insert the HTML into the DOM
//            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
//        },
//        clearFields: function () {
//            var fields, filedsArr;
//            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue); //list not have those methods,so change list into array
//            var fieldsArr = Array.prototype.slice.call(fields);
//            fieldsArr.forEach(function (current, index, array) {
//                current.value = "";
//            });
//            fieldsArr[0].focus();
//        },
//        displayBudget: function (obj) {
//            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
//            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
//            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
//            if (obj.percentage > 0) {
//                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + "%";
//            } else {
//                document.querySelector(DOMstrings.percentageLabel).textContent = '---'
//            }
//
//
//
//        },
//        getDOMstrings: function () {
//            return DOMstrings
//        }
//
//    };
//})();
////GLOBAL APP CONTROLLER
//var controller = (function (budgetCtrl, UICtrl) {
//    var input, newItem;
//    var setupEventListeners = function () {
//        var DOM = UICtrl.getDOMstrings();
//        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
//        document.addEventListener('keypress', function (event) {
//            if (event.keyCode === 13 || event.which === 13) {
//                ctrlAddItem();
//            }
//        });
//        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem); //event bubbling
//    };
//    var updateBudget = function () {
//        //1.Calculate the budget
//        budgetCtrl.calculateBudget();
//        //2.retun the budget
//        var budget = budgetCtrl.getBudget();
//        //5.Display the budget on the  UI 
//        console.log(budget);
//        UICtrl.displayBudget(budget);
//    }
//
//    var ctrlAddItem = function () {
//        //1.get filed input data
//        var input = UICtrl.getInput();
//        console.log(input); //nan:not a number
//        if (input.description !== "" && !isNaN(input.value) && input.value > 0) { //verify not input empty description or value
//            //2.Add the item to budget controller
//            var newItem = budgetController.addItem(input.type, input.description, input.value);
//            //3.Add the item to the UI
//            UICtrl.addListItem(newItem, input.type);
//            //4.clear the fields
//            UICtrl.clearFields();
//            //5.Calculate and update the budget
//            updateBudget();
//        }
//
//
//    }; //different controller sepearted by ;
//
//    var ctrlDeleteItem = function (event) { //cally by event listener
//        var itemID, splitID, type, ID;
//        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
//        //console.log(event.target.parentNode.parentNode.parentNode.parentNode.id);
//        if (itemID) {
//            splitID = itemID.split('-');
//            type = splitID[0]; //first array
//            ID = parseInt(splitID[1]); //second array, string,if not parseint .THIS IS  string make click delete nothing happened,
//            //1.delete the item from data structure
//            budgetCtrl.deleteItem(type, ID);
//            //2.delete the item from UI
//            //3.update and show the new budget
//
//        }
//
//    };
//    return { //make init function public by return
//        init: function () {
//            console.log('Application has started');
//            UICtrl.displayBudget({ //initial total and percentage showing
//                budget: 0, //copy object keys from method dispalyBudget
//                totalInc: 0, //data.total.inc property
//                totalExp: 0,
//                percentage: -1
//            });
//            setupEventListeners();
//        }
//    }
//})(budgetController, UIController);
//
//controller.init();
//////////////////version12 delte item from UI
//var budgetController = (function () {
//    var Expense = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var Income = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var calculateTotal = function (type) {
//        var sum = 0;
//        data.allItems[type].forEach(function (cur) {
//            //  sum=sum+cur.value;
//            sum += cur.value;
//        });
//        data.totals[type] = sum;
//    };
//
//    var data = { //global for budgetController
//        allItems: {
//            exp: [],
//            inc: []
//        },
//        totals: {
//            exp: 0,
//            inc: 0
//        },
//        budget: 0,
//        percentage: -1 //-1 means something not exisit 
//    };
//    return {
//        addItem: function (type, des, val) {
//            var newItem, ID;
//            //create new ID 
//            if (data.allItems[type].length > 0) {
//                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
//            } else {
//                ID = 0;
//            }
//
//            //create new iem based on 'inc' or 'exp' type
//            if (type === 'exp') {
//                newItem = new Expense(ID, des, val);
//            } else if (type === 'inc') {
//                newItem = new Income(ID, des, val);
//            }
//            //push it into ur data structure 
//            data.allItems[type].push(newItem);
//            //return the new element
//            return newItem;
//        },
//        calculateBudget: function () {
//            //calculate total income and Expense
//            calculateTotal('exp');
//            calculateTotal('inc');
//            //calculate the budget:income-expenses
//            data.budget = data.totals.inc - data.totals.exp;
//            //calculate the percentage of income that we spent
//            if (data.totals.inc > 0) {
//                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
//                console.log(data.percentage);
//            } else {
//                data.percentage = -1;
//            }
//            //use math object
//        },
//        deleteItem: function (type, id) {
//            var ids, index;
//            //id=3
//            //[1 2 4 6 8]
//            //index =3
//            var ids = data.allItems[type].map(function (current) { //map always backw with new array
//                return current.id;
//
//            });
//            index = ids.indexOf(id);
//            if (index !== -1) { //if not exist ,no delete 
//                data.allItems[type].splice(index, 1);
//            }
//        },
//
//        getBudget: function () {
//            return { //return object that it will have multiple values return same time
//                budget: data.budget,
//                totalInc: data.totals.inc, //data.total.inc property
//                totalExp: data.totals.exp,
//                percentage: data.percentage
//            }
//        },
//        testing: function () {
//            console.log(data);
//        }
//    };
//})();
//
//
//var UIController = (function () {
//    var DOMstrings = {
//        inputType: '.add__type',
//        inputDescription: '.add__description',
//        inputValue: '.add__value',
//        inputBtn: '.add__btn',
//        incomeContainer: '.income__list',
//        expensesContainer: '.expenses__list',
//        budgetLabel: '.budget__value',
//        incomeLabel: '.budget__income--value',
//        expensesLabel: '.budget__expenses--value',
//        percentageLabel: '.budget__expenses--percentage',
//        container: '.container'
//
//    };
//    return {
//        getInput: function () {
//            return {
//                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
//                description: document.querySelector(DOMstrings.inputDescription).value,
//                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
//            };
//        },
//        addListItem: function (obj, type) {
//            var html, newHtml, element;
//            //create html string with placeholder text
//            if (type === 'inc') {
//                element = DOMstrings.incomeContainer;
//                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
//            } else if (type === 'exp') {
//                element = DOMstrings.expensesContainer;
//                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">'
//            }
//            //replace the placeholder text with some actual data
//            newHtml = html.replace('%id%', obj.id);
//            newHtml = newHtml.replace('%description%', obj.description);
//            newHtml = newHtml.replace('%value%', obj.value);
//
//            //Insert the HTML into the DOM
//            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
//        },
//        deleteListItem: function (seletID) {
//            //can only remove child,so must go parent node first
//            var el = document.getElementById(seletID);
//            el.parentNode.removeChild(el);
//        },
//        clearFields: function () {
//            var fields, filedsArr;
//            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue); //list not have those methods,so change list into array
//            var fieldsArr = Array.prototype.slice.call(fields);
//            fieldsArr.forEach(function (current, index, array) {
//                current.value = "";
//            });
//            fieldsArr[0].focus();
//        },
//        displayBudget: function (obj) {
//            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
//            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
//            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
//            if (obj.percentage > 0) {
//                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + "%";
//            } else {
//                document.querySelector(DOMstrings.percentageLabel).textContent = '---'
//            }
//
//
//
//        },
//        getDOMstrings: function () {
//            return DOMstrings
//        }
//
//    };
//})();
////GLOBAL APP CONTROLLER
//var controller = (function (budgetCtrl, UICtrl) {
//    var input, newItem;
//    var setupEventListeners = function () {
//        var DOM = UICtrl.getDOMstrings();
//        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
//        document.addEventListener('keypress', function (event) {
//            if (event.keyCode === 13 || event.which === 13) {
//                ctrlAddItem();
//            }
//        });
//        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem); //event bubbling
//    };
//    var updateBudget = function () {
//        //1.Calculate the budget
//        budgetCtrl.calculateBudget();
//        //2.retun the budget
//        var budget = budgetCtrl.getBudget();
//        //5.Display the budget on the  UI 
//        console.log(budget);
//        UICtrl.displayBudget(budget);
//    }
//
//    var ctrlAddItem = function () {
//        //1.get filed input data
//        var input = UICtrl.getInput();
//        console.log(input); //nan:not a number
//        if (input.description !== "" && !isNaN(input.value) && input.value > 0) { //verify not input empty description or value
//            //2.Add the item to budget controller
//            var newItem = budgetController.addItem(input.type, input.description, input.value);
//            //3.Add the item to the UI
//            UICtrl.addListItem(newItem, input.type);
//            //4.clear the fields
//            UICtrl.clearFields();
//            //5.Calculate and update the budget
//            updateBudget();
//        }
//
//
//    }; //different controller sepearted by ;
//
//    var ctrlDeleteItem = function (event) { //cally by event listener
//        var itemID, splitID, type, ID;
//        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
//        //console.log(event.target.parentNode.parentNode.parentNode.parentNode.id);
//        if (itemID) {
//            splitID = itemID.split('-');
//            type = splitID[0]; //first array
//            ID = parseInt(splitID[1]); //second array, string,if not parseint .THIS IS  string make click delete nothing happened,
//            //1.delete the item from data structure
//            budgetCtrl.deleteItem(type, ID);
//            //2.delete the item from UI
//            UICtrl.deleteListItem(itemID);
//            //3.update and show the new budget
//            updateBudget();
//        }
//
//    };
//    return { //make init function public by return
//        init: function () {
//            console.log('Application has started');
//            UICtrl.displayBudget({ //initial total and percentage showing
//                budget: 0, //copy object keys from method dispalyBudget
//                totalInc: 0, //data.total.inc property
//                totalExp: 0,
//                percentage: -1
//            });
//            setupEventListeners();
//        }
//    }
//})(budgetController, UIController);
//
//controller.init();
/////////////////version12 delte item from UI and  Updating the Percentages: Budget Controller
//var budgetController = (function () {
//    var Expense = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//        this.percentage = -1;
//    };
//    Expense.prototype.calcPercentage = function (totalIncome) {
//        if (totalIncome > 0) {
//            this.percentage = Math.round((this.value / totalIncome) * 100);
//        } else {
//            this.percentage = -1;
//        }
//    };
//    Expense.prototype.getPercentage = function () {
//        return this.percentage;
//    }
//    var Income = function (id, description, value) { //function constructor first letter capital
//        this.id = id;
//        this.description = description;
//        this.value = value;
//    };
//    var calculateTotal = function (type) {
//        var sum = 0;
//        data.allItems[type].forEach(function (cur) {
//            //  sum=sum+cur.value;
//            sum += cur.value;
//        });
//        data.totals[type] = sum;
//    };
//
//    var data = { //global for budgetController
//        allItems: {
//            exp: [],
//            inc: []
//        },
//        totals: {
//            exp: 0,
//            inc: 0
//        },
//        budget: 0,
//        percentage: -1 //-1 means something not exisit 
//    };
//    return {
//        addItem: function (type, des, val) {
//            var newItem, ID;
//            //create new ID 
//            if (data.allItems[type].length > 0) {
//                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
//            } else {
//                ID = 0;
//            }
//
//            //create new iem based on 'inc' or 'exp' type
//            if (type === 'exp') {
//                newItem = new Expense(ID, des, val);
//            } else if (type === 'inc') {
//                newItem = new Income(ID, des, val);
//            }
//            //push it into ur data structure 
//            data.allItems[type].push(newItem);
//            //return the new element
//            return newItem;
//        },
//        calculateBudget: function () {
//            //calculate total income and Expense
//            calculateTotal('exp');
//            calculateTotal('inc');
//            //calculate the budget:income-expenses
//            data.budget = data.totals.inc - data.totals.exp;
//            //calculate the percentage of income that we spent
//            if (data.totals.inc > 0) {
//                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
//                console.log(data.percentage);
//            } else {
//                data.percentage = -1;
//            }
//            //use math object
//        },
//        calculatePercentages: function () {
//            data.allItems.exp.forEach(function (cur) {
//                cur.calcPercentage(data.totals.inc);
//            });
//        },
//        getPercentage: function () {
//            var allPerc = data.allItems.exp.map(function (cur) {
//                return cur.getPercentage();
//            });
//            return allPerc;
//        },
//        getBudget: function () {
//            return { //return object that it will have multiple values return same time
//                budget: data.budget,
//                totalInc: data.totals.inc, //data.total.inc property
//                totalExp: data.totals.exp,
//                percentage: data.percentage
//            }
//        },
//        deleteItem: function (type, id) {
//            var ids, index;
//            //id=3
//            //[1 2 4 6 8]
//            //index =3
//            var ids = data.allItems[type].map(function (current) { //map always backw with new array
//                return current.id;
//
//            });
//            index = ids.indexOf(id);
//            if (index !== -1) { //if not exist ,no delete 
//                data.allItems[type].splice(index, 1);
//            }
//        },
//
//
//        testing: function () {
//            console.log(data);
//        }
//    };
//})();
//
//
//var UIController = (function () {
//    var DOMstrings = {
//        inputType: '.add__type',
//        inputDescription: '.add__description',
//        inputValue: '.add__value',
//        inputBtn: '.add__btn',
//        incomeContainer: '.income__list',
//        expensesContainer: '.expenses__list',
//        budgetLabel: '.budget__value',
//        incomeLabel: '.budget__income--value',
//        expensesLabel: '.budget__expenses--value',
//        percentageLabel: '.budget__expenses--percentage',
//        container: '.container'
//
//    };
//    return {
//        getInput: function () {
//            return {
//                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
//                description: document.querySelector(DOMstrings.inputDescription).value,
//                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
//            };
//        },
//        addListItem: function (obj, type) {
//            var html, newHtml, element;
//            //create html string with placeholder text
//            if (type === 'inc') {
//                element = DOMstrings.incomeContainer;
//                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
//            } else if (type === 'exp') {
//                element = DOMstrings.expensesContainer;
//                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">'
//            }
//            //replace the placeholder text with some actual data
//            newHtml = html.replace('%id%', obj.id);
//            newHtml = newHtml.replace('%description%', obj.description);
//            newHtml = newHtml.replace('%value%', obj.value);
//
//            //Insert the HTML into the DOM
//            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
//        },
//        deleteListItem: function (seletID) {
//            //can only remove child,so must go parent node first
//            var el = document.getElementById(seletID);
//            el.parentNode.removeChild(el);
//        },
//        clearFields: function () {
//            var fields, filedsArr;
//            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue); //list not have those methods,so change list into array
//            var fieldsArr = Array.prototype.slice.call(fields);
//            fieldsArr.forEach(function (current, index, array) {
//                current.value = "";
//            });
//            fieldsArr[0].focus();
//        },
//        displayBudget: function (obj) {
//            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
//            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
//            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
//            if (obj.percentage > 0) {
//                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + "%";
//            } else {
//                document.querySelector(DOMstrings.percentageLabel).textContent = '---'
//            }
//
//
//
//        },
//        getDOMstrings: function () {
//            return DOMstrings
//        }
//
//    };
//})();
////GLOBAL APP CONTROLLER
//var controller = (function (budgetCtrl, UICtrl) {
//    var input, newItem;
//    var setupEventListeners = function () {
//        var DOM = UICtrl.getDOMstrings();
//        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
//        document.addEventListener('keypress', function (event) {
//            if (event.keyCode === 13 || event.which === 13) {
//                ctrlAddItem();
//            }
//        });
//        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem); //event bubbling
//    };
//    var updateBudget = function () {
//        //1.Calculate the budget
//        budgetCtrl.calculateBudget();
//        //2.retun the budget
//        var budget = budgetCtrl.getBudget();
//        //5.Display the budget on the  UI 
//        console.log(budget);
//        UICtrl.displayBudget(budget);
//    }
//    var updatePercentages = function () {
//        //1.calucuate percentages
//        budgetCtrl.calculatePercentages();
//        //2.read percentages from budget controller
//        var percentages = budgetCtrl.getPercentage();
//        //3.update the UI with the new percentages
//        console.log(percentages);
//    };
//    var ctrlAddItem = function () {
//        //1.get filed input data
//        var input = UICtrl.getInput();
//        console.log(input); //nan:not a number
//        if (input.description !== "" && !isNaN(input.value) && input.value > 0) { //verify not input empty description or value
//            //2.Add the item to budget controller
//            var newItem = budgetController.addItem(input.type, input.description, input.value);
//            //3.Add the item to the UI
//            UICtrl.addListItem(newItem, input.type);
//            //4.clear the fields
//            UICtrl.clearFields();
//            //5.Calculate and update the budget
//            updateBudget();
//            //6.calculate and update percentage
//            updatePercentages();
//        }
//
//
//    }; //different controller sepearted by ;
//
//    var ctrlDeleteItem = function (event) { //cally by event listener
//        var itemID, splitID, type, ID;
//        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
//        //console.log(event.target.parentNode.parentNode.parentNode.parentNode.id);
//        if (itemID) {
//            splitID = itemID.split('-');
//            type = splitID[0]; //first array
//            ID = parseInt(splitID[1]); //second array, string,if not parseint .THIS IS  string make click delete nothing happened,
//            //1.delete the item from data structure
//            budgetCtrl.deleteItem(type, ID);
//            //2.delete the item from UI
//            UICtrl.deleteListItem(itemID);
//            //3.update and show the new budget
//            updateBudget();
//            //4.calculate and update percentage
//            updatePercentages();
//        }
//
//    };
//    return { //make init function public by return
//        init: function () {
//            console.log('Application has started');
//            UICtrl.displayBudget({ //initial total and percentage showing
//                budget: 0, //copy object keys from method dispalyBudget
//                totalInc: 0, //data.total.inc property
//                totalExp: 0,
//                percentage: -1
//            });
//            setupEventListeners();
//        }
//    }
//})(budgetController, UIController);
//
//controller.init();

/////////////////version13 Updating the Percentages: UI Controller
var budgetController = (function () {
    var Expense = function (id, description, value) { //function constructor first letter capital
        this.id = id;
        this.description = description;
        this.value = value;
        this.percentage = -1;
    };
    Expense.prototype.calcPercentage = function (totalIncome) {
        if (totalIncome > 0) {
            this.percentage = Math.round((this.value / totalIncome) * 100);
        } else {
            this.percentage = -1;
        }
    };
    Expense.prototype.getPercentage = function () {
        return this.percentage;
    }
    var Income = function (id, description, value) { //function constructor first letter capital
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (cur) {
            //  sum=sum+cur.value;
            sum += cur.value;
        });
        data.totals[type] = sum;
    };

    var data = { //global for budgetController
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1 //-1 means something not exisit 
    };
    return {
        addItem: function (type, des, val) {
            var newItem, ID;
            //create new ID 
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }

            //create new iem based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }
            //push it into ur data structure 
            data.allItems[type].push(newItem);
            //return the new element
            return newItem;
        },
        calculateBudget: function () {
            //calculate total income and Expense
            calculateTotal('exp');
            calculateTotal('inc');
            //calculate the budget:income-expenses
            data.budget = data.totals.inc - data.totals.exp;
            //calculate the percentage of income that we spent
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
                console.log(data.percentage);
            } else {
                data.percentage = -1;
            }
            //use math object
        },
        calculatePercentages: function () {
            data.allItems.exp.forEach(function (cur) {
                cur.calcPercentage(data.totals.inc);
            });
        },
        getPercentage: function () {
            var allPerc = data.allItems.exp.map(function (cur) {
                return cur.getPercentage();
            });
            return allPerc;
        },
        getBudget: function () {
            return { //return object that it will have multiple values return same time
                budget: data.budget,
                totalInc: data.totals.inc, //data.total.inc property
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        },
        deleteItem: function (type, id) {
            var ids, index;
            //id=3
            //[1 2 4 6 8]
            //index =3
            var ids = data.allItems[type].map(function (current) { //map always backw with new array
                return current.id;

            });
            index = ids.indexOf(id);
            if (index !== -1) { //if not exist ,no delete 
                data.allItems[type].splice(index, 1);
            }
        },


        testing: function () {
            console.log(data);
        }
    };
})();


var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage'

    };
    var formatNumber = function (num, type) { //private function
        num = Math.abs(num);
        num = num.toFixed(2);
        numSplit = num.split('.')
        int = numSplit[0];
        if (int.length > 3) {
            int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, int.length);
        }
        dec = numSplit[1];
        //type==='exp'?sign='-':sign='+';
        //return type+''+int+dec;
        return (type === 'exp' ? '-' : '+') + '' + int + '.' + dec;
    };
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, //will be either inc or exp
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            };
        },
        addListItem: function (obj, type) {
            var html, newHtml, element;
            //create html string with placeholder text
            if (type === 'inc') {
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            } else if (type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete">'
            }
            //replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            // newHtml = newHtml.replace('%value%', this.formatNumber(obj.value,type));//if formatNumber function is in return as public
            newHtml = newHtml.replace('%value%', formatNumber(obj.value, type));


            //Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        deleteListItem: function (seletID) {
            //can only remove child,so must go parent node first
            var el = document.getElementById(seletID);
            el.parentNode.removeChild(el);
        },
        clearFields: function () {
            var fields, filedsArr;
            fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue); //list not have those methods,so change list into array
            var fieldsArr = Array.prototype.slice.call(fields);
            fieldsArr.forEach(function (current, index, array) {
                current.value = "";
            });
            fieldsArr[0].focus();
        },
        displayBudget: function (obj) {
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp;
            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + "%";
            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '---'
            }

        },
        displayPercentages: function (percentages) { //percentages will a array
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel); //nodelist
            var nodeListForEach = function (list, callback) {
                for (var i = 0; i < list.length; i++) {
                    callback(list[i], i);
                }
            };
            nodeListForEach(fields, function (current, index) {
                if (percentages[index] > 0) {
                    current.textContent = percentages[index] + '%';
                } else {
                    current.textContent = '---';
                }
            });
        },

        getDOMstrings: function () {
            return DOMstrings
        }

    };
})();
//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
    var input, newItem;
    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMstrings();
        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem); //event bubbling
    };
    var updateBudget = function () {
        //1.Calculate the budget
        budgetCtrl.calculateBudget();
        //2.retun the budget
        var budget = budgetCtrl.getBudget();
        //5.Display the budget on the  UI 
        console.log(budget);
        UICtrl.displayBudget(budget);
    }
    var updatePercentages = function () {
        //1.calucuate percentages
        budgetCtrl.calculatePercentages();
        //2.read percentages from budget controller
        var percentages = budgetCtrl.getPercentage();
        //3.update the UI with the new percentages
        UICtrl.displayPercentages(percentages);
    };
    var ctrlAddItem = function () {
        //1.get filed input data
        var input = UICtrl.getInput();
        console.log(input); //nan:not a number
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) { //verify not input empty description or value
            //2.Add the item to budget controller
            var newItem = budgetController.addItem(input.type, input.description, input.value);
            //3.Add the item to the UI
            UICtrl.addListItem(newItem, input.type);
            //4.clear the fields
            UICtrl.clearFields();
            //5.Calculate and update the budget
            updateBudget();
            //6.calculate and update percentage
            updatePercentages();
        }


    }; //different controller sepearted by ;

    var ctrlDeleteItem = function (event) { //cally by event listener
        var itemID, splitID, type, ID;
        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;
        //console.log(event.target.parentNode.parentNode.parentNode.parentNode.id);
        if (itemID) {
            splitID = itemID.split('-');
            type = splitID[0]; //first array
            ID = parseInt(splitID[1]); //second array, string,if not parseint .THIS IS  string make click delete nothing happened,
            //1.delete the item from data structure
            budgetCtrl.deleteItem(type, ID);
            //2.delete the item from UI
            UICtrl.deleteListItem(itemID);
            //3.update and show the new budget
            updateBudget();
            //4.calculate and update percentage
            updatePercentages();
        }

    };
    return { //make init function public by return
        init: function () {
            console.log('Application has started');
            UICtrl.displayBudget({ //initial total and percentage showing
                budget: 0, //copy object keys from method dispalyBudget
                totalInc: 0, //data.total.inc property
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    }
})(budgetController, UIController);

controller.init();
