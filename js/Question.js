class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder", "Enter the number..");
   //Create a input box to enter the number
   this.input2 = createInput("").attribute("placeholder", "Enter correct option no..");
   

    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
   this.question=createElement('h3');

   this.options=createElement('h4');


    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();

   


  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.

this.question.html("Question:-What starts and ends with the letter 'E',but has only one letter?");
this.question.position(140,100);

this.options.html("1:Everyone</br>2:Envelope</br>3:Estimate</br>4:Example");
this.options.position(150,140);


    this.input1.position(150, 270);
    this.input2.position(400, 270);
    this.button.position(290, 320);

    // Add a mousepressed action when the button is clicked Display the this.message
    
    this.button.mousePressed(()=>{
    this.message.html("Thank you,Your answer has been submitted");
    this.message.position(270,350);
    })
  

  }
}
