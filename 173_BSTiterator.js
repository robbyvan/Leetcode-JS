function BSTIterator(node){
  this.root = node;
  this.curr = node;
  this.stack = [];
  while (this.curr !== null){
    this.stack.push(this.curr);
    this.curr = this.curr.left;
  }
}
BSTIterator.prototype = {
  hasNext: function(){
    if (this.stack.length > 0){
      return true;
    }else{
      return false;
    }
  },
  next: function(){
    if (this.stack.length > 0){
      this.curr = this.stack.pop();
      var temp = this.curr.right;
      while (temp !== null){
        this.stack.push(temp);
        temp = temp.left;
      }
      return this.curr.val;
    }else{
      return null;
    }
  }
}