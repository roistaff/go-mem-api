let element = document.getElementById('output');
const getData = function() {
		fetch("http://127.0.0.1:8080/info").then(function(response) {
				response.json().then(function(data) {
						mode: 'cors';
						console.log(data);
						useper = data["use"] / data["total"] * 100;
						useper = useper.toFixed(1);
						freeper = data["free"] / data["total"] * 100;
						freeper = freeper.toFixed(1);
						element.textContent = 'メ モ リ 容 量 ： ' + data["total"] + 'MB' + '\nメ モ リ 使 用 中 ： ' + data["use"] +'MB ('+ useper+ '%) \nメ モ リ 空 き ： ' + data["free"]+'MB ('+freeper+'%)';
						});
				})
		};
		window.setInterval(getData, 1000);
