fetch('fileToRead.txt')
.then((res) => res.text())
.then((text) => document.write(text))