// let - const
const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const sidebarToggleBtn = $('.sidebar-toggle')
const sidebar = $('.sidebar')
const container = $('.container')
const menuToggleBtn = $('.mb-menu__toggle')

const uploadInputList = $$('.upload-input')
const resetBtn = $('.reset-btn')
// end let - const

// toggle sidebar
sidebarToggleBtn.onclick = () => {
	const iconClass = sidebarToggleBtn.getAttribute('class')
	if (iconClass === 'bx bx-chevron-left sidebar-toggle') {
		const sidebarClass = sidebar.getAttribute('class')
		if (sidebarClass === 'sidebar') {
			sidebarToggleBtn.setAttribute(
				'class',
				'bx bx-chevron-right sidebar-toggle',
			)
			sidebar.classList.add('short')
			container.classList.add('long')

			$$('.menu-item').forEach((menuItem) => {
				menuItem.parentNode.classList.add('tooltip')
			})
		} else {
			sidebar.classList.remove('active')
		}
	} else {
		sidebarToggleBtn.setAttribute('class', 'bx bx-chevron-left sidebar-toggle')
		sidebar.classList.remove('short')
		container.classList.remove('long')

		$$('.menu-item').forEach((menuItem) => {
			menuItem.parentNode.classList.remove('tooltip')
		})
	}
}

menuToggleBtn.onclick = () => {
	const iconClass = sidebarToggleBtn.getAttribute('class')
	if (iconClass == 'bx bx-chevron-left sidebar-toggle') {
		sidebar.classList.add('active')
	}
}

// upload file
uploadInputList.forEach((uploadInput) => {
	uploadInput.onchange = () => {
		const upload = uploadInput.parentNode
		const uploadName = upload.querySelector('.upload-name')

		const uploadCloseBtn = upload.querySelector('.upload-close')
		const uploadImg = upload.querySelector('.upload-img')
		const uploadContent = upload.querySelector('.upload-content')

		const file = uploadInput.files[0]
		const filePath = uploadInput.value

		if (file) {
			const reader = new FileReader()
			reader.onload = () => {
				const result = reader.result
				uploadImg.src = result
			}
			reader.readAsDataURL(file)

			upload.classList.add('active')
			uploadImg.classList.add('active')
			uploadContent.classList.add('hidden')
			uploadInput.setAttribute('hidden', 'true')

			// delete upload file
			uploadCloseBtn.onclick = () => {
				uploadImg.src = ''
				upload.classList.remove('active')
				uploadImg.classList.remove('active')
				uploadContent.classList.remove('hidden')
				uploadInput.removeAttribute('hidden')
			}
		}

		if (filePath) {
			const fileArr = filePath.split('\\')
			const fileName = fileArr[fileArr.length - 1]
			uploadName.textContent = fileName
		}
	}
})

// reset form
resetBtn.onclick = () => {
	const form = resetBtn.parentNode.parentNode
	const uploadList = form.querySelectorAll('.upload')
	uploadList.forEach((upload) => {
		const uploadImg = upload.querySelector('.upload-img')
		const uploadContent = upload.querySelector('.upload-content')
		const uploadInput = upload.querySelector('.upload-input')
		uploadImg.src = ''
		upload.classList.remove('active')
		uploadImg.classList.remove('active')
		uploadContent.classList.remove('hidden')
		uploadInput.removeAttribute('hidden')
	})

	const textEditorContent = form.querySelector('.text-editor-content')
	textEditorContent.textContent = ''
}
