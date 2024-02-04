class Shape{
    constructor(name, shapeColor, text, textColor){
        this.name = name;
        this.shapeColor = shapeColor;
        this.text = text;
        this.textColor = textColor;
        this.input =""; 
    }
    html_generator(){
        let html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <svg width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">
                ${this.input}
            </svg>
            
        </body>
        </html>
        `
        return html;
    }



}



class Triangle extends Shape{
    constructor(name, shapeColor, text, textColor){
        super(name, shapeColor, text, textColor);
        this.input = `
            <polygon points="25 200 150 20 275 200" fill="${this.shapeColor}"></polygon>
            <text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
    
    

}

class Circle extends Shape{
    constructor(name, shapeColor, text, textColor){
        super(name, shapeColor, text, textColor);
    }
}

class Square extends Shape{
    constructor(name, shapeColor, text, textColor){
        super(name, shapeColor, text, textColor);
    }
}




module.exports = {Triangle, Circle, Square};