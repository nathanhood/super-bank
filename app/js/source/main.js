(function(){
  'use strict';

  $(document).ready(initialize);
  var balance = 1000;
  $('#display').text('$' + balance);

  function initialize(){
    $('#deposit').click(deposit);
    $('#withdrawal').click(withdrawal);
  }

  function deposit(){
    var amount = $('#input').val() * 1;
    balance += amount;

    buildRow('deposit', amount);
    $('#display').text('$' + balance);
  }

  function withdrawal(){
    var amount = $('#input').val() * 1;
    balance -= amount;
    var fee = 0;
    if(balance < 0){
      fee = 50;
      balance -= fee;
      balance = negNum(balance);
    }
    buildRow('withdraw', amount, fee);
    $('#display').text('$' + balance);
  }

  function negNum(){
    var number = balance;
    if(number < 0){
      number = '(' + Math.abs(number) + ')';
    }
    return number;
  }

  function buildRow(type, value, fee){
    var $td1 = $('<td>');
    var $td2 = $('<td>');
    var $td3 = $('<td>');
    var $td4 = $('<td>').text('$' + balance);
    var $tr = $('<tr>');

    if(type === 'deposit'){
      $td2.text('$' + value);
    } else if(type === 'withdraw'){
      $td1.text('$' + fee);
      $td3.text('$' + value);
    }

    $td1.addClass('#fee');
    $td2.addClass('#deposit');
    $td3.addClass('#withdraw');
    $td4.addClass('#balance');

    $tr.append($td1, $td2, $td3, $td4);
    $('#ledger > tbody').append($tr);
  }


})();
