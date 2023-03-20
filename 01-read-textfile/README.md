# Reading files in JavaScript
## Examples of how to select files, read file metadata and content, and monitor read progress.
https://web.dev/read-files/
### How to read a text file in javascript line by line

<details>
<summary>1. [Create a file input field](https://erikespana.github.io/javascript/01-read-textfiles/01-fileChooser.html)</summary>

```html
<input type="file" name="file" id="file">
```
</details>

<details>
<summary>2. Add javascript</summary>

```js
document.getElementById('file').onchange = function(){

  var file = this.files[0];

  var reader = new FileReader();
  reader.onload = function(progressEvent){
    // Entire file
    console.log(this.result);

    // By lines
    var lines = this.result.split('\n');
    for(var line = 0; line < lines.length; line++){
      console.log(lines[line]);
    }
  };
  reader.readAsText(file);
};
```

</details>

<details>
<summary>3. Regular expressions</summary>

```
```

</details>

<details>
<summary>3. web services?</summary>

```
```

</details>
