const byteSize = (str) => {
  // write your code here
	return new TextEncoder().encode(str).length;
};

// Do not change the code below
let value = prompt("Enter a value:");
alert(byteSize(str));
