let listNumbers = [11, 1, 12, 20, 31, 10];

LimparLista = () => {
  const field = document.getElementById("valor");
  field.value = "";
  field.focus();
};


ExibirLista = (list) => {
  document.getElementById("valores").innerHTML = "";

  list.map((valor) => {
    const element = document.getElementById("valores");
    element.innerHTML += `<li>${valor}</li>`;
  });
};

add = () => {
  const value = document.getElementById("valor").value;
  if (value != "") {
    listNumbers.push(value);
    LimparLista();
    ExibirLista(listNumbers);
  } else {
    alert("Você precisa digitar um valor para o campo!");
  }
};

selectOptions = () => {
  const selected = document.getElementById("selectTypeOrder").value;
  switch (selected) {
    case "1":
      bubble_sort();
      break;
    case "2":
      selection_sort();
      break;
    case "3":
      quick_sort();
      break;
    default:
      alert("Selecione uma opção válida");
      break;
  }
};


shuffle = () => {
  const newList = listNumbers.sort(() => Math.random() - 0.5);
  ExibirLista(newList);
};


bubble_sort = () => {
  var size = listNumbers.length;
  for (var x = 0; x < size; x++) {
    for (var y = 0; y < size - x - 1; y++) {
      if (listNumbers[y] > listNumbers[y + 1]) {
        var aux = listNumbers[y];
        listNumbers[y] = listNumbers[y + 1];
        listNumbers[y + 1] = aux;
      }
    }
  }
  ExibirLista(listNumbers);
};


selection_sort = () => {
  for (let x = 0; x < listNumbers.length - 1; x++) {
    let min = x; 
    for (let y = x + 1; y < listNumbers.length; y++) {
      if (listNumbers[y] < listNumbers[min]) {
        min = y;
      }
    }
    [listNumbers[x], listNumbers[min]] = [listNumbers[min], listNumbers[x]];
  }
  ExibirLista(listNumbers);
};


quick_sort = () => {
  ExibirLista(recursive(listNumbers));

  function recursive(list) {
    if (list.length <= 1) {
      return list;
    }

    const pivot = list[list.length - 1];
    const left = [];
    const right = [];

    for (let x = 0; x < list.length - 1; x++) {
      list[x] < pivot ? left.push(list[x]) : right.push(list[x]);
    }

    return [...recursive(left), pivot, ...recursive(right)];
  }
};