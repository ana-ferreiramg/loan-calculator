function calc() {
    var amount = document.getElementById('loan_amount').value;
    var rate = document.getElementById('interest_rate').value;
    var months_pay = document.getElementById('months_to_pay').value;
    var interest = (amount * (rate * 0.01));
    var payment = ((amount / months_pay) + interest).toFixed(2);

    if (payment == Infinity || payment == undefined || isNaN(payment)) {
        document.getElementById('monthly_payment').innerHTML = ' ';
    } else {
        payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

        document.getElementById('monthly_payment').innerHTML = '<i class="fas fa-dollar-sign"></i>' + ' ' + payment;
    }
    
}