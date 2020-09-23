export class Wen extends EventTarget
    {
        constructor() {
            super();
            this.quesions = questions;
            this.currentIndex =0;
            this.questionsArrya = [];
            this.reset();
        }
    }

    SetpreviousQuestion()
    {
        this.currentIndex--;
        this._commit();
    }

    SetNextQuestion()
    {
        this.currentIndex++;
        this._commit();
    }

    setGivenAnswer(id)
    {
        this.questionsArray[this.currenIndex].SetGivenAnswer(id);
        this._commit();
    }

    getQuestions()
    {
        return this.questionsArray;
    }

    reset()
    {
        let id = 1;
        this.questionsArray=[];
        for(let question of this.questions)
        {
            this.questionsAray.push(new Question(id++, question));
        }
        this.curenIndex =0;
         this._commit();
    }

    _commit()
    {
        his.dispatchEvent(new QuizEvent(this.questionsArray, this.currentIndex))
    }

