function generate() { 
	let dictionary = ""; 
	if (document.getElementById("lowercaseCb").checked) { 
		dictionary += "qwertyuiopasdfghjklzxcvbnm"; 
	} 
	if (document.getElementById("uppercaseCb").checked) { 
		dictionary += "QWERTYUIOPASDFGHJKLZXCVBNM"; 
	} 
	if (document.getElementById("digitsCb").checked) { 
		dictionary += "1234567890"; 
	} 
	if (document.getElementById("specialsCb").checked) { 
		dictionary += "!@#$%^&*()_+-={}[];<>:"; 
	} 
	const length = document.querySelector( 
		'input[type="range"]').value; 

	if (length < 1 || dictionary.length === 0) { 
		return; 
	} 

	let password = ""; 
	for (let i = 0; i < length; i++) { 
		const pos = Math.floor(Math.random() * dictionary.length); 
		password += dictionary[pos]; 
	} 

	document.querySelector( 
		'input[type="text"]').value = password; 
} 

[ 
	...document.querySelectorAll( 
		'input[type="checkbox"], button.generate'), 
].forEach((elem) => { 
	elem.addEventListener("click", generate); 
}); 

document.querySelector('input[type="range"]').addEventListener( 
	"input", (e) => { 
		document.querySelector( 
			"div.range span").innerHTML = e.target.value; 
		generate(); 
	}); 

document.querySelector("div.password button").addEventListener( 
	"click", () => { 
		const pass = document.querySelector('input[type="text"]').value; 
		navigator.clipboard.writeText(pass).then(() => { 
			document.querySelector( 
				"div.password button").innerHTML = "copied!"; 
			setTimeout(() => { 
				document.querySelector( 
					"div.password button").innerHTML = "copy"; 
			}, 1000); 
		}); 
	}); 
	
  // Get references to the user information input fields and the generated password field
  const firstNameInput = document.getElementById("firstName");
  const lastNameInput = document.getElementById("lastName");
  const usernameInput = document.getElementById("username");
  const passwordInput = document.querySelector('input[type="text"]');

  // Add an event listener to the generated password field to check for a match when the value changes
  passwordInput.addEventListener("input", () => {
    // Get the current values of the input fields
    const firstName = firstNameInput.value.toLowerCase();
    const lastName = lastNameInput.value.toLowerCase();
    const username = usernameInput.value.toLowerCase();
    const password = passwordInput.value.toLowerCase();

    // Check if the password matches any of the user information fields
    if (password === firstName || password === lastName || password === username) {
      // If there is a match, show an error message
      passwordInput.setCustomValidity("Password cannot match your first name, last name, or username.");
      passwordInput.reportValidity();
    } else {
      // If there is no match, clear the error message
      passwordInput.setCustomValidity("");
    }
  });

generate();
