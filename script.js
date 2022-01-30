// select all the range sliders
const sliders = document.querySelectorAll("input[type='range']");
// make each slider input get calculateTip funcation
sliders.forEach(function (slider) {
	slider.addEventListener('input', calculateTip);
});

// select the bill input
const billInput = document.getElementById('bill');
billInput.addEventListener('change', calculateTip);

// create calculateTip function
function calculateTip() {
	// get value of bill from input
	let bill = parseFloat(billInput.value);
	// select the tip and number of people value
	let tipPercent = document.getElementById('tip').value;
	let noOfPeople = document.getElementById('no-of-people').value;
	// make the bill value to get max of 2 digits after decmial
	billInput.value = bill.toFixed(2);
	// calculate total tip and total bill
	let totalTip = parseFloat((bill * (tipPercent / 100)).toFixed(2));
	let total = parseFloat((bill + totalTip).toFixed(2));
	// calculate tip and total bill per person
	let tipPerPerson = (totalTip / noOfPeople).toFixed(2);
	let totalPerPerson = (total / noOfPeople).toFixed(2);

	// present the value of tip and total amount
	document.getElementById('tip-amount').textContent = `\$ ${totalTip}`;
	document.getElementById('total-amount').textContent = `\$ ${total}`;
	// present the value of the tip percent and the number of people
	document.getElementById('tip-percent').textContent = `${tipPercent}%`;
	document.getElementById('split-num').textContent = noOfPeople;
	// present the value of tip and total per person
	document.getElementById('tip-per-person').textContent = `\$ ${tipPerPerson}`;
	document.getElementById(
		'total-per-person'
	).textContent = `\$ ${totalPerPerson}`;
}
calculateTip();

//dark mode toggle
const togdark = document.getElementById('toggleDark');
const body = document.querySelector('body');
const container = document.querySelector('.container');
const lbls = document.querySelectorAll('.lbl');
const vals = document.querySelectorAll('.val');
const pSocial = document.querySelector('.social p');
const fbIcon = document.querySelector('.fa-facebook');
const twitterIcon = document.querySelector('.fa-twitter');
const ytIcon = document.querySelector('.fa-youtube');

togdark.addEventListener('change', () => {
	body.classList.toggle('dark');
	container.classList.toggle('dark');
	pSocial.classList.toggle('dark');
	fbIcon.classList.toggle('dark');
	twitterIcon.classList.toggle('dark');
	ytIcon.classList.toggle('dark');
	// toggle each label to get white text color
	lbls.forEach((el) => {
		el.classList.toggle('dark');

		const text = el.classList.contains('dark');
		text === true ? (el.style.color = '#fff') : (el.style.color = '#44475b');
	});

	// toggle each value to get white text color
	vals.forEach((el) => {
		el.classList.toggle('dark');

		const text = el.classList.contains('dark');
		text === true ? (el.style.color = '#fff') : (el.style.color = '#2f2f3b');
	});
});
