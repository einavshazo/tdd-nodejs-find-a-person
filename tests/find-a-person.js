var chai = require('chai');
var expect = chai.expect; // we are using the "expect" style of Chai
var Map = require('./../src/map');

describe('Find a person', function() 
{
    it('Given a person name, return all posts (of a map) containing her name (in any of a post fields)', function() 
    {
        var map = new Map(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley", "Random post"]);
        var posts = map.find_a_person("Or A.")
        expect(posts).to.be.eql(["I met Or A. at Chabad house Bangkok", "We found Or A. R.I.P at Langtang valley"]);
    });
    
     it('Given a number, return the power of it', function() 
    {
        var map = new Map([2,16,4,7]);
        var posts = map.find_a_person(2)
        expect(posts).to.be.eql(4);
    });

});
