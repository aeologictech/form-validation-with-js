/**
 * Created by sahil on 27/9/18.
 */

function getFormElements(formName){
    console.clear();
    var elements = document.forms[formName].elements;

    var obj = document.forms[formName];
    var checkboxes = [];
    var radiobtns = [];
    var radioFlag=false;
    var checkFlag=false;

    for (var i = 0; i < obj.childNodes.length; i++) {

        if(obj.childNodes[i].tagName == 'INPUT' && obj.childNodes[i].type == 'checkbox') {
            checkboxes = document.getElementsByName(obj.childNodes[i].name);
        }

        if(obj.childNodes[i].tagName == 'INPUT' && obj.childNodes[i].type == 'radio') {
            radiobtns = document.getElementsByName(obj.childNodes[i].name);
        }
    }

    for (var i = 0; i < obj.childNodes.length; i++) {

        switch(obj.childNodes[i].tagName) {

            case "INPUT" :

                switch(obj.childNodes[i].type) {
                    case "text" :


                        if ( (" " + obj.childNodes[i].className + " ").replace(/[\n\t]/g, " ").indexOf(" jb-pancard ") > -1 ) {


                            var node = document.querySelector(".jb-pancard");
                            var ele = document.createElement("div");
                            ele.innerHTML = '';
                            node.parentNode.insertBefore(ele, node.nextSibling);
                            node.parentNode. removeChild(ele);

                            if(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(obj.childNodes[i].value) == false) {

                                ele = document.createElement("div");
                                ele.innerHTML = '<label class="errorPanCard" style="color:#FF0000">Invalid Pan Card</label>';
                                node.parentNode.insertBefore(ele, node.nextSibling);
                                obj.childNodes[i].focus();
                                return false;
                            }
                        }

                        if ( (" " + obj.childNodes[i].className + " ").replace(/[\n\t]/g, " ").indexOf(" jb-debitcard ") > -1 ) {


                            var node = document.querySelector(".jb-debitcard");
                            var ele = document.createElement("div");
                            ele.innerHTML = '';
                            node.parentNode.insertBefore(ele, node.nextSibling);
                            node.parentNode. removeChild(ele);

                            if(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(obj.childNodes[i].value) == false) {

                                ele = document.createElement("div");
                                ele.innerHTML = '<label class="errorDebitCard" style="color:#FF0000">Invalid Debit Card</label>';
                                node.parentNode.insertBefore(ele, node.nextSibling);
                                obj.childNodes[i].focus();
                                return false;
                            }
                        }

                        if ( (" " + obj.childNodes[i].className + " ").replace(/[\n\t]/g, " ").indexOf(" jb-creditcard ") > -1 ) {


                            var node = document.querySelector(".jb-creditcard");
                            var ele = document.createElement("div");
                            ele.innerHTML = '';
                            node.parentNode.insertBefore(ele, node.nextSibling);
                            node.parentNode. removeChild(ele);

                            if(/^([a-zA-Z]){5}([0-9]){4}([a-zA-Z]){1}?$/.test(obj.childNodes[i].value) == false) {

                                ele = document.createElement("div");
                                ele.innerHTML = '<label class="errorCreditCard" style="color:#FF0000">Invalid Credit Card</label>';
                                node.parentNode.insertBefore(ele, node.nextSibling);
                                obj.childNodes[i].focus();
                                return false;
                            }
                        }

                        if ( (" " + obj.childNodes[i].className + " ").replace(/[\n\t]/g, " ").indexOf(" jb-passport ") > -1 ) {


                            var regPassport =/^[A-PR-WY][1-9]\d\s?\d{4}[1-9]$/;
                            var node = document.querySelector(".jb-passport");
                            var ele = document.createElement("div");
                            ele.innerHTML = '';
                            node.parentNode.insertBefore(ele, node.nextSibling);
                            node.parentNode. removeChild(ele);

                            if (regPassport.test(obj.childNodes[i].value) == false) {

                                ele = document.createElement("div");
                                ele.innerHTML = '<label class="errorPassport" style="color:#FF0000">Invalid Passport</label>';
                                node.parentNode.insertBefore(ele, node.nextSibling);
                                obj.childNodes[i].focus();
                                return false;
                            }
                        }

                        break;

                    case "number" :

                        var node = document.querySelector(".jb-contact");
                        var ele = document.createElement("div");
                        ele.innerHTML = '';
                        node.parentNode.insertBefore(ele, node.nextSibling);
                        node.parentNode. removeChild(ele);

                        if(obj.childNodes[i].value != '' && (!(obj.childNodes[i].value.match('[0-9]{10}')))) {

                            ele = document.createElement("div");
                            ele.innerHTML = '<label class="errorContact" style="color:#FF0000">Invalid Contact Number</label>';
                            node.parentNode.insertBefore(ele, node.nextSibling);
                            obj.childNodes[i].focus();
                            return false;
                        }
                        break;

                    case "file" :
                        break;

                    case "email" :

                        var node = document.querySelector(".jb-email");
                        var ele = document.createElement("div");
                        ele.innerHTML = '';
                        node.parentNode.insertBefore(ele, node.nextSibling);
                        node.parentNode. removeChild(ele);


                        if(obj.childNodes[i].value != '' && /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/.test(obj.childNodes[i].value) == false) {

                            ele = document.createElement("div");
                            ele.innerHTML = '<label class="errorEmail" style="color:#FF0000">Invalid Email Address</label>';
                            node.parentNode.insertBefore(ele, node.nextSibling);
                            obj.childNodes[i].focus();
                            return false;
                        }
                        break;

                    case "checkbox" :
                        checkFlag = false;
                        var node = document.querySelector(".jb-checkbox");
                        var ele = document.createElement("div");
                        ele.innerHTML = '';
                        node.parentNode.insertBefore(ele, node.nextSibling);
                        node.parentNode. removeChild(ele);

                        for(var idx=0,l=checkboxes.length;idx<l;idx++)
                        {
                            if(checkboxes [idx].checked)
                            {
                                checkFlag=true;
                                break;
                            }
                        }

                        if(!checkFlag) {
                            console.log("Thank you for checking a checkbox");

                            ele = document.createElement("div");
                            ele.innerHTML = '<label class="errorCheckBox" style="color:#FF0000">Required</label>';
                            node.parentNode.insertBefore(ele, node.nextSibling);
                            obj.childNodes[i].focus();
                            return false;
                        }
                        break;

                    case "radio" :

                        var node = document.querySelector(".jb-radio");
                        var ele = document.createElement("div");
                        ele.innerHTML = '';
                        node.parentNode.insertBefore(ele, node.nextSibling);
                        node.parentNode. removeChild(ele);

                        for(var idx=0,l=radiobtns.length;idx<l;idx++)
                        {
                            if(radiobtns [idx].checked)
                            {
                                radioFlag=true;
                                break;
                            }
                        }

                        if(!radioFlag) {
                            console.log("Thank you for checking a checkbox");

                            ele = document.createElement("div");
                            ele.innerHTML = '<label class="errorRadioBtn" style="color:#FF0000">Required</label>';
                            node.parentNode.insertBefore(ele, node.nextSibling);
                            obj.childNodes[i].focus();
                            return false;
                        }
                        break;
                }
                break;
            case "SELECT" :
                break;

            case "TEXTAREA" :
                break;
        }
        // console.log(elements[i]);
    }
}

