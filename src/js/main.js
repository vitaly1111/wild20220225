import {asd} from './modules/func'
import {enableScroll,disableScroll,handlerModal} from '../blocks/popup/popup'

const pageOverlayModal=document.querySelector('.page__overlay_modal');
const modalClose=document.querySelector('.modal__close');
const presentOrderBtn=document.querySelector('.header__burger')


asd()
//popup()

handlerModal(presentOrderBtn,pageOverlayModal,'page__overlay_modal_open',modalClose,'slow')

//# sourceMappingURL=main.js.map
