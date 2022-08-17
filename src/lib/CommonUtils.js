import 'regenerator-runtime/runtime';

const BASEURL = 'https://agrofinesapi.herokuapp.com/DryFruit';

function refNoGenerator() {
	return new Date().valueOf();
}

export async function APIServerCall(...args) {
	console.log("About to submit the data ");
	let data = "";
	try {

		let headers = {
			"method": args[1],
			headers: {
				'Content-Type': 'application/json',
				'Accept': 'application/json',
				'channel': 'MB',
				'masterTxnRefNo': refNoGenerator(),
				'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',
			}
		};
		let payLoad = "";
		if (args[1] === "POST") {
			payLoad = Object.assign(args[0], headers);
		} else {
			payLoad = headers;
		}

		const res = await fetch(BASEURL + args[2], headers);
		if (!res.ok) {
			const message = `An error has occured: ${res.status} - ${res.statusText}`;
			throw new Error(message);
		}
		data = await res.json();
		return data;
	} catch (err) {
		console.log("Error logs" + err);
	}
	console.log("Final results 2 :: " + JSON.stringify(data));
	return null;
}


function callBackFunction(pRes) {

	if (pRes.status >= 200 && pRes.status < 300)
		return pRes;

	const error = new Error(pRes.statusText);
	error.pRes = pRes;
	throw error;
}

export function APIServerCallWithoutAsync(...args) {
	let headers = {
		"method": args[1],
		headers: {
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			'channel': 'MB',
			'masterTxnRefNo': refNoGenerator(),
			'Authorization': 'Basic YWRtaW46cGFzc3dvcmQ=',
		}
	};
	let payLoad = "";
	if (args[1] === "POST") {
		payLoad = Object.assign(args[3], headers);
	} else {
		payLoad = headers;
	}
	return fetch(BASEURL + args[2], payLoad)
		.then(res => callBackFunction(res))
		.catch(error => console.log(error))
}
