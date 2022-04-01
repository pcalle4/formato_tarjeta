(function(){
var wpwlOptions = {
    style: 'card',
    locale: 'es',
    labels: {cvv: 'CVV', cardHolder: 'Nombre (Igual que en la tarjeta)'},
    onBeforeSubmitCard: function() {
      if($('.wpwl-control-cardHolder').val() === '') {
        $('.wpwl-control-cardHolder').addClass("wpwl-has-error");
        $('.wpwl-control-cardHolder').after("<div class='wpwl-hint-cardHolderError'>Campo requerido</div>");
	$('.wpwl-button-pay').addClass("wpwl-button-error").attr('disabled', 'disabled');
	return false;
      } else {
	return true;
    console.log(PAGADO)
      }
    }
  }
}());
