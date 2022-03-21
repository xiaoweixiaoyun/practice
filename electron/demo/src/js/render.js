let fs = require('fs')

let i = 1
let btn = document.querySelector('button')
btn.onclick = function() {
    i++
    fs.writeFile(`input${i}.txt`, '写入数据进入文件', (err) => {
        if (err) {
            console.log(err)
        } else {
            console.log('写入完毕')
        }
    })
}