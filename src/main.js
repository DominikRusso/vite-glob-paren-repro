const escaped = import.meta.glob("./\\(dir\\)/*.js", { eager: true })
const unescaped = import.meta.glob("./(dir)/*.js", { eager: true })

document.querySelector('#app').innerHTML = `
  <div>
    escaped: ${Object.keys(escaped)}
  </div>
  <div>
    unescaped: ${Object.keys(unescaped)}
  </div>
`
