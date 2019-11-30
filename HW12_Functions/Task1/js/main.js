function isVasyaAbleToSellTickets(visitorsBanknoteList) {
  const visitorsBanknotes = visitorsBanknoteList;
  const vasyasBanknotes = [];
  const banknotesCallback = {
    25: add25ToAvailableBanknotes,
    50: giveChangeFor50,
    100: giveChangeFor100,
  };
  const banknotes = {
    value25: 25,
    value50: 50,
    value100: 100,
  };

  for (let i = 0; i < visitorsBanknotes.length; i++) {
    if (!banknotesCallback[visitorsBanknotes[i]](vasyasBanknotes, banknotes)) {
      return 'No';
    }
  }

  return 'Yes';
}

function add25ToAvailableBanknotes(vasyasBanknotes, banknotes) {
  vasyasBanknotes.push(banknotes.value25);

  return true;
}

function giveChangeFor50(vasyasBanknotes, banknotes) {
  if (vasyasBanknotes.includes(banknotes.value25)) {
    removeBanknoteFromList(vasyasBanknotes, banknotes.value25);

    vasyasBanknotes.push(banknotes.value50);
  } else {
    return false;
  }

  return true;
}

function giveChangeFor100(vasyasBanknotes, banknotes) {
  if (vasyasBanknotes.includes(banknotes.value25) && vasyasBanknotes.includes(banknotes.value50)) {
    removeBanknoteFromList(vasyasBanknotes, banknotes.value25);
    removeBanknoteFromList(vasyasBanknotes, banknotes.value50);

    vasyasBanknotes.push(banknotes.value100);
  } else if (vasyasBanknotes.filter((banknote) => banknote === banknotes.value25).length >= 3) {
    removeBanknoteFromList(vasyasBanknotes, banknotes.value25);
    removeBanknoteFromList(vasyasBanknotes, banknotes.value25);
    removeBanknoteFromList(vasyasBanknotes, banknotes.value25);

    vasyasBanknotes.push(banknotes.value100);
  } else {
    return false;
  }

  return true;
}

function removeBanknoteFromList(vasyasBanknotes, banknote) {
  const indexOfBanknote = vasyasBanknotes.indexOf(banknote);

  vasyasBanknotes.splice(indexOfBanknote, 1);
}

const banknotesTest = [25, 50, 25, 100, 50];
isVasyaAbleToSellTickets(banknotesTest);
