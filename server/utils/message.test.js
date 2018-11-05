var expect = require('expect');

var {generateMessage} = require('./message');

describe('generateMessage',()=>{
    it('should senerate the correct message object',()=>{
        var from = 'Joan';
        var text = 'My message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });
});