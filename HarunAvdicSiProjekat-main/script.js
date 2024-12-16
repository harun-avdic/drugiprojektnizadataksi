function validateForm(event) {
  
    event.preventDefault();


    document.getElementById("imeError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("porukaError").innerHTML = "";

    
    const ime = document.getElementById("ime").value;
    const email = document.getElementById("email").value;
    const poruka = document.getElementById("poruka").value;
    
    let valid = true;


    if (ime.trim() === "") {
        valid = false;
        document.getElementById("imeError").innerHTML = "Ime je obavezno.";
    }

    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        valid = false;
        document.getElementById("emailError").innerHTML = "Unesite validnu email adresu.";
    }

    if (poruka.trim() === "") {
        valid = false;
        document.getElementById("porukaError").innerHTML = "Poruka je obavezna.";
    }

    if (valid) {
       
        alert("Forma je uspješno poslata!");
        document.querySelector("form").submit();
    }
}
