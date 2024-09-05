window.GPTTConfig = {
	uuid: "xxx"
}

const script = document.createElement('script');
script.src = "https://app.gpt-trainer.com/widget-asset.min.js";
script.onload = function() {
	console.log("script injected");
	this.remove();
};

document.documentElement.appendChild(script);
