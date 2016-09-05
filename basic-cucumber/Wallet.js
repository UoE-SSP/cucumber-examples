function Wallet() {
  this.total = 0;
};

Wallet.prototype.add = function(num) {
  this.total += parseInt(num, 10);
};

Wallet.prototype.remove = function(num) {
  if (this.total >= num) {
    this.total -= parseInt(num, 10);
  } else {
    throw new Error(`Don't have enough money to remove ${num}`);
  }
};

Wallet.prototype.getTotal = function() {
  return this.total;
};


module.exports = Wallet;
