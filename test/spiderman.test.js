const Spiderman = require("./../app/spiderman")

describe("Unit test for Spiderman class", () => {
    test('1) Created an spiderman object', () => { 
        const spiderman = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony");

        expect(spiderman.name).toBe("Spiderman Sony");
        expect(spiderman.age).toBe(31);
        expect(spiderman.actor).toBe("Andrew Garfield");
        expect(spiderman.movies).toBe(2);
        expect(spiderman.studio).toBe("Sony");
     })

     test('2) Use getInfo method', () => { 
        const spiderman = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony");

        expect(spiderman.getInfo()).toBe("Hey, I'm Spiderman Sony from Sony");
     })
});
