export function formatDate(date, str) {
  let y = date.getFullYear();
  let M = date.getMonth();
  let d = date.getDay();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  // 使用正则表达式来进行匹配
  if (/(y+)/.test(str)) {
    str = str.replace(RegExp.$1, ('' + y).substr(4 - RegExp.$1.length));
  }
  let o = {
    'M+': M + 1,
    'd+': d,
    'h+': h,
    'm+': m,
    's+': s
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(str)) {
      let strt = o[k] + '';
      str = str.replace(RegExp.$1, (RegExp.$1.length === 1 ? strt : padLeftZero(strt)));
    }
  }
  return str;
}

function padLeftZero (str) {
  return ('00' + str).substr(str.length);
}
