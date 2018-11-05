var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
    it('should senerate the correct message object',()=>{
        var from = 'Joan';
        var text = 'My message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});

describe('generateLocationMessage',()=>{
    it('should generate correct location object', ()=>{
        var from = 'Stan';
        var latitude = 15;
        var longitude = 19;
        var url = 'https://www.google.com/maps?q=15,19';

        var message = generateLocationMessage(from, latitude, longitude)
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, url});
    });
});