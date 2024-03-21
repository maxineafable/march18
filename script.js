const bRows = document.querySelectorAll('.b')
const iRows = document.querySelectorAll('.i')
const nRows = document.querySelectorAll('.n')
const gRows = document.querySelectorAll('.g')
const oRows = document.querySelectorAll('.o')

let bLetter = false
let iLetter = false
let nLetter = false
let gLetter = false
let oLetter = false

const allNumbers = []
const winningNumbers = []

function rollNewNumber(maxNumber) {
  while (!bLetter || !iLetter || !nLetter || !gLetter || !oLetter) {
    let randomValue = Math.floor(Math.random() * maxNumber) + 1
    if (!allNumbers.includes(randomValue)) {
      allNumbers.push(randomValue)
    }
    let count = allNumbers.length
    // console.log(`ALL: ${allNumbers}`)
    // console.log(allNumbers)

    bRows.forEach((bRow) => {
      let bNum = Number(bRow.textContent)
      if (bNum === randomValue) {
        bLetter = true
        console.log(`${randomValue} is in B`)
        if (!winningNumbers.includes(bNum)) {
          winningNumbers.push(bNum)
        }
        bRow.style.color = 'orange'
      }
    })

    iRows.forEach(iRow => {
      let iNum = Number(iRow.textContent)
      if (iNum === randomValue) {
        iLetter = true
        console.log(`${randomValue} is in I`)
        if (!winningNumbers.includes(iNum)) {
          winningNumbers.push(iNum)
        }
        iRow.style.color = 'orange'
      }
    })

    nRows.forEach(nRow => {
      let nNum = Number(nRow.textContent)
      if (nNum === randomValue) {
        nLetter = true
        console.log(`${randomValue} is in N`)
        if (!winningNumbers.includes(nNum)) {
          winningNumbers.push(nNum)
        }
        nRow.style.color = 'orange'
      }
    })

    gRows.forEach(gRow => {
      let gNum = Number(gRow.textContent)
      if (gNum === randomValue) {
        gLetter = true
        console.log(`${randomValue} is in G`)
        if (!winningNumbers.includes(gNum)) {
          winningNumbers.push(gNum)
        }
        gRow.style.color = 'orange'
      }
    })

    oRows.forEach(oRow => {
      const oNum = Number(oRow.textContent)
      if (oNum === randomValue) {
        oLetter = true
        console.log(`${randomValue} is in O`)
        if (!winningNumbers.includes(oNum)) {
          winningNumbers.push(oNum)
        }
        oRow.style.color = 'orange'
      }
    })

    if (bLetter && iLetter && nLetter && gLetter && oLetter) {
      console.log('BINGO')
      console.log(`Winning #: ${winningNumbers}`)
      console.log(`Roll Count: ${count}`)
      break
    }
  }
}

function renderRandomNumbers(arrayElement, min, max) {
  let randomSet = new Set
  let randomArray
  arrayElement.forEach((element, index) => {
    while (randomSet.size < arrayElement.length) {
      randomSet.add(Math.floor(Math.random() * (max - min)) + min)
    }
    randomArray = [...randomSet]
    element.textContent = randomArray[index]
  })
}

function renderBingo() {
  renderRandomNumbers(bRows, 1, 15)
  renderRandomNumbers(iRows, 16, 30)
  renderRandomNumbers(nRows, 31, 45)
  renderRandomNumbers(gRows, 46, 60)
  renderRandomNumbers(oRows, 61, 75)
  rollNewNumber(75)
}

renderBingo()