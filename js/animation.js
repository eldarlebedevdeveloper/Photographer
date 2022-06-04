function addNone(classNameArray,switchHow){
	classNameArray.forEach(item => {
		let allGod = Array.from(document.querySelectorAll(item))
		allGod.forEach(elem => {
			if (!switchHow) {
				elem.classList.add('none')
			}else{
				elem.classList.remove('none')
			}
		})
	})
}

// включается в файле preloaged.js
// addNone(['.header_animation','.heading_animation','.text_animation','.home_scroll_animation'])

