class Question{
    constructor(){
    this.input = createInput("Name");
    this.button = createButton("Enter Correct option no.");
    this.greeting = createElement('h3');
    }

    hidden(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
      }
      
      display(){
        var title=createElement('h2')
        title.html("MyQuiz Game")
        title.position(130,0)

        this.input.position(130, 160);
        this.button.position(250, 200);

        this.button.mousePressed(()=>{
          this.input.hide();
          this.button.hide();
    
          contestant.name = this.input.value();
          
          contestantCount+=1;
          contestant.index=contestantCount
          contestant.update();
          contestant.updateCount(contestantCount);
          
          this.greeting.html("Hello " + contestant.name );
          this.greeting.position(130, 160);
        });
      }
}