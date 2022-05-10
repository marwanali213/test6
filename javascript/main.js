let TheGallery = document.querySelectorAll(".gallery img")

TheGallery.forEach(img => { 

  img.addEventListener('click', (e) => {

    let overlay = document.createElement("div");

    overlay.className = 'popup-overlay';

    document.body.appendChild(overlay);

    let popupBox = document.createElement("div");

    popupBox.className = 'popup-box';

    if(img.alt !== null) {

      let imgHeading = document.createElement("h3");
  
      let imgText = document.createTextNode(img.alt);
  
      imgHeading.appendChild(imgText);
  
      popupBox.appendChild(imgHeading);

      }


    let popupImage = document.createElement("img");

    popupImage.src = img.src;

    popupBox.appendChild(popupImage);

    document.body.appendChild(popupBox);

    let closeButton = document.createElement("span");

    let closeButtonText = document.createTextNode("X");

    closeButton.appendChild(closeButtonText);

    closeButton.className = 'close-button';

    popupBox.appendChild(closeButton);



  })
})

    document.addEventListener("click", function (e) {

    if (e.target.className == 'close-button') {

    e.target.parentNode.remove();

    document.querySelector(".popup-overlay").remove();

    }

    });

var content = document.getElementsByTagName("body")[0];
		var darkMode = document.getElementById("dark-mode");
		darkMode.addEventListener("click",function(){
		    darkMode.classList.toggle("active");
			content.classList.toggle("night");
		})();
