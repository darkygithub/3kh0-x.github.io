// Time Subsystem for 3kh0-X and SophosV2, and forks of 3kh0-X

const displayTime = document.querySelector(".display-time");
    function showTime() {
      let time = new Date();
      // Forks can disable 12 hour format below. T
      displayTime.innerText = time.toLocaleTimeString("en-US", { hour12: false, hour: '2-digit', minute:'2-digit'});
      setTimeout(showTime, 1000);
    }

    showTime();
// Date, Not needed but can be implemented at a later date or by a fork.
    function updateDate() {
      let today = new Date();
      let dayName = today.getDay(),
        dayNum = today.getDate();
      const IDCollection = ["daynum"];
      const val = [dayNum];
      for (let i = 0; i < IDCollection.length; i++) {
        document.getElementById(IDCollection[i]).firstChild.nodeValue = val[i];
      }
    }

    updateDate();