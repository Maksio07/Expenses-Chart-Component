const bars = document.querySelectorAll('.spending__bars-area__box--bar')
const bar = document.querySelector('.spending__bars-area__box--bar')
const amounts = document.querySelectorAll('.spending__bars-area__box--amount')
const areaBoxes = document.querySelectorAll('.spending__bars-area__box')
const valuesArr = []
const heightArr = []
let index = 0


function fillBarsArea() {
	const maxHeight = parseFloat(bar.dataset.max)

    amounts.forEach(amount => {
       valuesArr.push(parseFloat(amount.dataset.value))
    })
    
    const min = Math.min(...valuesArr)
    const max = Math.max(...valuesArr)
    const percent = (maxHeight/max);
    
    for(let i = 0; i<valuesArr.length; i++) {
        heightArr.push(percent * valuesArr[i]);
    }

    bars.forEach(bar => {
        bar.style.height = heightArr[index++] + 'rem';
    })
}

function showAmount() {
	this.firstElementChild.classList.toggle('show-amount')
}

window.addEventListener('DOMContentLoaded', fillBarsArea)
areaBoxes.forEach(box => box.addEventListener('click', showAmount))
bars.forEach(bar =>
	bar.addEventListener('mouseover', e => {
		const r = Math.round(Math.random() * Math.random() * 360)
		const g = Math.round(Math.random() * Math.random() * 360)
		const b = Math.round(Math.random() * Math.random() * 360)
		const a = Math.round(Math.random() * Math.random() * 100 + 60)
		bar.style.backgroundColor = `rgba(${r}, ${g}, ${b}, ${a}%)`
	})
)
bars.forEach(bar =>
	bar.addEventListener('mouseout', e => {
		bar.style.backgroundColor = 'hsl(10, 79%, 65%)'
	})
)
