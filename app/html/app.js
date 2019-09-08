$(document).ready(function () {
   
const a_Tag = document.getElementsByClassName('js-header-menu');
const block = document.getElementsByClassName('js-block-context');
const PATH = window.location.pathname; 
const PathName = ['/','/skill','/portfolio','/about'];
        
    for (let index = 0;index < PathName.length;index++) {
        if (PathName[index] === PATH) {
            a_Tag[index].setAttribute('style','color: #a7c1ee;');
        }
    }

    for (let index = 0;index < block.length;index++) {
        block[index].setAttribute('style','padding-top: 10px;line-height: 20px;');
    }
});