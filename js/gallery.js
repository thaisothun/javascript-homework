/*Name this external file gallery.js*/

function upDate(previewPic){
    const display_photo = document.getElementById('image') 
    display_photo.children[0].innerHTML = previewPic.alt
    display_photo.children[1].src = previewPic.src
	}

	function unDo(){
    const display_photo = document.getElementById('image')
    display_photo.children[0].innerHTML = 'Hover over an image below to display here.'
    display_photo.children[1].src = ''
	}