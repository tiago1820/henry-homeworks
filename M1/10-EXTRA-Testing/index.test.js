const { checkSeatStatus, getRowNumber, book } = require("./homework");

describe('checkSeatStatus', function () {
    it('checkSeatStatus is a function', function () {
        expect(typeof checkSeatStatus).toBe('function');
    });

    it('should throw a TypeError if first parameter is not a string', function () {
        expect(function () {
            return checkSeatStatus(1);
        }).toThrow(new TypeError('First parameter is not a string'));
    });

    it('should throw an error if first parameter is not one letter', function () {
        expect(function () {
            return checkSeatStatus('hola', 1);
        }).toThrow(new Error("First parameter is not one letter"));
    });

    it('Debe tirar un error si la letra no esta en el rango de letras aceptadas', function(){
        expect(function(){
            return checkSeatStatus('F', 1)
        }).toThrow(new Error('La letra no esta en el rango de letras aceptadas'));
    });

    it('should throw a TypeError if second parameter is not a number', function () {
        expect(function () {
            return checkSeatStatus('A', 'cualquier cosa');
        }).toThrow(new TypeError('Second parameter is not a number'));
    });

    it('should return true if the given seat defined by row and colmun is booked', function () {
        expect(checkSeatStatus('A', 1)).toBe(true);
    });

    it('should return true if the given seat defined by row and colmun is booked', function () {
        expect(checkSeatStatus('C', 3)).toBe(false);
    });

});

describe('getRowNumber', function () {
    it('getRowNumber is a function', function () {
        expect(typeof getRowNumber).toBe('function');
    });

    it('should return 0 if the letter given is an A', function () {
        expect(getRowNumber('A')).toBe(0);
    });

    it('should return 2 if the letter given is an A', function () {
        expect(getRowNumber('C')).toBe(2);
    });
});

describe('book', function () {
    it('book is a function', function () {
        expect(typeof book).toBe('function');
    });

    it('should return "Seat in C3 successfully booked" if the given seat is not booked', function () {
        expect(book('C', 3)).toBe('Seat in C3 successfully booked');
    });

    it('should return "Seat in A1 is already booked" if the given seat is not booked', function () {
        expect(book('A', 1)).toBe('Seat in A1 is already booked');
    });
})