describe('Cookie', function() {
    describe('Cookie - Simple operations', function() {
        beforeEach(function() {
            Cookie.clear('test');
        });

        afterEach(function() {
            Cookie.clear('test');
        });

        it('set', function() {
            Cookie.set('test', 'hola');
            var v = Cookie.get('test');
            expect(v).to.equal('hola');
        });

        it('set json', function() {
            var obj = {
                one: '{complicated:"what"}',
                two: '/<>;:'
            }

            Cookie.set('test', obj);
            var v = Cookie.get('test');
            expect(v).to.deep.equal(obj);
        });

        it('clear', function() {
            Cookie.set('test', 'hola');
            var v = Cookie.get('test');
            expect(v).to.equal('hola');

            Cookie.clear('test');
            v = Cookie.get('test');
            expect(null).to.be.null;
        });
    });

    describe('Cookie - JSON operations', function() {
        beforeEach(function() {
            Cookie.clear('test');
        });

        afterEach(function() {
            Cookie.clear('test');
        });

        it('hset - in a non-existant cookie', function() {
            Cookie.hset('test', 'name', 'niyaz');
            var v = Cookie.get('test');
            expect(v).to.deep.equal({ name: 'niyaz' });
        });

        it('hset - in an existing cookie', function() {
            Cookie.set('test', { name: 'niyaz' });
            Cookie.hset('test', 'is', 'awesome');
            var v = Cookie.get('test');
            expect(v).to.deep.equal({ name: 'niyaz', is: 'awesome' });
        });

        it('hset - set to undefined', function() {
            Cookie.set('test', { name: 'niyaz' });
            Cookie.hset('test', 'name', undefined);
            var v = Cookie.get('test');
            expect(v).to.deep.equal({});
        });

        it('hclear', function() {
            Cookie.set('test', { name: 'niyaz' });
            Cookie.hclear('test', 'name');
            var v = Cookie.get('test');
            expect(v).to.deep.equal({});
        });

        it('hget - non-existant cookie', function() {
            var v = Cookie.hget('test', 'name');
            expect(v).to.be.null;
        });

        it('hget - non-existant key', function() {
            Cookie.set('test', { name: 'niyaz' });
            var v = Cookie.hget('test', 'age');
            expect(v).to.be.null;
        });

        it('hget - existing key', function() {
            Cookie.set('test', { name: 'niyaz' });
            var v = Cookie.hget('test', 'name');
            expect(v).to.be.equal('niyaz');
        });

    });
});
