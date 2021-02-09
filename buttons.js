
document.querySelector('#start').addEventListener('click', function () {
  startGame();
   



  document.querySelector('.simon-button.green').addEventListener('click', function () {
   console.log("you selected green");
  });

  document.querySelector('.simon-button.blue').addEventListener('click', function () {
    console.log("you selected green");
  });

  document.querySelector('.simon-button.yellow').addEventListener('click', function () {
    console.log("you selected green");
  });

  document.querySelector('.simon-button.red').addEventListener('click', function () {
    console.log("you selected green");
  });
});

document.querySelector('#reset').addEventListener('click', function () {
  reset();
});