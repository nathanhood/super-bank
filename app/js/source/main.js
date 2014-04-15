(function(){
  'use strict';

  $(document).ready(initialize);
  var balance = 1000;
  if(balance < 0){
    $('#display').text('$(' + balance * -1 + '.00)');
  } else {
    $('#display').text('$' + balance + '.00');
  }

  function initialize(){
    $('#deposit').click(deposit);
    $('#withdrawal').click(withdrawal);
  }

  function deposit(){
    var amount = $('#input').val() * 1;
    balance += amount;

    buildRow('deposit', amount);
    if(balance < 0){
      $('#display').text('$(' + balance * -1 + '.00)');
    } else {
      $('#display').text('$' + balance + '.00');
    }
  }

  function withdrawal(){
    var amount = $('#input').val() * 1;
    balance -= amount;
    var fee = 0;
    if(balance < 0){
      fee = 50;
      balance -= fee;
    }
    buildRow('withdraw', amount, fee);
    if(balance < 0){
      $('#display').text('$(' + balance * -1 + '.00)');
    } else {
      $('#display').text('$' + balance + '.00');
    }
  }


  function buildRow(type, value, fee){
    var $td1 = $('<td>');
    var $td2 = $('<td>');
    var $td3 = $('<td>');
    var $td4 = $('<td>');
    if(balance < 0){
      $td4 = $('<td>').text('$(' + balance * -1 + '.00)');
    } else {
      $td4 = $('<td>').text('$' + balance + '.00');
    }
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
