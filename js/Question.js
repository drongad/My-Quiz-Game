class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("").attribute("placeholder","Enter Your Name Here...");

   //Create a input box to enter the number
   this.input2 = createInput("").attribute("placeholder","Enter Answer No. Here")



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
    this.question = createElement('h3')
    this.option1 = createElement('h4')
    this.option2 = createElement('h4')
    this.option3 = createElement('h4')
    this.option4 = createElement('h4')




    this.message = createElement("h2")
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box
    this.question.hide()
    this.option1.hide()
    this.option2.hide()
    this.option3.hide()
    this.option4.hide()




  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.question.html("Who was the 16th president of the US?")
    this.question.position(270,50)
    this.option1.html("1:John Adams")
    this.option1.position(220,80)

    this.option2.html("2:Grover Cleveland")
    this.option2.position(220,120)

    this.option3.html("3:George Washington")
    this.option3.position(220,160)

    this.option4.html("4:Abraham Lincoln")
    this.option4.position(220,200)

    this.input2.position(480, 260);
    this.input1.position(180, 260);
    this.button.position(375, 330);

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
      this.message.html("The Correct Answer is 4. Thanks for Playing!")
      this.message.position(250,350)
    })


  }
}
