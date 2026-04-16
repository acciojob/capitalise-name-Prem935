//your JS code here. If required.
const field = document.querySelector('#fname')

field.addEventListener("blur", () => {
	field.value = field.value.toUpperCase()
})