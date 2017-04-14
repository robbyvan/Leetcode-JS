/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = (path) => {
  let dirs = path.split('/');
  let res = [];

  for (let i = 0; i < dirs.length; ++i) {
    switch (dirs[i]) {
      case '.':
        break;
      case '':
        break;
      case '..':
        res.pop();
        break;
      default: 
        res.push(dirs[i]);
    }
  }
  
  let simplePath = '/';
  for (let i = 0; i < res.length - 1; ++i){
    simplePath += res[i] + '/';
  }
  return res.length === 0? simplePath: simplePath += res[res.length-1];
};