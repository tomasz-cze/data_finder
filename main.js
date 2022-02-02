const input = document.querySelector('.search')
const dataList = document.querySelector('ul')
const datas = document.querySelectorAll('li')

const search = () => {
	const searchData = input.value

	for (let i = 0; i < datas.length; i++) {
        if (datas[i].textContent.includes(searchData)) {
        datas[i].classList.remove('hidden')
        } else {
            datas[i].classList.add('hidden')
        }
	}
}


input.addEventListener('keyup', search)