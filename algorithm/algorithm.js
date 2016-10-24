'use strict'

const algorithm = {
  // 冒泡排序
  bubble(arr) {
    let len = arr.length

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }

    return arr
  },
  // 更好的冒泡
  betterBubble(arr) {
    let len = arr.length

    for (let i = 0; i < len; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j]
          arr[j] = arr[j + 1]
          arr[j + 1] = temp
        }
      }
    }

    return arr
  },
  // 选择排序
  select(arr) {
    let minIndex = 0, len = arr.length;

    for (let i = 0; i < len; i++) {
      minIndex = i
      for (let j = i; j < len; j++) {
        if (arr[minIndex] > arr[j]) {
          minIndex = j
        }
      }
      let temp = arr[minIndex]
      arr[minIndex] = arr[i]
      arr[i] = temp
    }

    return arr
  },
  // 插入排序
  insert(arr) {
    let len = arr.length, temp, j;
    for (let i = 1; i < len; i++) {
      temp = arr[i], j = i;
      while (j > 0 && arr[j - 1] > temp) {
        arr[j] = arr[j - 1]
        j--
      }
      arr[j] = temp
    }
    return arr
  },
  // 归并排序
  mergeRec(arr) {
    if (arr.length === 1) {
      return arr
    }

    let midIndex = Math.round(arr.length / 2)
    let left = arr.slice(0, midIndex)
    let right = arr.slice(midIndex)

    return merge(this.mergeRec(left), this.mergeRec(right))
  },
  // 快速排序
  quick(arr) {
    if (arr.length <= 1) {
      return arr
    }

    let left = [], right = [], index = 0;
    let base = arr.splice(0, 1)[0];

    while (index < arr.length) {
      if (arr[index] < base) {
        left.push(arr[index])
      }
      else {
        right.push(arr[index])
      }
      index++
    }

    return this.quick(left).concat([base], this.quick(right))
  },
  // 桶排序
  bucket(arr) {
    let max = arr[0], res = [];
    for (let i = 1; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i]
      }
    }

    let temp = (new Array(max + 1)).fill(0)
    for (let i = 0; i < arr.length; i++) {
      temp[arr[i]]++ 
    }

    for (let i = 0; i < temp.length; i++) {
      while (temp[i]--) {
        res.push(i)
      }
    }

    return res
  }
}

// 合并数组
function merge(left, right) {
  let res = []
  let i = 0, j = 0;
  while (i < left.length && j < right.length) {
    left[i] < right[j] ? res.push(left[i++]) : res.push(right[j++])
  }

  while (i < left.length) {
    res.push(left[i++])
  }
  while (j < right.length) {
    res.push(right[j++])
  }

  return res
}

module.exports = algorithm