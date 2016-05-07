var expect = require('chai').expect;
var emailFilter = require('../app/filter.js');

describe('Running Filter Test:', function(){
 	it('Should except a list of non duplicate email addresses', function(){
    var arg =  ['4gc44f31@f54bd4g.com',
                '31egaf24@55ee4f53.com',
                '1d15f5eb@b52c44bc.com',
                'b145ecgg@234e4c.com',
                '31egaf24@55ee4f53.com',
                '4gc44f31@f54bd4g.com',
                '1d15f5eb@b52c44bc.com',
                'b145ecgg@234e4c.com'];
    var results = emailFilter.filter(arg);

    expect(results.list.toString()).to.equal('4gc44f31@f54bd4g.com,31egaf24@55ee4f53.com,1d15f5eb@b52c44bc.com,b145ecgg@234e4c.com');
  });
});
