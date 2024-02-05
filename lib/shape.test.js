const {Triangle, Circle, Square} =require('./shapes');


describe('Test on shape classes', ()=>{
    it('generate triangle html',async()=>{
        
        const triangle = new Triangle("triangle", "blue", "TNT", "red");
        expect(triangle.input).toBe(`
    <polygon points="25 200 150 20 275 200" fill="blue"></polygon>
    <text x="150" y="150" font-size="60" text-anchor="middle" fill="red">TNT</text>`);
    });

    it('generate circle html',async()=>{
        
        const triangle = new Circle("circle", "black", "CNC", "white");
        expect(triangle.input).toBe(`
    <circle cx="150" cy="100" r="100" fill="black"></circle>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">CNC</text>`);
    });

    it('generate square html',async()=>{
        
        const triangle = new Square("square", "yellow", "SNS", "green");
        expect(triangle.input).toBe(`
    <rect x="25" y="20" width="250" height="160" fill="yellow"></rect>
    <text x="150" y="120" font-size="60" text-anchor="middle" fill="green">SNS</text>`);
    });
    
});

