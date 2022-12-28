// Write your solution in this file!
 const employee = {
    name:"",
    streetAddress:"",
 };
function updateEmployeeWithKeyAndValue(employee,key,value){
    return {
        ...employee,
        [key]:value,
    }
};
 
const newEmployee = updateEmployeeWithKeyAndValue(employee,"streetAddress","11 Broadway");
//
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key]=value;
    return employee ;
}
    function deleteFromEmployeeByKey(employee, key){
    var clone = {...employee};
    delete clone[key]
    return clone
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}












