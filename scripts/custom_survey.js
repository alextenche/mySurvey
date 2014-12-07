var init = function() {
  var box = document.querySelector('#theArt').children[0],
      showPanelButtons = document.querySelectorAll('.show-buttons input'),
      panelClassName = 'show-front',

      onButtonClick = function( event ){
		box.removeClassName( panelClassName );
        panelClassName = event.target.className;
        box.addClassName( panelClassName );
      };

  for (var i=0, len = showPanelButtons.length; i < len; i++) {
    showPanelButtons[i].addEventListener( 'click', onButtonClick, false);
  }
  
	// for Q2
	formElement = document.getElementById('desiredCourse');
	formElement.addEventListener('blur', desiredCourseChanged, false);
  
	formElement = document.getElementById('desiredCourse');
	formElement.addEventListener('change', desiredCourseChanged, false);
  
	// for Q3
	formElement = document.getElementById('artistLength1');
	formElement.addEventListener('change', artistLengthChanged, false);
  
	formElement = document.getElementById('artistLength2');
	formElement.addEventListener('change', artistLengthChanged, false);
  
	formElement = document.getElementById('artistLength3');
	formElement.addEventListener('change', artistLengthChanged, false);
  
	formElement = document.getElementById('artistLength4');
	formElement.addEventListener('change', artistLengthChanged, false);
	
	formElement = document.getElementById('artistLength5');
	formElement.addEventListener('change', artistLengthChanged, false);
  
	// for Q4
	formElement = document.getElementById('hoursPractice');
	formElement.addEventListener('change', hoursPracticeChanged, false);
  
}

window.addEventListener( 'DOMContentLoaded', init, false);

// for Q2
function desiredCourseChanged(e){
	target = e.target;
	theValue = target.value;
	localStorage.setItem('desiredCourse', theValue);
}

// for Q3
function artistLengthChanged(e){
	target = e.target;
	theValue = target.value;
	localStorage.setItem('artistLength', theValue);
}

// for Q4
function hoursPracticeChanged(e){
	target = e.target;
	theValue = target.value;
	localStorage.setItem('hoursPractice', theValue);
}
