// Unit tests for the helloWorld function



describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });

});
describe("sayHello", function(){
    it("should be a define function",function(){
        expect(typeof sayHello).toBe("function")
    });
    it("should return a string when called", function() {
        expect(typeof sayHello()).toBe("string");
    });

    it("It should return the string 'Hello Jorge!'when executed", function(){
        expect(sayHello(" Jorge")).toBe("Hello, Jorge!");
    });
    it('It should return the string"Hello, Alex!" when executed', function() {
        expect(sayHello(" Alex")).toBe("Hello, Alex!");
    });
   it("It should return the string 'Hello, Pat!'when executed", function(){
    expect(sayHello(" Pat")).toBe("Hello, Pat!")
   });
    it("It should say 'Hello, World!'if undefined, true, false, or a number." , function() {
        expect(sayHello()).toBe("Hello, World!");
        expect(sayHello(true)).toBe("Hello, World!");
        expect(sayHello(false)).toBe("Hello, World!");
        expect(sayHello(null)).toBe("Hello, World!");
        expect(sayHello(3.4)).toBe("Hello, World!");
    });

    it('should return the string "Hello, World" if the string is empty',function() {
        expect(sayHello("")).toBe("Hello, World!");
    });

    it('should  return the string "Hello, World!" if the string contains a number', function() {
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it('should return th string "Hello, World!" if the input is another data type.', function() {
        expect(sayHello({})).toBe("Hello, World!");
    });

    describe("IsFive",function () {
        it('it should be a define function',function () {
            expect(typeof isFive).toBe("function")
        });
        it('should Ensure that isFive returns a boolean ').toBe("boolean")
            expect(typeof isFive).toBe('boolean')
        });
        it('should Ensure that isFive returns true when passed 5', function () {
            expect(typeof isFive).toBe(true)
        it('should convert "5" to a number'),function() {
            expect(isFive("5")).toBe(true)
            }

    });
        describe("isEven",function () {
            it('should be a define function', function () {
                expect(typeof isEven).toBe('function')
            });
            it('should be a boolean', function () {
                expect(typeof isEven()).toBe("boolean")
            });
            it('should be an even number', function () {
                expect(isEven()).toBe(true)
            });
            it('should return true if isEven is returned as a string', function () {
                expect(isEven("8")).toBe(true)
            });
            it('should return false when executed with an odd number', function () {
                expect(isEven(3)).toBe(false);
            });
            it('should return false when executed with a non-number string', function () {
                expect(isEven("banana")).toBe(false)
            });
            it('should return false when executed with infinity', function () {
               expect(isEven(Infinity)).toBe(false)
            });
            it('should return false when executed with no argument', function () {
                expect(isEven()).toBe(false)
            });

        describe("isVowel",function () {
            it('should  be a defined function', function () {
                expect(typeof isVowel).toBe('function')
            });
                it('should return a boolean when called ', function () {
                  expect(typeof isVowel()).toBe("boolean")
                });
            it('should return true when executed with a case insensitive, single vowel', function () {
                expect(isVowel('a')).toBe(true)
                expect(isVowel('A')).toBe(true)
            });
            it('should return false when executed with a non-vowel string', function () {
                expect(isVowel('y')).toBe(false)
            });
            it('should  return false when executed with a number', function () {
                expect(isVowel(4)).toBe(false)
            });
            it('should return false when executed with a boolean', function () {
                expect(isVowel(true)).toBe(false);
                expect(isVowel(false)).toBe(false);
            });
            it('should return false when executed with a multi-character string', function () {
                expect(isVowel("banana")).toBe(false)
            });

        });
        describe('add',function () {
            it('should be a defined function', function () {
                expect(typeof add).toBe('function');
            });
            it('should return a "number" NaN even with no argument', function () {
                expect(typeof add()).toBe('number');
                expect(isNaN(add())).toBe(true);
            });
            it('should return calculated value when executed with two numbers', function () {
                expect(add(2,3)).toBe(5);
                expect(add(-3,-9)).toBe(-12);
            });
            it('should return the calculated value when one or both arguments are added', function () {
                expect(add("5",6)).toBe(11);
                expect(add(-4,18)).toBe(6);
            });
        })

        })


 });




