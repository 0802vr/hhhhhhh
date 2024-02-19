import './style.scss'
 
import Swiper from 'swiper';
import {
	Navigation,
	 
	FreeMode,
	 
} from 'swiper/modules';
//swiper для 3 карточек во втором блоке
const swiper =()=> new Swiper('#why_slider', {
     
   /*  slidesPerView: "auto", */
    slidesPerView: 1.5,
	slidesOffsetAfter:450,
	modules:[ Navigation, FreeMode], 
	freeMode: {
		enabled:false,
	},
	allowTouchMove: false,
	navigation: {
		nextEl: ".why_sliders_next",
		prevEl: ".why_sliders_prev",
		 
	  },
     
  }); 
  swiper()
const swiperFeedback = () => new Swiper('#feedback_slider', {
     
   /*  slidesPerView: "auto", */
    slidesPerView: 4,
	 
	modules:[ Navigation, FreeMode], 
	freeMode: {
		enabled:false,
	},
	allowTouchMove: false,
	navigation: {
		nextEl: ".feedback_next",
		prevEl: ".feedback_prev",
		 
	  },
     
  }); 
   swiperFeedback()
	let main_work: HTMLElement = document.querySelector('.what_work_col')!
	let box_work : HTMLElement = main_work?.querySelector('.what_work_col_right')!
	let list_Work: NodeListOf<Element> = box_work.querySelectorAll('.what_work_col_box')
	console.log(list_Work)
	list_Work.forEach(el => el.addEventListener('click', () => openListWork(el as HTMLElement)))
	let countWork: number = 0;
	let lastWork:  HTMLElement;
	function openListWork(el: HTMLElement){
		 
		if (el.classList.contains("what_work_col_box_text_visible")) {
			el.classList.remove("what_work_col_box_text_visible")
			 
			lastWork = el
			 
			if(el == list_Work[0] && countWork === 0){
				countWork = countWork + 1
			}
			return
		}
		if(countWork > 0 || el !== list_Work[0]) {
			if (!lastWork){
				 
				list_Work[0].classList.remove("what_work_col_box_text_visible")
			}
			if (lastWork){
				 
				lastWork.classList.remove("what_work_col_box_text_visible")
			}	
			
			countWork = countWork + 1
			 
			el.classList.add("what_work_col_box_text_visible")
			 
			
			 
			 
			  
			lastWork = el;
		}
		
	
	}
 //request
let priceTable = document.querySelector(".requst_form_box_row")!;
let listPrice = priceTable.querySelectorAll('.requst_box_btn')!;
 
interface PriceObject {
	priceValue: HTMLElement|null;
	countPriceValue: number;
  }
  let priceObject: PriceObject = {
	priceValue: null,
	countPriceValue: 0
  };
function handleBtn(event: Event, priceObject: PriceObject){
	console.log(event)
	let { priceValue, countPriceValue } = priceObject;
	let element = event.target as HTMLElement
  if(element.classList.contains("requst_box_btn_active")){
	element.classList.remove("requst_box_btn_active")
      /* this.removeAttribute('name') */
      return
    }
    if(countPriceValue === 0){
      element.parentElement?.children[0].classList.remove("requst_box_btn_active")
      /* listPrice[0].removeAttribute('name') */
      countPriceValue = 1
    }
    if(priceValue) {    
		priceValue.classList.remove("requst_box_btn_active")
     /*  price.setAttribute('name', 'price') */
      
    }
    element.classList.add("requst_box_btn_active")
    /* this.setAttribute('name', 'price') */
    priceObject.priceValue = event.target as HTMLElement;
	
}

listPrice.forEach((item) => item.addEventListener("click", (event) => {
		handleBtn(event, priceObject);
	  }));

let programmTable = document.querySelector(".requst_form_box_wrap")!;
let listProgramm = programmTable.querySelectorAll('.requst_box_btn')!;

interface ProgrammObject {
	priceValue: HTMLElement|null;
	countPriceValue: number;
}
let ProgrammObject: PriceObject = {
	priceValue: null,
	countPriceValue: 0
};
listProgramm.forEach((item) => item.addEventListener("click", (event) => {
	handleBtn(event, ProgrammObject);
  }));
