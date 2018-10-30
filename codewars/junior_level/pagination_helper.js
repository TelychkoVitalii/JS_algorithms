function PaginationHelper(collection, itemsPerPage){
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.itemCount = function() {
  return this.collection.length;
};

PaginationHelper.prototype.showPages = function() {
  let i, newArr = [], size = this.collection.length;
  for(i = 0; i < size; i += this.itemsPerPage) {
    newArr.push(this.collection.slice(i, i + this.itemsPerPage));
  }
  return newArr;
};

PaginationHelper.prototype.pageCount = function() {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

PaginationHelper.prototype.pageItemCount = function(pageIndex) {
  return this.showPages()[pageIndex] ? this.showPages()[pageIndex].length : -1;
};

PaginationHelper.prototype.pageIndex = function(itemIndex) {
  let i, size = this.pageCount(), item = this.collection[itemIndex], result;
  for(i = 0; i < size; i += 1) {
    if(this.showPages()[i].includes(item)) return i;
  }
  return -1;
};

const helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
helper.pageIndex(5);