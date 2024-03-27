const sliders = document.querySelectorAll('.slider');

sliders.forEach(function(slider) {
  slider.addEventListener('input', function(event) {

    const target = event.target;
    let percentVal = (target.value / target.max ) * 100;

    target.parentNode.style.setProperty('--value', JSON.stringify(target.value+"") );
    target.parentNode.style.setProperty('--pos', percentVal+"%" );

    calcValues();

  });
});

function calcValues() {

  const prospects = document.querySelector('input[name="prospects"]');
  const ratio = document.querySelector('input[name="ratio"]');
  const deals = document.querySelector('input[name="deals"]');
  const convertion = document.querySelector('.convertion');
  const total = document.querySelector('.total');
  const roi = document.querySelector('.roi');
  const convertions_total = Math.floor( prospects.value * ( ratio.value / 100 )  );
  const montlyroi = convertions_total * deals.value;

  convertion.querySelector('.value').innerHTML = convertions_total;
  total.querySelector('.value').innerHTML = formatAsUSCurrency(Math.floor( montlyroi * 12 ));
  roi.querySelector('.value').innerHTML = calculatePercentage(montlyroi, 5000);

}

function formatAsUSCurrency(number) {
  return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 0 }).format(number);
}

function calculatePercentage(part, whole) {
  return Math.floor( (part / whole) * 100 );
}

calcValues();

