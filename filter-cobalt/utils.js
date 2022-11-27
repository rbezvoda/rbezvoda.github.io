var fileText = '';
function get_textarea() {
    return document.getElementById("input-sequence").value;
}

function process_line(line){
    if (line.startsWith(">")) {
        var elems = line.split(' ').splice(1);
        return '>' + elems.join(' ') + '\n';
    }
    else {
        return line + '\n';
    }

}


function run(){
    if (fileText !=''){
        input_lines = fileText.split('\n');
    }
    else {
        var input_lines = get_textarea().split('\n');
    }
    
    var out_sequences = '';
    input_lines.forEach(element => {
        out_sequences += process_line(element.trim());
    });
    document.getElementById('output').value = out_sequences;

}

async function loadFile(file) {
    let text = await file.text();
    fileText = text;
  }
