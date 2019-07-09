/**
 * 交通红黄绿等
 * 绿灯亮 5 秒，黄灯亮 2 秒，红灯亮 3 秒
 * 循环执行一分钟
 */

let intervalId, curTime = Date.now()

const sleep = (duration) => {
  return new Promise((resolve, reject) => {
    setTimeout(resolve, duration)
  })
}

const replaceColor = (color) => {
  const light = document.getElementById('light')
  light.className = light.className.replace(/(background-).*/, `$1${color}`)
}

async function timing(millisecond) {
  clearInterval(intervalId)
  const elem = document.getElementById('seconds')
  let seconds = millisecond / 1000
  elem.innerText = seconds-- + 's'
  intervalId = setInterval(() => {
    elem.innerText = seconds-- + 's'
  }, 1000)
  await sleep(millisecond)
}

async function main() {
  if (Date.now() - 60000 > curTime) {
    return clearInterval(intervalId)
  }
  replaceColor('green')
  await timing(5000)
  replaceColor('yellow')
  await timing(2000)
  replaceColor('red')
  await timing(3000)
  main()
}

main()
