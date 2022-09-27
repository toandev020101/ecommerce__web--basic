// let - const
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const sidebarToggle = $('.sidebar-toggle')
const sidebar = $('.sidebar')
const container = $('.container')
// end let - const

// toggle sidebar
sidebarToggle.onclick = () => {
	const iconClass = sidebarToggle.getAttribute('class')
	if (iconClass == 'bx bx-chevron-left sidebar-toggle') {
		sidebarToggle.setAttribute('class', 'bx bx-chevron-right sidebar-toggle')
		sidebar.classList.add('short')
		container.classList.add('long')

		$$('.menu-item').forEach((menuItem) => {
			menuItem.parentNode.classList.add('tooltip')
		})
	} else {
		sidebarToggle.setAttribute('class', 'bx bx-chevron-left sidebar-toggle')
		sidebar.classList.remove('short')
		container.classList.remove('long')

		$$('.menu-item').forEach((menuItem) => {
			menuItem.parentNode.classList.remove('tooltip')
		})
	}
}
