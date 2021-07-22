const targetDiv = document.GetElementById("SecondRegPage");
const btn = document.GetElementById("toggle_button1");
btn.onclick = function(){
			if (targetDiv.style.display !== "none") {
				targetDiv.style.display = "none";
			}
			else	{
				targetDiv.style.display = "block"
			}
};

