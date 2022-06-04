

window.onload = () => {
	// home_slider_content.js
	getHomeSliderContent()
	// mainSlider()

}

function getHomeSliderContent(){
    let container = document.querySelector('#home_slider_container')

    let allTitles = createClearArray(document.querySelector('#back_end_slider_tittle').textContent)
    let allText = createClearArray(document.querySelector('#back_end_slider_text').textContent)
    let allPuctures = createClearArray(document.querySelector('#back_end_slider_pictures').textContent)


    let newAllTitles = []
    
    createNewTitleArray()
    function createNewTitleArray(){
        allTitles.forEach((title, index) => {
            allTitles[index] = clearAndCreateArray(title, ',')

        })
    }
  
    
    createSlides()
    function createSlides(){
   
        // console.log(slide)

        // // container.innerHTML = slide

        allTitles.forEach((slide,index) => {
            let oneSlide =  createSlide(index)
            // console.log(oneSlide)

            container.innerHTML += oneSlide

        })


        function createSlide(ind){
            let slide = `<div class="home_slide home_slide-one swiper-slide">
                            <div class="home_slide-container">
                                <img class="home_slide-picture " src="${allPuctures[ind]}" alt="">
                                <div class="home_slide-text ">
                                    <p class="text text_animation mob ">${allText[ind]}</p>
                                </div>
                            <div class="home_slide-content">
                                <h2 class="heading heading_animation">
                                    <p><span>${allTitles[ind][0]}</span></p>
                                    <p><span>${allTitles[ind][1]}</span></p>
                                </h2>
                                <div class="home_slide-text ">
                                    <p class="text text_animation desc "><span> ${allText[ind]}</span></p>
                                </div>
                            </div>	
                            </div>
                        </div>`

            return slide
        }

    }



    function createClearArray(requestArray){
        let oneArray  = clearAndCreateArray(requestArray, ']');
        let twoArray = clearAndCreateArray(oneArray, '[');
        let finnalyText = twoArray.filter(item => item != undefined)
        return finnalyText
    }


    function clearAndCreateArray(stringToSplit, separator) {
        if(typeof stringToSplit == 'string'){
            let arrayOfStrings = stringToSplit.split(separator)
            return arrayOfStrings

        }else{
            let newArray = []
            stringToSplit.forEach(element => {
                // console.log(element)
                let d = element.split(separator)[1]
                newArray.push(d)
            })
            return newArray
        }
      }
}       