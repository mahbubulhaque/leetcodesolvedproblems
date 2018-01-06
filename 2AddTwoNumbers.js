/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// here we cant implement this listnode as they've already done that 
// if we do implement listnode, then it doesn't match the output format
// it returns object object instead of their answer format
// function ListNode(val) {
//     this.val = val;
//     this.next = null;
// }
function List(){
    this._length = 0;
    this.head = null;
}
List.prototype.addNode = function (value) {
    var node = new ListNode(value),
        currentNode = this.head;
    
    // check if List is empty
    if(!currentNode) {
        this.head = node;
        this._length++;
        return node;
    }
    // if List isn't empty then insert the node in the end
    while(currentNode.next){
        currentNode = currentNode.next;        
    }
    currentNode.next = node;
    this._length++;
    return node;
}
List.prototype.getNode = function(position) {
    var currentNode = this.head,
        length = this._length,
        count = 1,
        message = {failure: 'Invalid position'};
    
    // check if position is valid or not
    if(length === 0 || position <1 || position > length) {
        throw new Error(message.failure);
    }
    while (count < position){
        currentNode = currentNode.next;
        count++;
    }
    return currentNode;
}
var addTwoNumbers = function(l1, l2) {
    var carry=0,
        sum = 0,
        resultList = new List();
           
    while (!!l1 || !!l2 || carry>0){
        sum = 0;
        if(!!l1){
            sum += l1.val;
            l1 = l1.next;
        }
        if(!!l2){
            sum += l2.val;
            l2 = l2.next;
        }
        if(!!carry){
            sum += carry;
        }
        if(sum>9){
            carry = 1;
        } else {
            carry = 0;
        }
        resultList.addNode(sum%10);
    }
    return resultList.head;
};

//var l1 = new List();
//l1.addNode(2);
//l1.addNode(4);
//l1.addNode(3);
//var l2 = new List();
//l2.addNode(5);
//l2.addNode(6);
//l2.addNode(4);
//addTwoNumbers(l1.head,l2.head);
