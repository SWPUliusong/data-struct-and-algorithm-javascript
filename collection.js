'use strict'

function Collection() {
  this.data = {}
  this.index = 0  //遍历器标志
}

Collection.prototype = {
  has(val) {
    val += (typeof val)
    return this.data.hasOwnProperty(val)
  },
  add(val) {
    // 消除对象键只能是string带来的差异
    let key = val + (typeof val)
    key in this.data || (this.data[key] = val)
    return this
  },
  remove(val) {
    val += (typeof val)
    if (this.has(val)) {
      delete this.data[val]
      return true
    }
    return false
  },
  clear() {
    this.data = {}
  },
  get size(){
    return Object.keys(this.data).length
  },
  get values() {
    let res = []
    let keys = Object.keys(this.data)
    for (let i = 0; i < keys.length; i++) {
      res.push(this.data[keys[i]])
    }
    return res
  }
}

module.exports = Collection