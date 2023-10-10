import './App.css';

function App() {
  var steps = 0;
  //Function to check if game completed
  function checking(steps) {
    var arr = ["11", "12", "13", "21", "22", "23", "31", "32", "33"];
    var count = 0;
    for (let i = 0; i < 9; i++) {
      if (document.getElementById(arr[i]).classList.contains("active")) {
        count += 1;
      }
    }
    if (count === 0) {
      alert("Congratulations! Chances took = " + steps);
    }
  }

  //temporary function to switch class
  function toggleClass(r, c) {
    var val = r.toString() + c.toString();
    if (document.getElementById(val).classList.contains("active")) {
      document.getElementById(val).classList.remove("active");
    } else {
      document.getElementById(val).classList.add("active");
    }
  }


  //Function to spread virus on click
  function spread(r, c) {

    steps += 1;
    toggleClass(r, c);

    if (r + 1 <= 3) {
      toggleClass(r + 1, c);
    }
    if (c + 1 <= 3) {
      toggleClass(r, c + 1);
    }
    if (c - 1 > 0) {
      toggleClass(r, c - 1);
    }
    if (r - 1 > 0) {
      toggleClass(r - 1, c);
    }

    //Checking if game completed
    setTimeout(() => checking(steps), 200);

  }



  return (
    <div className="App">
      <header className="App-header">

        Vaccine

        <div class="board">

          <div class="row row1">
            <div id="11" class="column column1 active" onClick={() => spread(1, 1)}></div>
            <div id="12" class="column column2 active" onClick={() => spread(1, 2)}></div>
            <div id="13" class="column column3" onClick={() => spread(1, 3)}></div>
          </div>

          <div class="row row2">
            <div id="21" class="column column1 active" onClick={() => spread(2, 1)}></div>
            <div id="22" class="column column2" onClick={() => spread(2, 2)}></div>
            <div id="23" class="column column3" onClick={() => spread(2, 3)}></div>
          </div>

          <div class="row row3">
            <div id="31" class="column column1" onClick={() => spread(3, 1)}></div>
            <div id="32" class="column column2 active" onClick={() => spread(3, 2)}></div>
            <div id="33" class="column column3" onClick={() => spread(3, 3)}></div>
          </div>

        </div>

      </header>
    </div>
  );
}

export default App;
