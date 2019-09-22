const fs = require('fs');

const color = {
  set: () => {
    console.log('\x1b[32m'); // Change terminal color while running script
  },
  reset: () => {
    console.log('\x1b[0m'); // resets color back to terminal color
  }
}

//Child Process Command Runner
const exec = require('child_process').exec;
const runCommand = (command) => {
  return new Promise( (resolve, reject) => {
    const child = exec(command, (error, stdout, stderr) => {
      if(error) reject(error)
      resolve(stdout || stderr)
    })
  });
}

const deleteFolderRecursive = function(path) {
  if (fs.existsSync(path)) {
    fs.readdirSync(path).forEach(function(file, index){
      var curPath = path + "/" + file;
      // recurse
      if (fs.lstatSync(curPath).isDirectory()) {
        deleteFolderRecursive(curPath);
      // if file, delete file
      } else {
        fs.unlinkSync(curPath);
      }
    });
    fs.rmdirSync(path);
  }
};

const appTemplate =
`import React from "react";

const App = () => {
  return (
    <div className='app'>
      React App
    </div>
  );
}
export default App;
`

const setup = async () => {
  color.set()
  console.log('REACT BOILERPALTE SETUP SCRIPT');
  try {

    //Purge demo stuff
    deleteFolderRecursive('.git')
    deleteFolderRecursive('./src/components')
    deleteFolderRecursive('./src/containers')

    //Make empty components and containers folders
    fs.mkdirSync('./src/components')
    fs.mkdirSync('./src/containers')

    //Overwrite App.js
    fs.writeFileSync('./src/App.js', appTemplate, (err, res) => {
      console.log(err, res);
    })

    //Purge setup script from package.json
    let package = require('./package.json');
    //delete setup script
    delete package['scripts']['setup'];
    //Write package.json
    fs.writeFileSync('./package.json', JSON.stringify(package, null, 2));

    // Purge setup.js file
    fs.unlinkSync('./setup.js');

    //Git init
    console.log( await runCommand('git init') );
    //Git add
    console.log( await runCommand('git add .') );
    //Git commit
    console.log( await runCommand('git commit -m "React Boilerplate initial commit"') );

  } catch (error) {
    let color = '\x1b[31m', // Red
        reset = '\x1b[0m'; //resets color back to terminal color
    console.log(`${color}%s${reset}`, error);
  }
  color.reset()
}

setup()
