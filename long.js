if (annyang) {
    
  // Let's define a command.
  var commands = {
    '*val': function(val) { document.write(val+'&nbsp;'); },
    'Вниз': scroll
  };
  
  var scroll = function() {
   window.scrollTo(0, 100);
};
  annyang.setLanguage('ko');
  // Add our commands to annyang
  annyang.addCommands(commands);

  // Start listening.
  annyang.debug();
  annyang.start();
}