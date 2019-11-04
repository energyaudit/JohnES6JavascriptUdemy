// GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

//    var setupEventListeners = function() {
//        var DOM = UICtrl.getDOMstrings();
//
//        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event) {
            console.log(event);
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });

//        document.querySelector(DOM.container).addEventListener('click', ctrlDeleteItem);
//
//        document.querySelector(DOM.inputType).addEventListener('change', UICtrl.changedType);        
    };
})(budgetController, UIController);