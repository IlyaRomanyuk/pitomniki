module.exports = function(bh) {
    bh.match('logo', function(ctx) {
        ctx.tag('img').attrs({src: 'http://placehold.it/350x350'});
    }, true);
};
