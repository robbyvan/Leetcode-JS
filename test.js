function BSTIterator(root){
  this.root = root;
  this.curr = root;
  this.stack = [];
  while (this.curr !== null){
    this.stack.push(this.curr);
    this.curr = this.left;
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
  Next: function(){
    if (this.stack.length > 0){
      this.curr = this.stack.pop();
      while (this.curr.left !== null){
        this.stack.push(this.curr);
        this.curr = this.curr.left;
      }
      if (this.curr.right !== null){
        this.stack.push(this.curr.right);
      }
      return this.curr.val;
    }else{
      return null;
    }
  }
}